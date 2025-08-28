import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

if (!process.env.GOOGLE_API_KEY) {
  console.error('❌ Missing GOOGLE_API_KEY in .env');
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// ===== In-memory stores (demo) =====
const sessions = new Map(); // { sessionId: [ ...messages ] }
const kbStore  = new Map(); // { sessionId: { docs: [{id,text,embedding}] } }
const getSession = (id) => { if (!sessions.has(id)) sessions.set(id, []); return sessions.get(id); };
const getKB      = (id) => { if (!kbStore.has(id))  kbStore.set(id, { docs: [] }); return kbStore.get(id); };

// ===== Gemini client =====
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// ===== Utils =====
function cosine(a, b) {
  const dot = a.reduce((s, v, i) => s + v * (b[i] ?? 0), 0);
  const na  = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const nb  = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  return dot / (na * nb || 1);
}

function normalizeGeminiModel(m) {
  const name = (m || process.env.GEMINI_MODEL || '').trim().toLowerCase();
  // Model berikut valid untuk streaming di v1beta saat ini
  const supported = new Set(['gemini-1.5-pro', 'gemini-1.5-flash']);
  if (!name || name === 'gemini' || name === 'gemini-2.5' || name === 'gemini-2.0') {
    return 'gemini-1.5-pro';
  }
  return supported.has(name) ? name : 'gemini-1.5-pro';
}

function parseRetrySeconds(err) {
  try {
    const m = String(err?.message || err).match(/"retryDelay":"(\d+)s"/);
    if (m) return parseInt(m[1], 10);
  } catch {}
  return null;
}

// ===== Embeddings (Gemini) =====
async function embedText(text) {
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_EMBED || 'text-embedding-004' });
  const res = await model.embedContent(text);
  return res.embedding.values;
}

// ===== Chat (Gemini, SSE streaming) =====
app.post('/api/chat', async (req, res) => {
  const {
    message,
    sessionId   = 'default',
    model,
    temperature = 0.3,
    systemPrompt,
    useRag      = true,
    answerStyle = 'comprehensive', // 'concise' | 'comprehensive'
    maxOutputTokens = 900,         // hemat kuota
  } = req.body || {};

  if (!message) return res.status(400).json({ error: 'message is required' });

  const history = getSession(sessionId);
  const kb      = getKB(sessionId);

  // RAG: ambil konteks dari dokumen yang sudah diupload (txt/md)
  let context = '';
  if (useRag && kb.docs.length) {
    try {
      const qVec   = await embedText(message);
      const ranked = kb.docs
        .map(d => ({ ...d, score: cosine(qVec, d.embedding) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      context = ranked.map(r => `[DOC ${r.id}]\n${r.text}`).join('\n\n');
    } catch (e) {
      console.warn('RAG error:', e.message);
    }
  }

  // Gaya jawaban
  const STYLE = answerStyle === 'concise'
    ? 'Jawab singkat, langsung ke inti, gunakan bullet seperlunya.'
    : 'Jawab menyeluruh dan terstruktur: ringkasan, langkah-langkah, contoh, dan poin penting. Gunakan heading, daftar, dan blok kode bila relevan.';

  // SSE headers
  res.setHeader('Content-Type',  'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection',    'keep-alive');

  // System instruction untuk Gemini (pakai systemInstruction, bukan role "system")
  const sys = (
    systemPrompt?.trim() ||
    'You are Troppion AI Assistant. Default to Bahasa Indonesia when the user writes Indonesian.'
  ) + ` Gaya jawaban: ${STYLE}` + (context ? `\n\nWhen relevant, use the following context to answer. If not relevant, ignore it.\n\n${context}` : '');

  // Bangun contents (tanpa system, karena pakai systemInstruction)
  const contents = [
    ...history.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
    { role: 'user', parts: [{ text: message }] },
  ];

  // helper streaming
  async function streamWithModel(modelName) {
    const gem = genAI.getGenerativeModel({ model: modelName, systemInstruction: sys });
    const stream = await gem.generateContentStream({
      contents,
      generationConfig: { temperature, maxOutputTokens },
    });
    let full = '';
    for await (const chunk of stream.stream) {
      const t = chunk?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      if (t) {
        full += t;
        res.write(`data: ${JSON.stringify({ token: t })}\n\n`);
      }
    }
    return full;
  }

  try {
    // 1) coba model utama (dinormalisasi)
    const primaryModel = normalizeGeminiModel(model);
    let full = await streamWithModel(primaryModel);

    // simpan riwayat & selesai
    history.push({ role: 'user', content: message });
    history.push({ role: 'assistant', content: full });
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (e) {
    const msg = String(e?.message || e);
    // 2) kalau 404 model tidak ada → fallback ke pro
    if (/not found|models\/.+ is not found/i.test(msg)) {
      try {
        const full = await streamWithModel('gemini-1.5-pro');
        history.push({ role: 'user', content: message });
        history.push({ role: 'assistant', content: full });
        res.write('data: [DONE]\n\n');
        res.end();
        return;
      } catch (e2) {
        console.error('Fallback (not found) failed:', e2?.message);
      }
    }

    // 3) kalau 429/quota → fallback ke flash
    if (/429|quota|rate limit/i.test(msg)) {
      try {
        const retrySec = parseRetrySeconds(e) || 20;
        const full = await streamWithModel('gemini-1.5-flash');
        history.push({ role: 'user', content: message });
        history.push({ role: 'assistant', content: full });
        res.write('data: [DONE]\n\n');
        res.end();
        return;
      } catch (e3) {
        const retrySec = parseRetrySeconds(e3) || parseRetrySeconds(e) || 30;
        res.write(`data: ${JSON.stringify({
          error: `Rate limit tercapai. Coba lagi dalam ~${retrySec} detik atau aktifkan billing / gunakan model gemini-1.5-flash.`,
        })}\n\n`);
        res.end();
        return;
      }
    }

    console.error('Chat error:', e);
    try { res.write(`data: ${JSON.stringify({ error: msg })}\n\n`); res.end(); } catch {}
  }
});

// ===== Upload text docs untuk RAG (txt/md) =====
app.post('/api/upload', async (req, res) => {
  const { sessionId = 'default', text } = req.body || {};
  if (!text || typeof text !== 'string') return res.status(400).json({ error: 'text required (.txt/.md parsed as raw text)' });
  try {
    const emb = await embedText(text);
    const kb  = getKB(sessionId);
    const id  = (kb.docs.length + 1).toString().padStart(2, '0');
    kb.docs.push({ id, text: text.slice(0, 4000), embedding: emb });
    res.json({ ok: true, count: kb.docs.length });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ===== Reset KB & Chat =====
app.post('/api/kb/reset', (req, res) => { const { sessionId = 'default' } = req.body || {}; kbStore.set(sessionId, { docs: [] }); res.json({ ok: true }); });
app.post('/api/reset',   (req, res) => { const { sessionId = 'default' } = req.body || {}; sessions.set(sessionId, []); res.json({ ok: true }); });

// ===== Info provider (Gemini only) =====
app.get('/api/providers', (_req, res) => {
  res.json({ providers: [
    { id: 'gemini', label: 'Google Gemini', defaultModel: normalizeGeminiModel(process.env.GEMINI_MODEL) },
  ]});
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`✅ Server listening http://localhost:${PORT}`));
