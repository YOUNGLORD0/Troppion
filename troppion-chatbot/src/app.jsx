import React, { useEffect, useRef, useState } from "react";
import { marked } from "marked";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Halo! Saya Troppion AI. Tanyakan apa saja, dan kamu bisa unggah gambar juga." },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [style, setStyle] = useState("comprehensive");
  const [files, setFiles] = useState([]); // ⬅️ simpan File[] untuk preview & upload
  const listRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  function onPickFiles(e) {
    const picked = Array.from(e.target.files || []);
    // filter tipe dan batasi jumlah
    const allowed = ["image/png", "image/jpeg", "image/webp"];
    const next = picked.filter(f => allowed.includes(f.type)).slice(0, 5);
    setFiles(prev => [...prev, ...next].slice(0, 5));
    e.target.value = ""; // reset agar bisa pilih file yang sama lagi jika perlu
  }

  function removeFile(idx) {
    setFiles(prev => prev.filter((_, i) => i !== idx));
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        const dataUrl = fr.result; // "data:image/png;base64,AAAA..."
        const base64 = String(dataUrl).split(",")[1] || "";
        resolve({ mime: file.type, data: base64 });
      };
      fr.onerror = reject;
      fr.readAsDataURL(file);
    });
  }

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text && files.length === 0) return;

    setInput("");
    setIsLoading(true);
    // tampilkan pesan user (teks saja biar rapi; gambar akan dipreview terpisah)
    if (text) setMessages(prev => [...prev, { role: "user", content: text }]);

    // convert semua files ke base64
    let packedImages = [];
    try {
      packedImages = await Promise.all(files.map(fileToBase64));
    } catch (err) {
      setIsLoading(false);
      setMessages(prev => [...prev, { role: "assistant", content: `⚠️ Gagal membaca gambar: ${err?.message || err}` }]);
      return;
    }
    // reset file list setelah terkirim
    setFiles([]);

    // streaming SSE
    const ac = new AbortController();
    abortRef.current = ac;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          images: packedImages,      // ⬅️ kirim ke server
          sessionId: "troppion",
          answerStyle: style,
          temperature: 0.3
        }),
        signal: ac.signal,
      });

      if (!res.ok || !res.body) {
        const errText = await res.text().catch(() => "");
        throw new Error(errText || `HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let sseBuffer = "";
      let ai = "";

      // siapkan bubble assistant kosong
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        sseBuffer += decoder.decode(value, { stream: true });
        const parts = sseBuffer.split("\n\n");
        sseBuffer = parts.pop() || "";

        for (const part of parts) {
          const line = part.trim();
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (payload === "[DONE]") {
            setIsLoading(false);
            abortRef.current = null;
            return;
          }
          try {
            const obj = JSON.parse(payload);
            if (obj.error) {
              setIsLoading(false);
              setMessages(prev => [...prev, { role: "assistant", content: `⚠️ ${obj.error}` }]);
              abortRef.current = null;
              return;
            }
            if (obj.token) {
              ai += obj.token;
              setMessages(prev => {
                const out = [...prev];
                for (let i = out.length - 1; i >= 0; i--) {
                  if (out[i].role === "assistant") {
                    out[i] = { ...out[i], content: ai };
                    break;
                  }
                }
                return out;
              });
            }
          } catch { /* ignore non-JSON */ }
        }
      }

      setIsLoading(false);
      abortRef.current = null;
    } catch (err) {
      setIsLoading(false);
      abortRef.current = null;
      setMessages(prev => [...prev, { role: "assistant", content: `⚠️ Gagal memuat: ${err?.message || err}` }]);
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Troppion Chatbot AI</h1>
        <div className="actions">
          <label style={{opacity: .9}}>
            Gaya:&nbsp;
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="ghost">
              <option value="comprehensive">Menyeluruh</option>
              <option value="concise">Ringkas</option>
            </select>
          </label>

          {/* input file */}
          <label className="ghost" style={{ cursor: "pointer" }}>
            📎 Gambar
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              multiple
              onChange={onPickFiles}
              className="ghost"
              style={{ display: "none" }}
            />
          </label>
        </div>
      </header>

      {/* preview gambar terpilih */}
      {files.length > 0 && (
        <div style={{ padding: "8px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {files.map((f, i) => (
            <Preview key={i} file={f} onRemove={() => removeFile(i)} />
          ))}
        </div>
      )}

      <main ref={listRef} className="chat">
        {messages.map((m, i) => <Message key={i} role={m.role} content={m.content} />)}
        {isLoading && <div className="typing">AI sedang menganalisis…</div>}
      </main>

      <form onSubmit={sendMessage} className="input">
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pertanyaan… (bisa lampirkan gambar)"
        />
        <button type="submit" disabled={isLoading || (!input.trim() && files.length === 0)}>
          Kirim
        </button>
      </form>
    </div>
  );
}

function Message({ role, content }) {
  const html = { __html: marked.parse(content || "") };
  return (
    <div className={`msg ${role}`}>
      <div className="avatar">{role === "assistant" ? "🤖" : "🧑"}</div>
      <div className="bubble">
        <div className="content" dangerouslySetInnerHTML={html} />
      </div>
    </div>
  );
}

function Preview({ file, onRemove }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const u = URL.createObjectURL(file);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [file]);
  return (
    <div style={{
      position: "relative", width: 96, height: 96, borderRadius: 12, overflow: "hidden",
      border: "1px solid #1f2937", background: "#0b1222"
    }}>
      <img src={url} alt={file.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <button
        type="button"
        onClick={onRemove}
        title="Hapus"
        style={{
          position: "absolute", top: 6, right: 6, border: "none", borderRadius: 8,
          padding: "4px 6px", fontSize: 12, cursor: "pointer",
          background: "rgba(0,0,0,.5)", color: "#eee"
        }}
      >
        ✕
      </button>
    </div>
  );
}
