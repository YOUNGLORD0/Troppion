// widget-chatbot.js — Troppion Chatbot (product-centric)
(() => {
  const ATTR_URL     = "data-chatbot-url";
  const ATTR_TITLE   = "data-title";
  const ATTR_OPEN    = "data-open";          // "true" => buka saat load
  const ATTR_PVAR    = "data-products-var";  // nama var global, default: "PRODUCTS"
  const ATTR_SEL     = "data-products-selector"; // fallback scrape selector (".product-card")
  const ATTR_FEED    = "data-products-url";      // fallback feed JSON
  // --- di bagian atas, setelah konstanta ATTR_* ---
  const ATTR_W = "data-width";   // px, misal 450
  const ATTR_H = "data-height";  // px, misal 650


  const LS_KEY = "troppion_chatbot_open";

  // ----- detect caller <script> -----
  const currentScript = document.currentScript || (() => {
    const s = document.getElementsByTagName("script");
    return s[s.length - 1];
  })();

  // ----- resolve URLs -----
  function computeDefaultUrl() {
    const attr = currentScript?.getAttribute(ATTR_URL);
    if (attr) return attr;
    const src = currentScript?.getAttribute("src");
    if (src) {
      try {
        const u = new URL(src, document.baseURI);
        return u.href.replace(/[^/]+$/, "") + "chatbot.html";
      } catch {}
    }
    if (location?.origin) return location.origin + "/chatbot.html";
    return "http://localhost:5173/chatbot.html";
  }
  const CHATBOT_URL = computeDefaultUrl().replace(/([^:]\/)\/+/g, "$1");
  const TITLE       = currentScript?.getAttribute(ATTR_TITLE) || "Troppion Assistant";
  const OPEN_DEFAULT= (currentScript?.getAttribute(ATTR_OPEN) || "").toLowerCase() === "true";
  const PVAR        = currentScript?.getAttribute(ATTR_PVAR) || "PRODUCTS";
  const SCRAPE_SEL  = currentScript?.getAttribute(ATTR_SEL) || ".product-card";
  const FEED_URL    = currentScript?.getAttribute(ATTR_FEED) || "";

  // ----- host + shadow -----
  const host = document.createElement("div");
  host.id = "troppion-chatbot-host";
  host.style.all = "initial";
  host.style.position = "fixed";
  host.style.inset = "auto 16px 16px auto";
  host.style.zIndex = "2147483647";
  document.documentElement.appendChild(host);
  const root = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
style.textContent = `
  :host { --tc-width: 450px; --tc-height: 650px; } /* <- gunakan :host */
  .tc-wrap { position: relative; }
  .tc-btn {
    all: unset; display: grid; place-items: center;
    width: 60px; height: 60px; border-radius: 999px;
    background: #FFA000; color:#000; cursor:pointer;
    box-shadow: 0 8px 24px rgba(0,0,0,.18);
    font: 600 16px/1 system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    transition: transform .12s ease, box-shadow .12s ease, opacity .2s ease;
  }
  .tc-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(0,0,0,.22); }
  .tc-badge {
    position: absolute; top:-6px; right:-6px; min-width:18px; height:18px; padding:0 6px;
    border-radius:999px; background:#fff; color:#111; border:1px solid rgba(0,0,0,.08);
    font: 700 11px/18px system-ui; text-align:center;
  }
  .tc-overlay { position: fixed; inset: 0; background: transparent; display:none; }
  .tc-overlay.on { display:block; }
  .tc-panel {
    position: absolute; right:0; bottom:80px;
    width: var(--tc-width, 450px);   /* <- ada fallback */
    height: var(--tc-height, 650px); /* <- ada fallback */
    max-width: calc(100vw - 24px);
    background:#fff; border-radius:16px; overflow:hidden; box-sizing:border-box;
    box-shadow: 0 16px 48px rgba(0,0,0,.24);
    opacity:0; transform: translateY(8px); pointer-events:none;
    transition: opacity .18s ease, transform .18s ease;
  }
  .tc-panel.open { opacity:1; transform:translateY(0); pointer-events:auto; }
  .tc-header {
    height:44px; display:flex; align-items:center; padding:0 12px;
    background:#111; color:#fff; font:600 14px/1 system-ui;
  }
  .tc-close { margin-left:auto; cursor:pointer; font-size:18px; width:28px; height:28px;
    display:grid; place-items:center; border-radius:8px; }
  .tc-close:hover { background: rgba(255,255,255,.12); }
  .tc-iframe { width:100%; height: calc(100% - 44px); border:0; display:block; }

  @media (max-width:480px){
    .tc-panel{ width:min(100vw - 16px, 420px); height:min(70vh, 560px);}
    .tc-btn{ width:56px; height:56px;}
  }
  @media (prefers-reduced-motion: reduce){ .tc-panel, .tc-btn { transition:none; } }
`;
root.appendChild(style);


  // ----- button -----
  const wrap = document.createElement("div");
  wrap.className = "tc-wrap";
  const btn = document.createElement("button");
  btn.className = "tc-btn";
  btn.setAttribute("aria-label", "Open chatbot");
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 12a8 8 0 1 1 4.9 7.4L4 20l1.1-3.3A7.96 7.96 0 0 1 4 12Z" stroke="currentColor" stroke-width="2"/>
      <circle cx="9" cy="12" r="1.5" fill="currentColor"/><circle cx="13.5" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="12" r="1.5" fill="currentColor"/>
    </svg>`;
  const badge = document.createElement("div");
  badge.className = "tc-badge"; badge.textContent = "1";
  wrap.appendChild(btn); wrap.appendChild(badge); root.appendChild(wrap);

  // ----- overlay + panel + iframe -----
  const overlay = document.createElement("div"); overlay.className = "tc-overlay"; root.appendChild(overlay);
  const panel = document.createElement("div"); panel.className = "tc-panel";
  // setelah: const panel = document.createElement("div"); panel.className = "tc-panel";
  const W = parseInt(currentScript?.getAttribute(ATTR_W) || "", 10);
  const H = parseInt(currentScript?.getAttribute(ATTR_H) || "", 10);
  if (!isNaN(W) && W > 0) panel.style.width  = W + "px";
  if (!isNaN(H) && H > 0) panel.style.height = H + "px";

  panel.innerHTML = `<div class="tc-header"><span>${TITLE}</span><div class="tc-close" title="Tutup" aria-label="Close" role="button">✕</div></div>`;
  const iframe = document.createElement("iframe");
  iframe.className = "tc-iframe"; iframe.allow = "clipboard-write; microphone;"; iframe.referrerPolicy = "no-referrer";
  iframe.src = CHATBOT_URL;
  panel.appendChild(iframe); root.appendChild(panel);

  // ----- open/close -----
  const setOpen = (v) => {
    if (v){ panel.classList.add("open"); overlay.classList.add("on"); badge.style.display="none"; try{localStorage.setItem(LS_KEY,"1");}catch{} }
    else  { panel.classList.remove("open"); overlay.classList.remove("on"); try{localStorage.setItem(LS_KEY,"0");}catch{} }
  };
  const toggle = () => setOpen(!panel.classList.contains("open"));
  btn.addEventListener("click", toggle);
  panel.querySelector(".tc-close").addEventListener("click", () => setOpen(false));
  overlay.addEventListener("click", () => setOpen(false));
  window.addEventListener("keydown", (e)=>{ if(e.key==="Escape") setOpen(false); });

  // ----- PRODUCTS: ambil dari window.PRODUCTS / window.products / feed / scrape -----
  function normalizeProducts(list){
    // amankan struktur minimal
    return (Array.isArray(list) ? list : []).map((p, i)=>({
      id: p.id || `prod-${i}`,
      title: p.name || p.title || "(Tanpa nama)",
      price: p.price ?? null,
      url: p.url || p.link || null,
      image: (p.images && p.images[0]) || p.image || null,
      category: p.category || null,
      tags: p.tags || [],
      desc: p.desc || p.description || ""
    }));
  }

  function fromGlobal(){
    const byName = window[PVAR];
    if (Array.isArray(byName) && byName.length) return normalizeProducts(byName);
    if (Array.isArray(window.products) && window.products.length) return normalizeProducts(window.products);
    if (Array.isArray(window.PRODUCTS) && window.PRODUCTS.length) return normalizeProducts(window.PRODUCTS);
    return null;
  }

  async function fromFeed(){
    if (!FEED_URL) return null;
    try {
      const r = await fetch(FEED_URL, { credentials: "same-origin" });
      if (!r.ok) return null;
      const data = await r.json();
      return normalizeProducts(data);
    } catch { return null; }
  }

  function fromScrape(){
    const cards = document.querySelectorAll(SCRAPE_SEL);
    if (!cards.length) return null;
    const items = [];
    cards.forEach((el, i) => {
      const title = el.querySelector(".title, h3, h2, .name")?.textContent?.trim();
      const priceTxt = el.querySelector(".price")?.textContent?.replace(/[^\d]/g, "");
      const a = el.querySelector("a[href]");
      const img = el.querySelector("img")?.getAttribute("src");
      if (title && a) {
        items.push({
          id: el.getAttribute("data-id") || `dom-${i}`,
          title,
          price: priceTxt ? Number(priceTxt) : null,
          url: a.getAttribute("href"),
          image: img || null,
          category: el.getAttribute("data-category") || null,
          tags: (el.getAttribute("data-tags") || "").split(",").filter(Boolean),
          desc: ""
        });
      }
    });
    return normalizeProducts(items);
  }

  async function waitForProducts(msTotal = 3000, step = 150){
    const t0 = Date.now();
    // tunggu global PRODUCTS up to msTotal
    while (Date.now() - t0 < msTotal) {
      const g = fromGlobal();
      if (g && g.length) return g;
      await new Promise(r => setTimeout(r, step));
    }
    // fallback feed/scrape
    const feed = await fromFeed(); if (feed && feed.length) return feed;
    const scr  = fromScrape();     if (scr  && scr.length)  return scr;
    return [];
  }

  // ----- kirim bootstrap ke iframe saat loaded -----
  iframe.addEventListener("load", async () => {
    const products = await waitForProducts();
    const payload = {
      type: "tc:bootstrap",
      title: document.title,
      url: location.href,
      path: location.pathname,
      referrer: document.referrer || null,
      products
    };
    try {
      const target = new URL(iframe.src, location.origin).origin;
      iframe.contentWindow.postMessage(payload, target);
    } catch (e) {
      // last resort
      iframe.contentWindow.postMessage(payload, "*");
    }
  });

  // ----- iframe bisa minta refresh data produk -----
  window.addEventListener("message", async (e) => {
    const d = e.data;
    if (!d || d.type !== "tc:requestProducts") return;
    const products = await waitForProducts();
    iframe.contentWindow.postMessage({ type: "tc:products", products }, e.origin || "*");
  });

  // ----- restore open state -----
  let shouldOpen = OPEN_DEFAULT;
  try {
    const saved = localStorage.getItem(LS_KEY);
    if (saved === "1") shouldOpen = true;
    if (saved === "0") shouldOpen = false;
  } catch {}
  if (shouldOpen) setOpen(true);
})();
