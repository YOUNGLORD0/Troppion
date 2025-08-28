export const systemPrompt = `Anda adalah asisten penjualan Troppion. Tanyakan olahraga, level, jumlah, deadline, bahan, anggaran; lalu rekomendasikan produk, estimasi produksi, dan opsi custom.`

export function analyzeUserInput(input){
  const s = input.toLowerCase()
  const sportsKeywords = {
    'sepak bola': ['sepak bola','football','soccer','bola'],
    'futsal': ['futsal'],
    'basket': ['basket','basketball','bola basket'],
    'e-sport': ['e-sport','esport','gaming','game','mobile legends','ml','valorant','pubg'],
    'golf': ['golf'],
    'medali': ['medali','medal','fun run','lari','marathon']
  }
  const levelKeywords = {
    'SD': ['sd','sekolah dasar','elementary'],
    'SMP': ['smp','sekolah menengah pertama','junior high'],
    'SMA': ['sma','sekolah menengah atas','senior high'],
    'Universitas': ['universitas','kampus','college','university'],
    'Perusahaan': ['perusahaan','corporate','company','kantor'],
    'Profesional': ['profesional','pro','professional']
  }
  const eventKeywords = {
    'turnamen': ['turnamen','tournament','kompetisi','lomba'],
    'bergilir': ['bergilir','rotating','bergantian'],
    'juara': ['juara','champion','winner','pemenang']
  }
  const find = dict => Object.entries(dict).find(([k,arr])=>arr.some(t=>s.includes(t)))?.[0]
  const sport = find(sportsKeywords)
  const level = find(levelKeywords)
  const event = find(eventKeywords)
  const tip = sport==='e-sport'? 'Pertimbangkan piala dengan RGB lighting dan tema gaming modern.'
    : level==='SD'? 'Pilih desain colorful dan ukuran sedang agar aman & menarik untuk anak.'
    : event==='bergilir'? 'Gunakan bahan tahan lama (logam solid, dudukan marmer) dan pastikan mudah dipindahkan.'
    : 'Sesuaikan bahan & ukuran dengan prestise acara dan anggaran.'
  const summary = `${sport? 'produk '+sport : 'kebutuhan Anda'}${level? ' tingkat '+level:''}${event? ' untuk '+event:''}`
  return { detectedSport:sport, detectedLevel:level, detectedEvent:event, tip, summary }
}

export function getRecommendations(analysis, PRODUCTS){
  const map = { 'sepak bola':'Sepak Bola','futsal':'Futsal','basket':'Basket','e-sport':'E-Sport','golf':'Golf','medali':'Medali' }
  const cat = map[analysis.detectedSport]
  let recs = []
  if (cat){ recs = PRODUCTS.filter(p=>p.category===cat) }
  if (!recs.length){ recs = PRODUCTS.slice(0,3) }
  return recs.slice(0,3)
}
