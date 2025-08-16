/* ===== THEME (DARK/LIGHT) ===== */
(function(){
  const STORAGE_KEY = 'theme'; // 'dark' | 'light'

  const prefersDark = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getInitial = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return prefersDark() ? 'dark' : 'light';
  };

  const apply = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.textContent = theme === 'dark' ? '🌙' : '☀️';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke terang' : 'Ganti ke gelap');
    });
  };

  const set = (theme) => { localStorage.setItem(STORAGE_KEY, theme); apply(theme); };
  const toggle = () => {
    const cur = document.documentElement.getAttribute('data-theme') || getInitial();
    set(cur === 'dark' ? 'light' : 'dark');
  };

  apply(getInitial());

  function bindToggles(){
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.addEventListener('click', toggle);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindToggles);
  } else { bindToggles(); }

  window.addEventListener('storage', (e)=>{
    if (e.key === STORAGE_KEY && (e.newValue === 'dark' || e.newValue === 'light')) apply(e.newValue);
  });
})();

/* ===== UTIL ===== */
function $$ (sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
function $(sel, root=document){ return root.querySelector(sel); }
