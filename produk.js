/* =====================================================================
   produk.js
   - Berisi: DATA PRODUK + seluruh logika render/filter/modal/WA
   - Tujuan: produk.html cukup "memanggil" file ini saja.
   ===================================================================== */

// ========================= DATA PRODUK =========================

const products = [
  
  { id:'P-001', name:'Piala Sepak Bola Gema Cup 2024 Ambon', category:'Sepak Bola',
    images:['image/sepakbola/pialasepakbola6.jpg','image/sepakbola/pialasepakbola6.jpg','image/sepakbola/pialasepakbola6.jpg'],
    stock:'Ready', tags:['Ukiran Laser','Bahan Metal','Base Marmer'],
    desc:`
    <p>Sepak bola menjadi salah satu permainan olahraga yang digemari di berbagai penjuru dunia. Hal ini menjadi alasan banyaknya turnamen sepak bola yang diselenggarakan. Salah satunya adalah Gema Cup. Dalam turnamen tersebut diperebutkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala sepak bola</a> yang bergengsi. Piala Gema Cup 2024 didesain secara khusus hingga mampu menjadi hadiah kemenangan yang kreatif.</p>
    <p>Dalam merancang <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala olahraga</a> memang paling utama adalah menyesuaikan dengan cabang olahraga yang dipertandingkan supaya relevan. Di samping itu, bisa juga menjadikan referensi piala yang sudah pernah dibuat untuk dimodifikasi agar lebih inovatif. Buatlah kebutuhan piala Anda segera dengan mengonsultasikannya bersama customer service kami.</p>
    <p></p>
    `,
    specs:{Ukuran:'Tinggi total 45 cm, Lebar Trophy 24 cm, Diameter dudukan 15 cm', Bahan:'Logam, Pita', Teknik:'Nikel, Hitam, Kuning'}
  },
  { id:'P-002', name:'Piala ESPEELSA Cup Lomba Futsal Putra Tingkat SD Se – Provinsi DIY', category:'Futsal',
    images:['image/futsal/futsal2.webp','image/futsal/futsal2.webp'],
    stock:'Pre-Order', tags:['Bergilir','Gravir Logo'],
    desc:`
    <p>ESPEELSA Cup 2025 merupakan ajang kompetisi futsal tingkat SD se-Provinsi DIY yang diselenggarakan untuk mencari bakat-bakat muda di dunia olahraga. Turnamen ini menjadi bagian dari upaya meningkatkan sportivitas dan semangat kompetitif anak-anak dalam dunia <a href="https://troppion.com/piala-event/piala-olahraga/piala-futsal/" target="_blank" rel="noopener" class="highlight-link">futsal</a>.</p>
    <p>Piala ESPEELSA Cup ini dibuat dengan desain elegan, menggunakan material logam berlapis emas yang mencerminkan prestise dan kebanggaan. Dengan bentuk yang kokoh dan detail ukiran yang eksklusif, <a href="https://troppion.com/piala-event/piala-olahraga/piala-futsal/" target="_blank" rel="noopener" class="highlight-link">piala futsal</a> ini menjadi simbol kemenangan yang layak bagi para juara.</p>
    <p>Rayakan kemenangan dengan piala eksklusif dari <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion</a>. Kami menghadirkan desain piala yang mewah dan berkelas, menjadikan setiap momen juara lebih bermakna.</p>
    `,
    specs:{Ukuran:'Tinggi 30 cm, Diameter dudukan 9 cm', Bahan:'Logam', Teknik:'Kuningan cutting etsa cat'}
  },
  { id:'P-101', name:'Piala SOERABAJA CHAMPIONS LEAGUE', category:'Basket',
    images:['image/basket/basket3.jpg','image/basket/basket3.jpg','image/basket/basket3.jpg'],
    stock:'Ready', tags:['Tema Klub','Custom Logo'],
    desc:`
    <p>Dalam ajang bergengsi SOERABAJA CHAMPIONS LEAGUE, setiap momen menjadi catatan sejarah yang tak terlupakan bagi peserta dan penggemar. Troppion.com menghadirkan <a href="https://troppion.com/portofolio/" target="_blank" rel="noopener" class="highlight-link">piala custom</a> eksklusif untuk memperingati kompetisi ini, menciptakan lambang kehormatan yang mewakili semangat, kekuatan, dan dedikasi para atlet basket.</p>
    <p>Piala SOERABAJA CHAMPIONS LEAGUE – CHAMPION THE FINAL, disponsori oleh DIABLO BASKETBALL, adalah simbol prestasi tertinggi dalam turnamen. Didesain dengan keahlian tinggi dan dibuat dari logam berkualitas, <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">piala basket</a> ini menonjolkan keindahan, kekuatan, dan keabadian, menjadikannya penghargaan yang sangat diidamkan oleh setiap tim.</p>
    <p>Untuk tim yang mendambakan piala logam custom yang elegan dan tahan lama, <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion.com</a> siap mewujudkan keinginan Anda. Hubungi customer service kami untuk mendiskusikan desain piala impian Anda, dan biarkan kami membantu Anda mengabadikan prestasi dengan piala yang tak hanya simbol kemenangan, tapi juga karya seni. Jangan lewatkan kesempatan untuk membuat turnamen basket Anda lebih berkesan dengan Troppion. Kontak kami sekarang dan mulai ciptakan sejarah Anda!</p>
    `,
    specs:{Ukuran:'', Bahan:'Logam kuningan, kayu (dudukan)', Warna:'	Golf (piala utama), silver (variasi kombinasi), coklat (dudukan)'}
  },
  { id:'P-201', name:'Piala Sepak Bola Juara RSST Futsal Tournament 2024 Klaten', category:'Sepak Bola',
    images:['image/futsal/futsal5.jpg','image/futsal/futsal5.jpg'],
    stock:'Ready', tags:['Full Custom','Ukiran Laser'],
    desc:`
    <p>Turnamen Futsal RSST 2024 di Klaten merupakan kompetisi yang dinantikan, mengumpulkan tim-tim futsal terbaik untuk bersaing merebutkan gelar juara. Acara ini tidak hanya tentang persaingan, tetapi juga memperkuat tali persaudaraan antar pemain dan meningkatkan gairah olahraga di komunitas.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> Juara RSST Futsal Tournament 2024 Klaten, dibuat khusus oleh Troppion, adalah simbol prestasi tertinggi bagi tim pemenang. Dengan desain yang elegan dan dibuat dari resin berkualitas, piala ini mewakili kebanggaan dan kegembiraan atas kemenangan yang diraih.</p>
    <p>Ingin <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">piala sepak bola</a> atau futsal custom yang unik untuk turnamen Anda? Hubungi customer service Troppion sekarang juga! Kami menawarkan piala dari resin dengan desain yang dapat disesuaikan, memastikan penghargaan Anda tidak hanya berkesan, tetapi juga berarti. Percayakan momen kemenangan Anda dengan Troppion, dimana setiap detail piala diproduksi dengan keahlian dan kecintaan.</p>
    `,
    specs:{Ukuran:'	Tinggi Total 30cm, Tinggi Badan 23.5cm, Tinggi dudukan 6.5cm, diameter dudukan 15.5cm', Bahan:'Resin dan Akrilik', Warna:'	Hitam, Gold, dan Hijau tosca'}
  },
  { id:'P-301', name:'Piala Bergilir E- Sport Mobile Legends RS Persahabatan Jakarta', category:'E-Sport',
    images:['image/esport/esport6.jpg','image/esport/esport6.jpg','image/esport/esport6.jpg'],
    stock:'Ready', tags:['RGB Base','Tema Game'],
    desc:`
    <p>Mobile Legends telah menjadi salah satu game E-sport yang paling populer, mengumpulkan jutaan pemain dan penggemar dari seluruh dunia. Permainan ini tidak hanya tentang strategi dan keterampilan, tetapi juga membangun kerjasama tim dan persahabatan di antara pemain.</p>
    <p>Dalam rangka memperkuat tali persahabatan dan meningkatkan kebersamaan, RS Persahabatan Jakarta mengadakan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">piala bergilir</a> Persahabatan Cup E-Sport Mobile Legends. Acara ini bertujuan untuk mengumpulkan para karyawan dan komunitas di sekitar untuk berkompetisi dalam suasana yang menyenangkan dan penuh sportivitas, dengan piala bergilir sebagai simbol kehormatan bagi tim pemenang.</p>
    <p>Bagi penyelenggara turnamen E-sport yang ingin memberikan penghargaan yang elegan dan berkesan, Troppion menawarkan layanan pembuatan <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">piala e-sport</a> custom dari logam. Kami siap membantu Anda mendesain piala yang unik dan menarik, yang tidak hanya melambangkan keberhasilan tetapi juga semangat kompetisi dan kerjasama tim. Hubungi customer service Troppion sekarang untuk konsultasi dan desain piala E-sport impian Anda.</p>
    `,
    specs:{Ukuran:'Tinggi 42.5cm,Tinggi dudukan 7.5cm, Panjang 18cm, Lebar 14cm, Panjang Logo 28cm', Bahan:'	Logam, Resin', Warna:'Gold dan Hitam'}
  },
  {
    id: 'G-002',
    name: 'Medali Sinergi Tepok Bulu 2025 FT Waingapu Sport PT Pertamina',
    category: 'Medali',
    images: ['image/medali/medali1.jpg', 'image/medali/medali1.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Acara olahraga <strong>Sinergi Tepok Bulu</strong> yang diselenggarakan oleh Pertamina Fuel Terminal Wangapu menjadi ajang kolaborasi dan semangat sportivitas. Dengan tujuan mempererat sinergi antarunit, acara ini menciptakan momen kebersamaan yang penuh energi dan semangat kompetisi.</p>

    <p><a href="https://troppion.com/medali/" target="_blank" rel="noopener" class="highlight-link">Medali</a> Sinergi Tepok Bulu ini didesain eksklusif dengan tiga varian: emas, perak, dan perunggu. Dibuat dari material berkualitas tinggi dengan detail yang presisi, medali ini tidak hanya simbol kemenangan, tetapi juga kenang-kenangan berharga bagi para peserta yang berprestasi.</p>

    <p>Pesan medali eksklusif untuk event Anda hanya di JogjaPlakat. Hubungi kami sekarang untuk menghadirkan penghargaan dengan kualitas premium!</p>
    `,
    specs:{Ukuran:'Diameter medali 6.5 cm', Bahan:'Logam, Tali medali', Teknik:'Kuningan etsa masir bolak balik krom emas, Nikel, Perunggu'} 
  },
  { id:'G-001', name:'Medali Fun Run Bulan K3 Nasional 2025 PT Buma', category:'Medali',
    images:['image/medali/medali2.jpg','image/medali/medali2.jpg'],
    stock:'Pre-Order', tags:['Laser Cut','Kotak Premium'],
    desc:`
    <p>Bulan K3 Nasional 2025 menjadi momen penting dalam meningkatkan kesadaran akan keselamatan kerja. Dalam rangkaian kegiatan ini, event Fun Run sukses menggaet antusiasme peserta sebagai bentuk kampanye kreatif untuk kesehatan dan keselamatan di tempat kerja.</p>

    <p><a href="https://troppion.com/medali/" target="_blank" rel="noopener" class="highlight-link">Medali</a> Fun Run ini dirancang khusus dengan kombinasi material premium, menampilkan logo acara yang elegan dan tali dengan desain modern. Sebagai simbol kemenangan, medali ini tidak hanya bernilai estetika, tetapi juga menjadi kenang-kenangan yang penuh makna dari momen istimewa ini.</p>

    <p>Dapatkan produk custom berkualitas hanya di <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion.</a> Jadikan acara Anda lebih berkesan dengan desain eksklusif yang mencerminkan identitas unik Anda!</p>
  `,
    specs:{Ukuran:'Diameter medali 6.5 cm, Tebal 8 mm', Bahan:'Logam, Akrilik, Tali 3 x 90 cm', Teknik:'Akrilik print UV, Kuningan etsa cat, Tali printing'}
  },
   {
    id: '',
    name: 'Piala Bergilir Sepak Bola Irmao Timor',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola2.jpg', 'image/sepakbola/pialasepakbola2.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Taça Rotativo Irmão Timor adalah sebuah ajang bergengsi yang mengedepankan semangat sportivitas dan persaudaraan. Event ini menjadi momen istimewa untuk menghargai prestasi terbaik dari para peserta yang berkompetisi dengan penuh dedikasi.</p>
    <p>Piala Irmao Timor ini dirancang sebagai <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> dengan desain elegan berbahan dasar emas, dilengkapi dengan detail ukiran pada badan piala. Bagian atasnya menampilkan bentuk bola yang mewah, mempertegas simbol kejuaraan olahraga. Base hitam kokoh melengkapi tampilan piala, menjadikannya simbol kemenangan yang layak diperjuangkan.</p>
    <p>Ingin membuat piala eksklusif untuk acara Anda? <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> adalah solusi tepat untuk menghadirkan desain piala premium yang penuh makna.</p>
    `,
    specs:{Ukuran:'Tinggi total 45 cm', Ukurandudukan: 'Tinggi 9 cm, Panjang dan lebar 17 cm',Bahan:'Logam, Kayu', Teknik:'Kuningan piala dan bola full tatah finishing goldplate, Kuningan etsa poles cat'} 
  },
  {
    id: 'PSB 015',
    name: 'Piala Sepak Bola Euro Futsal Campus Category Super Soccer 2024',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola3.jpg', 'image/sepakbola/pialasepakbola3.jpg'],
    stock: 'Pre-Order',
    tags: ['Duplikat Piala', 'Piala Logam'],
    desc: `
    <p>Euro Futsal Campus adalah turnamen olahraga yang bergengsi. Di dalam turnamen tersebut, kategori Super Soccer turut dipertandingkan. <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> diperebutkan sebagai hadiah kemenangan yang penuh nilai prestise.</p>
    <p>Secara khusus, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Euro Futsal Campus dirancang sehingga penuh dengan cerita bermakna untuk menghadirkan kesan mendalam. Pembuatan plakat memanglah dirancang secara khusus sehingga lebih relevan dengan event yang diselenggarakan. </p>
    <p>Di samping itu, bahan logam pilihan menjadi dasar pembuatan <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> yang dipadukan dengan dudukan resin berwarna hitam untuk meningkatkan elegansinya. Apabila Anda memiliki kebutuhan piala, silakan hubungi Troppion untuk membuatnya.</p>
    `,
    specs:{Ukuran:'Tinggi total 33 cm', Bahan:'Logam, resin', Teknik:'Plat transparasi silver'} 
  },
  {
    id: 'PSB 014',
    name: 'Piala Sepak Bola GM Football Championship HUT RI 79th PT KPI RU IV Cilacap',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola4.jpg', 'image/sepakbola/pialasepakbola3.jpg'],
    stock: 'Pre-Order',
    tags: ['Duplikat Piala'],
    desc:`
    <p>PT Kilang Pertamina Internasional turut memeriahkan HUT Kemerdekaan RI. Perusahaan yang bergerak di bidang energi tersebut mengadakan turnamen sepak bola bertajuk GM Football Championship. </p>
    <p>Piala GM Football Championship diperebutkan sebagai hadiah bergengsi untuk menghargai sebuah kemenangan. <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> ini dirancang khusus sehingga penuh pesan bermakna.</p>
    <p>Tidak sekadar dirancang spesial, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini dibuat dengan bahan logam premium untuk hasil yang berkualitas, lihat lebih banyak terkait piala logam. Dipadukan dengan dudukan resin warna hitam, tampilannya pun terasa lebih elegan. Apalagi adanya tambahan pita merah putih yang merumbai menjadikannya lebih representatif. Bila Anda tertarik untuk memesan piala semacam ini, pesanlah hanya di Troppion yang sudah berpengalaman.</p> 
    `, 
    specs:{Ukuran:'Tinggi total 33 cm', Bahan:'Logam, Resin', Teknik:'Plat transparansi silver'} 
  },
  {
    id: 'PBE 013',
    name: 'Piala Bergilir Tournament Sepak Bola Danlanud Cup',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola5.jpg', 'image/sepakbola/pialasepakbola5.jpg'],
    stock: 'Pre-Order',
    tags: ['Custom Event'],
    desc: `
    <p>Lanud Jenderal Besar Soedirman mengadakan turnamen sepak bola bertajuk Danlanud Cup. Pada turnamen terbuka tersebut diperebutkan <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> dari bahan logam.</p>
    <p> Piala Danlanud Cup yang didesain menyerupai cawan yang besar tentu memiliki nilai prestisius yang tinggi. Tidak mengherankan jika kejuaraan sepak bola terasa lebih kompetitif untuk diikuti.</p>
    <p>Pembuatan <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> untuk hadiah penghargaan memang memerlukan perencanaan yang matang. Desainnya dapat dikustomisasi sehingga lebih relevan dengan event yang diselenggarakan. Di sisi lain, pemilihan bahan baku menjadi kunci penting yang tidak boleh dilupakan. Untuk mendapatkan piala berkelas, hubungilah customer service kami segera.</p>
    `,
    specs:{Ukuran:'Tinggi total 45 cm, Tinggi dudukan 9 cm, Panjang dan Lebar dudukan 18 cm', Bahan:'Logam, Kayu', Teknik:'Stainless esta cat, Logo Print UV'} 
  },
  {
    id: 'PSB 012',
    name: 'Trophy International Soccer Seven Competition Top Score U13 2024 Bali',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola7.jpg', 'image/sepakbola/pialasepakbola7.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Kompetisi Soccer Seven U13 2024 di Bali merupakan ajang sepak bola yang menampilkan talenta-talenta muda terbaik. Sebagai platform bagi para pemain muda untuk menunjukkan keahlian mereka, kompetisi ini tidak hanya tentang menang, tetapi juga tentang membangun sportivitas dan kecintaan terhadap sepak bola.</p>
    <p>Trophy International Soccer Seven Competition Top Score U13 2024 Bali, dibuat oleh Troppion, dirancang untuk menghargai pemain dengan skor tertinggi. Dengan menggunakan resin kristal berkualitas, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menggabungkan keanggunan dan prestasi, menjadikannya penghargaan yang sangat diinginkan oleh setiap peserta.</p>
    <p>Ingin <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> custom yang menarik untuk turnamen Anda? Hubungi customer service Troppion untuk pemesanan. Kami menyediakan piala dari resin kristal dengan desain yang dapat disesuaikan, memastikan penghargaan Anda tidak hanya simbol kemenangan, tetapi juga kebanggaan dan inspirasi. Bersama Troppion, setiap piala adalah cerita dari perjuangan dan kejayaan.</p>
    `,
    specs:{Ukuran:'Tinggi total 27.3cm, Tinggi dudukan 3.8cm, Panjang dan Lebar dudukan 6.7cm', Bahan:'	Resin, Kristal',  Warna:'Gold, Hitam'} 
  },
  {
    id: 'PSB 011',
    name: 'Piala ISTAF Sepaktakraw World Cup 2024 Selangor Malaysia',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola8.jpg', 'image/sepakbola/pialasepakbola8.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>ISTAF Sepaktakraw World Cup 2024 yang akan diadakan di Selangor, Malaysia, merupakan turnamen kelas dunia yang menampilkan tim-tim sepaktakraw terbaik dari seluruh dunia. Ajang ini tidak hanya mempertandingkan kemahiran atlet dalam olahraga yang memukau ini, tetapi juga mempererat hubungan antar negara peserta.</p>
    <p>Piala untuk ISTAF Sepaktakraw World Cup 2024 Selangor Malaysia, dibuat khusus oleh Troppion, merupakan karya seni yang dirancang dengan keahlian tinggi. Terbuat dari resin berkualitas, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini mewakili kombinasi sempurna antara keindahan dan kehormatan, simbol prestasi yang diidamkan oleh setiap tim yang berkompetisi.</p>
    <p>“Ingin <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> resin custom untuk ‘ISTAF Sepaktakraw World Cup 2024 Selangor Malaysia’? Hubungi customer service Troppion sekarang juga! Kami menawarkan desain unik yang akan membuat acara Anda semakin berkesan.” Troppion siap membantu Anda menciptakan piala yang tidak hanya memukau secara visual, tetapi juga menjadi kenang-kenangan berharga bagi para pemenang.</p>
    `,
    specs:{Ukuran:'	Tinggi 30cm, Diameter dudukan 11.6cm', Bahan:'Resin', Warna:'Nikel'} 
  },
  {
    id: 'PSB 008',
    name: 'Piala Kejuaraan Sepak Bola Kilang Pertamina Internasional Cup',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola10.jpg', 'image/sepakbola/pialasepakbola10.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Juara', 'Piala Lomba'],
    desc: `
    <p>Kilang Pertamina Internasional Cup merupakan ajang sepak bola bergengsi yang diikuti oleh berbagai tim dari unit-unit Pertamina se-Indonesia. Kompetisi ini tidak hanya menjadi sarana untuk memperkuat solidaritas antar karyawan, tetapi juga sebagai wadah untuk menampilkan bakat dan semangat kompetitif di lapangan hijau.</p>
    <p>Piala Kejuaraan Sepak Bola Kilang Pertamina Internasional Cup dirancang khusus oleh Troppion sebagai lambang prestasi tertinggi dalam turnamen ini. Terbuat dari logam berkualitas, <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> ini memiliki desain yang elegan dan simbolik, mewakili kehormatan dan kebanggaan bagi tim yang berhasil meraih kemenangan.</p>
    <p>Bagi penyelenggara turnamen sepak bola yang menginginkan piala custom dari logam yang unik dan berkesan, Troppion siap membantu. Hubungi customer service kami untuk menciptakan <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> yang tidak hanya mengabadikan kemenangan, tetapi juga menjadi simbol prestasi dan keunggulan. Dengan Troppion, setiap piala dibuat dengan dedikasi untuk menghormati momen penting Anda.</p>
    `,
    specs:{Bahan:'	Logam kuningan, dudukan kayu', Warna:'Gold & Silver'} 
  },
  {
    id: 'PSB 001',
    name: 'Piala Best Keeper – Liga Soeratin 92+',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola11.jpg', 'image/sepakbola/pialasepakbola11.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Dalam perhelatan Liga Soeratin 92+, penghargaan Best Keeper menjadi salah satu kategori yang paling prestisius. Troppion.com menghadirkan piala custom khusus untuk menghargai kiper terbaik yang telah menunjukkan performa luar biasa sepanjang turnamen. Desain <a href="https://troppion.com/piala/piala-resin/" target="_blank" rel="noopener" class="highlight-link">Piala Resin</a> yang elegan dan detail yang memukau mencerminkan kebanggaan dan prestasi luar biasa dari sang penerima.</p>
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Best Keeper – Liga Soeratin 92+ dirancang dengan keunikan dan kualitas terbaik, menggunakan bahan resin berkualitas tinggi yang menjamin durabilitas dan keindahan. Setiap piala dibuat dengan ketelitian untuk memastikan bahwa setiap detail dapat menggambarkan keagungan dan kehormatan yang melekat pada penghargaan ini, menjadikannya kenang-kenangan yang berharga bagi para kiper berprestasi.</p>
    <p>Untuk klub atau penyelenggara liga yang ingin memberikan penghargaan istimewa kepada kiper terbaik dengan piala custom berbahan resin berkualitas, <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> adalah solusi anda. Hubungi customer service kami untuk mendapatkan layanan personalisasi piala sesuai dengan keinginan anda. Kami berkomitmen untuk membantu anda menciptakan momen penghargaan yang tak terlupakan. Pesan sekarang, dan jadikan piala anda simbol prestasi yang membanggakan!</p>
    `,
    specs:{Bahan:'Resin', Warna:'Gold, Hitam'} 
  },
     {
    id: 'PSB 007',
    name: 'Piala Juara 1 Turnamen Sepak Bola Danlanud Cup',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola12.jpg', 'image/sepakbola/pialasepakbola12.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Juara'],
    desc: `
    <p>Turnamen Sepak Bola Danlanud Cup adalah sebuah event olahraga yang bergengsi, diorganisir oleh pangkalan udara untuk memperkuat hubungan dan sportivitas antara berbagai unit militer serta komunitas lokal. Turnamen ini menjadi ajang kompetisi yang seru, mempertemukan tim-tim sepak bola berbakat yang berlomba untuk meraih gelar juara, sekaligus mempererat tali kebersamaan dan kekompakan antar peserta.</p>
    <p>Piala Juara 1 Turnamen Sepak Bola Danlanud Cup dirancang secara khusus untuk menghargai dan merayakan tim yang berhasil meraih prestasi tertinggi dalam turnamen. Terbuat dari resin berkualitas tinggi, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menampilkan desain yang menarik dan simbolis, mencerminkan kehormatan dan keberhasilan tim juara. Piala ini tidak hanya menjadi lambang kemenangan, tetapi juga sumber inspirasi bagi tim lain untuk terus meningkatkan performa di masa mendatang.</p>
    <p>Butuh <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> custom dari resin yang berkualitas dan berkesan? Hubungi customer service TROPPION untuk pemesanan. Kami menyediakan layanan pembuatan piala dan souvenir custom dengan desain yang dapat disesuaikan, menjamin kepuasan Anda dalam merayakan setiap pencapaian. Dengan pengalaman dan dedikasi kami, TROPPION berkomitmen untuk menghadirkan produk yang tidak hanya memukau secara visual, tetapi juga penuh nilai dan makna. Percayakan kebutuhan piala olahraga Anda kepada kami, dan kami akan membantu mewujudkan penghargaan yang sempurna untuk setiap kemenangan.</p>
    `,
    specs:{Bahan:'Resin, plat kuningan', Box:'Box bludru'} 
  },
     {
    id: 'PSB 002',
    name: 'Piala Juara 1 Young Tiger League – Persija',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola13.jpg', 'image/sepakbola/pialasepakbola13.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Juara'],
    desc: `
    <p>Young Tiger League – Persija merupakan sebuah turnamen sepak bola yang diselenggarakan khusus untuk mengembangkan bakat muda dalam dunia sepak bola. Turnamen ini menjadi platform bagi para pemain muda Persija untuk menunjukkan kemampuan dan potensi mereka, serta menjadi langkah awal dalam karir profesional mereka. Melalui kompetisi ini, Persija berkomitmen untuk mencetak pemain-pemain muda berbakat yang dapat mengharumkan nama tim di masa depan.</p>
    <p><a href="https://troppion.com/piala-set/" target="_blank" rel="noopener" class="highlight-link">Piala Set</a> Juara 1 Young Tiger League – Persija dirancang sebagai simbol prestasi tertinggi dalam turnamen ini. Terbuat dari resin berkualitas, piala ini memiliki desain yang menarik dan detail yang cermat, merefleksikan kebanggaan dan kehormatan bagi tim yang berhasil menjadi juara. Piala ini tidak hanya menjadi bukti pencapaian mereka, tetapi juga sumber motivasi untuk terus berprestasi di lapangan.</p>
    <p>Butuh <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> custom dari resin yang berkualitas dan berkesan? Hubungi customer service TROPPION untuk pemesanan. Kami menyediakan layanan pembuatan piala dan souvenir custom dengan desain yang dapat disesuaikan, memenuhi setiap kebutuhan dan ekspektasi Anda. Dengan pengalaman dan dedikasi kami, TROPPION berkomitmen untuk menghadirkan produk yang tidak hanya estetis tetapi juga penuh makna. Percayakan kebutuhan piala olahraga Anda kepada kami, dan kami akan membantu mewujudkan penghargaan yang sempurna untuk merayakan setiap pencapaian.</p>
    `,
    specs:{Warna:'	Gold, hitam', Bahan:'	Resin, kuningan'} 
  },
     {
    id: 'PSB 005',
    name: 'Piala Best Player Gala Siswa Sampang – PARTAI NasDem',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola14.jpg', 'image/sepakbola/pialasepakbola14.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Best Player Gala Siswa Sampang – PARTAI NasDem merupakan penghargaan prestisius yang diberikan kepada pemain sepak bola pelajar terbaik dalam sebuah turnamen yang diselenggarakan oleh PARTAI NasDem. Penghargaan ini tidak hanya merayakan kemampuan individual yang luar biasa di lapangan, tetapi juga dedikasi, kerja keras, dan sportivitas yang ditunjukkan sepanjang turnamen. Penerima penghargaan ini diakui karena keahliannya yang menonjol, menjadi inspirasi bagi para pemain muda lainnya.</p>
    <p>Piala Best Player Gala Siswa Sampang – PARTAI NasDem dirancang khusus dengan detail yang memukau, terbuat dari logam berkualitas tinggi, menampilkan desain yang elegan dan simbolis. <a href="https://troppion.com/piala-set/" target="_blank" rel="noopener" class="highlight-link">Piala Set</a> ini menjadi lambang kehormatan dan prestasi bagi pemain yang berhasil mendapatkannya, mengabadikan momen keberhasilannya dalam sejarah olahraga pelajar.</p>
    <p>Butuh <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> custom dari logam yang berkualitas dan berkesan? Hubungi customer service TROPPION untuk pemesanan. Kami menyediakan layanan pembuatan piala dan souvenir custom dengan berbagai pilihan desain dan material, sesuai dengan kebutuhan Anda. Dengan pengalaman dan keahlian kami, TROPPION berkomitmen untuk menghasilkan produk yang tidak hanya indah, tetapi juga mampu merefleksikan keunggulan dan keberhasilan. Percayakan penghargaan spesial Anda kepada kami, dan kami akan membantu mewujudkan piala yang sempurna.</p>
    `,
    specs:{Box:'Box Bludru', Bahan:'	Logam, resin'} 
  },
     {
    id: 'PSB 004',
    name: 'Piala Juara 1 Sepak Bola Liga Pelajar – Piala Bupati',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola15.jpg', 'image/sepakbola/pialasepakbola15.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Bupati','Piala Juara'],
    desc: `
    <p>Sepak Bola Liga Pelajar – Piala Bupati merupakan turnamen yang sangat ditunggu oleh para pelajar, di mana tim-tim sekolah bersaing untuk memperebutkan gelar juara. Turnamen ini tidak hanya menampilkan bakat dan kemampuan bermain sepak bola yang luar biasa dari para pelajar, tetapi juga mengajarkan nilai-nilai seperti kerjasama tim, disiplin, dan sportivitas. Melalui kompetisi ini, Piala Bupati diharapkan dapat memotivasi para pelajar untuk terus mengembangkan bakat serta meningkatkan prestasi baik di dalam maupun di luar lapangan.</p>
    <p>Piala Juara 1 Sepak Bola Liga Pelajar – Piala Bupati dirancang dengan kesempurnaan untuk menghargai dan merayakan tim yang berhasil menjuarai liga. Terbuat dari resin berkualitas tinggi, piala ini memiliki desain yang elegan dan detail yang halus, mewakili keunggulan dan prestasi para juara. <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> ini tidak hanya menjadi lambang kemenangan, tetapi juga sumber inspirasi bagi semua peserta untuk terus berusaha dan berkompetisi dengan semangat tinggi.</p>
    <p>Butuh <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> custom dari resin yang berkualitas dan berkesan? Hubungi customer service TROPPION untuk pemesanan. Kami menawarkan layanan pembuatan piala dan souvenir custom dengan berbagai desain dan material yang dapat disesuaikan dengan kebutuhan Anda. Dengan pengalaman dalam industri ini, TROPPION berkomitmen untuk menyediakan produk yang tidak hanya indah, tetapi juga mampu merefleksikan semangat dan prestasi. Percayakan kebutuhan Anda kepada kami, dan kami akan membantu mewujudkan penghargaan yang sempurna untuk setiap kompetisi dan pencapaian Anda.</p>
    `,
    specs:{Ukuran:'Resin', Box:'Box Bludru'} 
  },
     {
    id: '	PSB 006',
    name: 'Piala Top Scorer Gala Siswa Sampang – PARTAI NasDem',
    category: 'Sepak Bola',
    images: ['image/sepakbola/pialasepakbola17.jpg', 'image/sepakbola/pialasepakbola17.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Top Scorer Gala Siswa Sampang, yang diselenggarakan oleh PARTAI NasDem, merupakan ajang kompetisi sepak bola yang bertujuan untuk menggali dan mengembangkan bakat muda di bidang olahraga. Kompetisi ini tidak hanya fokus pada kemenangan tim, tetapi juga mengapresiasi individu yang menunjukkan kemampuan luar biasa, khususnya para pencetak gol terbanyak.</p>
    <p>Piala Top Scorer Gala Siswa Sampang – PARTAI NasDem dirancang sebagai penghargaan khusus untuk pemain yang berhasil menjadi top scorer dalam turnamen. Piala ini dibuat dari logam berkualitas tinggi dengan desain yang elegan dan simbolis, merefleksikan prestasi dan dedikasi luar biasa pemain dalam mencetak gol. <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini tidak hanya menjadi simbol keberhasilan individu, tetapi juga inspirasi bagi para pemain lainnya.</p>
    <p>Ingin memberikan penghargaan yang berkesan dan berkualitas tinggi? Hubungi customer service TROPPION untuk pemesanan <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> custom dari logam. Dengan pengalaman dalam pembuatan piala dan souvenir custom, kami berkomitmen untuk menyediakan produk yang tidak hanya estetis tetapi juga penuh makna. Percayakan pembuatan piala khusus Anda kepada kami, dan kami akan membantu mewujudkan penghargaan yang sempurna untuk merayakan setiap pencapaian.</p>
    `,
    specs:{Ukuran:'	Silver, Hitam', Bahan:'Logam cor, plat kuningan, resin'} 
  },
  //Basket
     {
    id: 'PBE 022',
    name: 'Piala Bergilir Sanford Student Basketball League',
    category: 'Basket',
    images: ['image/basket/basket1.jpg', 'image/basket/basket1.jpg'],
    stock: 'Pre-Order',
    tags: ['Duplikat Piala', 'Piala Lomba'],
    desc: `
    <p>Sanford Student Basketball League adalah turnamen bola basket pelajar yang dirancang untuk memupuk semangat kompetisi dan menjunjung nilai sportivitas. Ajang ini menjadi ruang bagi para atlet muda untuk menunjukkan kemampuan mereka dan berkompetisi di tingkat tertinggi dalam suasana penuh semangat.</p>
    <p>Piala Sanford Student Basketball League tampil dengan desain menawan berbahan logam emas berkualitas tinggi. Bagian atasnya berbentuk bola basket yang melambangkan dedikasi dan pencapaian di bidang olahraga. <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> ini menjadi simbol supremasi yang layak diperebutkan setiap tahunnya.</p>
    <p><a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> siap memberikan solusi dengan piala berkualitas premium. Jadikan momen penghargaan Anda lebih istimewa bersama Troppion!</p>
    `,
    specs:{Ukuran:'Tinggi 45 cm, Lebar trophy 10 cm, Lebar trophy 6.7 cm, Diameter bola 10 cm', Bahan:'Resin',Box:'Bludru hitam satin emas', Teknik:'Badan piala cor resin krom emas pvd master 3D, Kuningan graji dan etsa krom emas'} 
  },
     {
    id: 'PBA 006',
    name: 'Piala Basket 5 Gas Tournament 2024 Manokwari Papua Barat',
    category: 'Basket',
    images: ['image/basket/basket2.jpg', 'image/basket/basket2.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Piala 5 Gas Tournament 2024 adalah sebuah hadiah kemenangan dalam kejuaraan basket. Trofi tersebut dibuat khusus untuk pemenang kedua dalam event yang diselenggarakan di Manokwari, Papua Barat.</p>
    <p>Bahan akrilik yang dipadukan dengan resin menjadikan <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> ini terasa lebih inovatif. Selain inovatif, desainnya pun representatif karena menggunakan logo penyelenggara serta ada ornamen bola basket.</p>
    <p>Kejuaraan basket tentu akan bertambah kompetitif dengan dihadirkannya piala khusus untuk tim yang berhasil memenangi pertandingan. Apalagi jika <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a>tersebut didesain secara khusus hingga sesuai dengan tema dan konsep kompetisi. Maka dari itu, alangkah baiknya jika Anda hendak membuat piala siapkan dulu konsepnya, lalu hubungi customer service.</p>
    `,
    specs:{Ukuran:'Tinggi total 20 cm, Tinggi dudukan 4 cm, Diameter dudukan 7.5 cm', Bahan:'Akrilik, Resin', Warna:'Bening, Hitam', Box:'Bludru Hitam Satin Hitam'} 
  },
     {
    id: 'PBA 005',
    name: 'Piala Juara 1 Women’s Basketball Championship',
    category: 'Basket',
    images: ['image/basket/basket3.jpg', 'image/basket/basket3.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Juara'],
    desc: `
    <p>Merayakan Dies Natalis ke-64 GK UNSRAT, Troppion.com menghadirkan koleksi piala custom yang dirancang khusus untuk menandai perayaan penting ini. <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> tersebut tidak hanya merefleksikan tradisi dan semangat akademik, tetapi juga kebanggaan dan prestasi yang telah dicapai selama 64 tahun berdirinya GK UNSRAT.</p>
    <p>Khusus untuk Piala Juara 1 Women’s Basketball Championship dalam rangkaian Dies Natalis, Troppion.com menawarkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> dari bahan logam berkualitas tinggi. Desainnya yang elegan dan detail yang cermat menunjukkan pengakuan atas prestasi, dedikasi, dan kerja keras tim yang berhasil meraih posisi puncak dalam kompetisi ini.</p>
    <p>Bagi Anda yang ingin memberikan penghargaan yang tak terlupakan di turnamen basket atau event khusus lainnya, piala custom dari logam di Troppion.com adalah pilihan yang tepat. Hubungi customer service kami untuk mendapatkan layanan personalisasi <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> yang sesuai dengan kebutuhan dan keinginan Anda seperti Piala Women’s Basketball ini. Dengan Troppion, setiap kemenangan menjadi lebih bermakna dan memorable. Pesan piala custom Anda sekarang dan buatlah perayaan kemenangan menjadi lebih spesial!</p>
    `,
    specs:{Bahan:'Logam, dudukan kayu', Warna:'	gold, coklat (dudukan)'} 
  },
     {
    id: 'PBA 002',
    name: 'Piala Basket Juara Umum Elha Basket League',
    category: 'Basket',
    images: ['image/basket/basket5.jpg', 'image/basket/basket5.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Elha Basket League merupakan liga basket yang diikuti oleh berbagai tim dari seluruh wilayah, menampilkan kompetisi yang seru dan penuh talenta. Liga ini tidak hanya menjadi ajang untuk menunjukkan kemampuan olahraga, tetapi juga memperkuat tali persaudaraan dan sportivitas di antara para pemain dan tim.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> Juara Umum Elha Basket League dirancang khusus untuk memberikan pengakuan kepada tim yang berhasil meraih prestasi tertinggi dalam kompetisi. Piala ini dibuat dengan desain yang elegan dan material berkualitas, merefleksikan keunggulan dan dedikasi tim juara. Piala ini menjadi lambang keberhasilan dan kebanggaan, mewakili spirit kompetitif dan kecintaan terhadap olahraga basket.</p>
    <p>Ingin membuat <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a>custom yang menarik dan berkualitas? Hubungi customer service TROPPION. Dengan pengalaman luas dalam pembuatan piala logam dan plakat akrilik custom, kami berkomitmen untuk menyediakan produk yang tidak hanya memenuhi, tetapi juga melampaui ekspektasi Anda. Percayakan kebutuhan Anda kepada kami, dan kami akan membantu mewujudkan penghargaan yang sempurna untuk setiap prestasi.</p>
    `,
    specs:{Bahan:'Logam kuningan, resin', Warna:'Gold, hitam'} 
  },
     {
    id: 'PBA 001',
    name: 'Piala Cakra Sakti Basketball Club – PT Mitra Properti Sukses',
    category: 'Basket',
    images: ['image/basket/basket6.jpg', 'image/basket/basket6.jpg'],
    stock: 'Pre-Order',
    tags: ['Emas', 'Perak', 'Perunggu', 'Custom Event'],
    desc: `
    <p>Cakra Sakti Basketball Club, yang didukung oleh PT Mitra Properti Sukses, merupakan tim basket yang berprestasi dan dikenal dengan semangat serta dedikasinya dalam olahraga basket. Tim ini tidak hanya menonjol dalam kompetisi lokal, tetapi juga mewakili semangat kerjasama dan keunggulan dalam setiap pertandingan yang diikuti, menjadikan mereka salah satu tim basket paling dihormati.</p>
    <p>Piala Cakra Sakti Basketball Club – PT Mitra Properti Sukses dirancang khusus untuk merayakan dan mengakui prestasi serta kontribusi tim dalam dunia basket. Dengan desain yang modern dan material logam berkualitas tinggi, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini mencerminkan kecemerlangan dan kebanggaan dari Cakra Sakti Basketball Club serta dukungan solid dari PT Mitra Properti Sukses, menjadikannya penghargaan yang sangat berarti bagi setiap pemain dan anggota tim.</p>
    <p>Untuk pembuatan <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> custom yang berkualitas dan memuaskan, hubungi customer service TROPPION. Dengan pengalaman luas dalam pembuatan piala dan plakat logam custom, kami berkomitmen untuk mewujudkan apresiasi Anda dengan produk yang tidak hanya estetis tetapi juga penuh nilai. Percayakan kebutuhan piala Anda kepada kami, dan kami akan membantu mewujudkan produk yang sempurna untuk merayakan setiap prestasi.</p>
    `,
    specs:{Warna:'Gold', Bahan:'Logam kuningan, kayu'} 
  },
  //Futsal
     {
    id: 'PBE 028',
    name: 'Piala Bergilir Tournament Futsal Bailey Cup PT Bailey Rekatama Bekasi',
    category: 'Futsal',
    images: ['image/futsal/futsal1.jpg', '1mage/futsal/futsal1.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Lomba', 'Duplikat Piala'],
    desc: `
    <p>Setiap pertandingan futsal bukan hanya soal kemenangan, tetapi juga semangat tim, strategi, dan kerja sama. Untuk memberikan apresiasi terbaik bagi sang juara, sebuah <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> bergengsi menjadi simbol kebanggaan yang akan diwariskan dari generasi ke generasi.</p>
    <p>Piala Bailey Cup hadir dengan desain megah dan elegan. Dibuat dari material berkualitas tinggi dengan finishing metalik yang mewah, piala ini mencerminkan prestise sejati. Dengan bentuk klasik dan pegangan khas, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menjadi trofi ideal bagi turnamen bergengsi yang ingin meninggalkan kesan mendalam.</p>
    <p><a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> menghadirkan momen juara dengan sentuhan kemewahan dan eksklusivitas. Jadikan piala bergilir sebagai simbol kemenangan yang berharga di setiap event.

</p>
    `,
    specs:{Ukuran:'Tinggi total 62.5 cm, Tali 3 x 90 cm', Bahan:'Piala dan figur stock, Logam, Tali', Teknik:'Stainless etsa cat, tali printing bolak balik'} 
  },
     {
    id: 'PBE 015',
    name: 'Piala Bergilir MR Futsal Series Maluku',
    category: 'Futsal',
    images: ['image/futsal/futsal4.jpg', 'image/futsal/futsal4.jpg'],
    stock: 'Pre-Order',
    tags: ['Duplikat Piala', 'Piala Lomba'],
    desc: `
    <p>MR Futsal Series Maluku adalah turnamen futsal prestisius yang mempertemukan tim-tim terbaik di kawasan Maluku. Turnamen ini menawarkan <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> yang berkelas.</p>
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> menjadi simbol kemenangan dan kebanggaan bagi para pemenang yang berhasil membawanya pulang. Kompetisi ini tidak hanya menguji strategi, tetapi juga ketangguhan tim.</p>
    <p>Piala MR Futsal Series terbuat dari bahan logam berkualitas tinggi, dengan desain yang dirancang khusus untuk mencerminkan keanggunan dan prestise turnamen ini. Raih penghargaan yang layak untuk tim juara Anda. Dapatkan piala eksklusif untuk turnamen yang diselenggarakan hanya di <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion.</a></p>
    `,
    specs:{
    Ukuran:'Tinggi total 50 cm', 
    Bahan:'Logam, Resin', 
    Teknik:'Stainless etsa cat'} 
  },
  {
    id: 'PSB 003',
    name: 'Piala Bergilir Turnamen Futsal Friend’s Bakery',
    category: 'Futsal',
    images: ['image/futsal/futsal6.jpg', 'image/futsal/futsal6.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala juara', 'Piala Bergilir'],
    desc: `
    <p>Turnamen Futsal Friend’s Bakery merupakan sebuah event olahraga yang diselenggarakan dengan tujuan untuk mempererat tali persaudaraan dan sportivitas di antara para pemain. Event ini menarik banyak tim futsal dari berbagai kalangan, menampilkan pertandingan yang seru dan kompetitif, sekaligus menjadi ajang silaturahmi antar peserta.</p>
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Turnamen Futsal Friend’s Bakery dirancang khusus sebagai lambang prestasi tertinggi dalam turnamen ini. Terbuat dari logam berkualitas tinggi, piala ini memiliki desain yang elegan dan simbolik, mewakili semangat kompetisi yang tinggi dan kebersamaan yang telah terjalin. Piala ini menjadi simbol kebanggaan bagi tim yang berhasil meraih kemenangan, serta motivasi bagi tim lain untuk berprestasi di event selanjutnya.</p>
    <p>Ingin membuat <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> custom dari logam yang berkualitas dan berkesan? Hubungi customer service TROPPION untuk pemesanan. Dengan pengalaman dalam pembuatan piala dan souvenir custom, kami berkomitmen untuk menyediakan produk yang tidak hanya memenuhi, tetapi juga melampaui ekspektasi Anda. Percayakan kebutuhan Anda kepada kami, dan kami akan membantu mewujudkan penghargaan yang sempurna untuk merayakan setiap pencapaian dan kompetisi Anda.</p>
    `,
    specs:{
    Bahan:'Logam, resin', 
    Box:'Box bludru'} 
  },
  { id:'P-201', name:'Piala Sepak Bola Juara RSST Futsal Tournament 2024 Klaten', category:'futsal',
    images:['image/futsal/futsal5.jpg','image/futsal/futsal5.jpg'],
    stock:'Ready', tags:['Full Custom','Ukiran Laser'],
    desc:`
    <p>Turnamen Futsal RSST 2024 di Klaten merupakan kompetisi yang dinantikan, mengumpulkan tim-tim futsal terbaik untuk bersaing merebutkan gelar juara. Acara ini tidak hanya tentang persaingan, tetapi juga memperkuat tali persaudaraan antar pemain dan meningkatkan gairah olahraga di komunitas.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> Juara RSST Futsal Tournament 2024 Klaten, dibuat khusus oleh Troppion, adalah simbol prestasi tertinggi bagi tim pemenang. Dengan desain yang elegan dan dibuat dari resin berkualitas, piala ini mewakili kebanggaan dan kegembiraan atas kemenangan yang diraih.</p>
    <p>Ingin <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">piala sepak bola</a> atau futsal custom yang unik untuk turnamen Anda? Hubungi customer service Troppion sekarang juga! Kami menawarkan piala dari resin dengan desain yang dapat disesuaikan, memastikan penghargaan Anda tidak hanya berkesan, tetapi juga berarti. Percayakan momen kemenangan Anda dengan Troppion, dimana setiap detail piala diproduksi dengan keahlian dan kecintaan.</p>
    `,
    specs:{Ukuran:'	Tinggi Total 30cm, Tinggi Badan 23.5cm, Tinggi dudukan 6.5cm, diameter dudukan 15.5cm', Bahan:'Resin dan Akrilik', Warna:'	Hitam, Gold, dan Hijau tosca'}
  },
  {id: 'PSB 015',
    name: 'Piala Sepak Bola Euro Futsal Campus Category Super Soccer 2024',
    category: 'Futsal',
    images: ['image/sepakbola/pialasepakbola3.jpg', 'image/sepakbola/pialasepakbola3.jpg'],
    stock: 'Pre-Order',
    tags: ['Duplikat Piala', 'Piala Logam'],
    desc: `
    <p>Euro Futsal Campus adalah turnamen olahraga yang bergengsi. Di dalam turnamen tersebut, kategori Super Soccer turut dipertandingkan. <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> diperebutkan sebagai hadiah kemenangan yang penuh nilai prestise.</p>
    <p>Secara khusus, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Euro Futsal Campus dirancang sehingga penuh dengan cerita bermakna untuk menghadirkan kesan mendalam. Pembuatan plakat memanglah dirancang secara khusus sehingga lebih relevan dengan event yang diselenggarakan. </p>
    <p>Di samping itu, bahan logam pilihan menjadi dasar pembuatan piala yang dipadukan dengan dudukan resin berwarna hitam untuk meningkatkan elegansinya. Apabila Anda memiliki kebutuhan piala, silakan hubungi <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> untuk membuatnya.</p>
    `,
    specs:{Ukuran:'Tinggi total 33 cm', Bahan:'Logam, resin', Teknik:'Plat transparasi silver'} 
  },
  //E-SPORT--------------------------------------------------------------------------------------------
  {
    id: 'PES 005',
    name: 'Piala E-Sport Champion Mobile Legends Papua',
    category: 'E-Sport',
    images: ['image/esport/esport1.jpg', 'image/esport/esport1.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala E-Sport', 'Piala Event'],
    desc: `
    <p>E-sport atau olahraga elektronik sudah diresmikan sebagai salah satu cabang olahraga. Hal inilah yang menjadi latar belakang mulai banyak turnamen e-sport diselenggarakan. Salah satunya adalah kejuaraan e-sport Mobile Legends Papua.</p>
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Mobile Legends diperebutkan dalam pertandingan bergengsi tersebut sebagai bentuk penghargaan dan hadiah kemenangan yang berkelas.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">Piala e-sport</a>dibuat dengan memanfaatkan bagan resin yang dipadukan juga dengan material logam. Warna bening resin membuat piala terlihat lebih elegan. Sementara itu, warna emas pada material logam di bagian atas piala membuatnya lebih mewah. Apakah Anda juga memiliki kebutuhan piala kejuaraan? Konsep dari sekarang, lalu sampaikan kepada custormer service kami.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 32 cm, Tinggi dudukan 5 cm, Panjang dudukan 8 cm, Lebar dudukan 7 cm', 
    Bahan:'Resin, Logam', 
    Teknik:'Kuningan etsa crom emas',
    Box:'Bludru Kuning Satin Kuning'
  } 
  },
  {
    id: 'PES 004',
    name: 'Piala E-Sport M-Well Championship Mobile Legend Kudus',
    category: 'E-Sport',
    images: ['image/esport/esport2.jpg', 'image/esport/esport2.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala E-Spoer', 'Piala Olahraga'],
    desc: `
    <p>Mobile Legends adalah salah satu game yang banyak digemari masyarakat. Hingga pada akhirnya, game tersebut masuk dalam berbagai turnamen e-sport, seperti M-Well Championship. Turnamen tersebut memperebutkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">Piala e-sport</a> yang tampak begitu prestisius. </p>
    <p>Hal ini tidak lepas dari bahan resin yang membuat visualnya lebih estetik sebagai hadiah kemenangan.</p>
    <p>Piala M-Well Championship ini juga menunjukkan karakter yang mewah karena adanya tambahan gliter emas. Tidak hanya itu, desainnya pun terasa lebih inovatif sehingga piala menjadi hadiah kemenangan yang unik. Kami persilakan Anda untuk menghubungi customer service kami apabila hendak membuat <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> untuk hadiah kemenangan dalam turnamen olahraga.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 25 cm, Panjang akrilik logo ML 20.6 cm, Tebal 3.2 cm, Tinggi dudukan 5 cm, Panjang dan Lebar dudukan 10 cm', 
    Bahan:'Resin, Logam, Akrilik', 
    Warna:'Gliter Emas, Gold, Bening',
    Box:'Bludru Hitam Satin Emas'
  } 
  },
  {
    id: 'PES 003',
    name: 'Piala Poco Indonesia – Poco Extreme League',
    category: 'E-Sport',
    images: ['image/esport/esport3.jpg', 'image/esport/esport3.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala E-Sport', 'Piala Olahraga'],
    desc: `
    <p>Poco Indonesia memperkenalkan “Poco Extreme League”, sebuah turnamen E-sport yang menantang para gamer di Indonesia untuk berkompetisi dalam pertarungan yang intens dan mendebarkan. Acara ini tidak hanya menjadi ajang pembuktian skill para pemain, tapi juga sebagai sarana untuk memperkuat komunitas gamer di tanah air, menghubungkan mereka melalui semangat kompetitif dan persahabatan.</p>
    <p>Piala Poco Indonesia – Poco Extreme League dirancang khusus sebagai simbol kejayaan untuk para juara. Terbuat dari kombinasi resin dan logam berkualitas, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menggabungkan kekuatan dan keindahan, menciptakan suatu penghargaan yang tidak hanya menarik secara visual, tapi juga memaknai prestasi yang telah dicapai oleh para pemenang. Setiap detail dari piala ini dirancang untuk menggambarkan dinamika dan energi dari dunia E-sport.</p>
    <p>Bagi penyelenggara turnamen E-sport yang ingin memberikan pengakuan istimewa kepada para juara, <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> menawarkan layanan pembuatan piala resin custom kombinasi logam. Dengan desain yang dapat disesuaikan sesuai keinginan, kami siap membantu menciptakan piala yang unik dan berkesan, menjadikan setiap kemenangan lebih spesial. Hubungi customer service Troppion sekarang juga untuk merancang piala impian yang akan menjadi lambang prestasi tak terlupakan.</p>
    `,
    specs:{ 
    Bahan:'	Resin, Logam kuningan', 
    Box:'Bludru'} 
  },
  {
    id: 'PBE 004',
    name: 'Piala Bergilir Best Competition 5R Area Mess PT Cipta Kridatama – MHU Project Samarinda',
    category: 'E-Sport',
    images: ['image/esport/esport4.jpg', 'image/esport/esport4.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Olahraga', 'Piala E-Sport'],
    desc: `
    <p>Kompetisi 5R (Ringkas, Rapi, Resik, Rawat, Rajin) di Area Mess PT Cipta Kridatama – MHU Project Samarinda merupakan sebuah inisiatif untuk mendorong dan memelihara lingkungan kerja yang bersih, sehat, dan produktif. Melalui kompetisi ini, PT Cipta Kridatama mengajak seluruh karyawannya untuk aktif berpartisipasi dalam menerapkan prinsip-prinsip 5R dalam kehidupan sehari-hari, baik di area mess maupun di tempat kerja.</p>
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Best Competition 5R Area Mess PT Cipta Kridatama – MHU Project Samarinda dirancang khusus untuk menghargai upaya luar biasa tim atau individu yang berhasil menerapkan konsep 5R dengan paling kreatif dan efektif. Terbuat dari kombinasi kayu dan logam berkualitas, piala ini tidak hanya simbol keberhasilan tetapi juga komitmen terhadap lingkungan kerja yang lebih baik.</p>
    <p>Untuk penyelenggaraan acara atau kompetisi serupa yang ingin memberikan penghargaan unik dan berkesan, Troppion menawarkan layanan pembuatan piala e-sport custom dari kayu kombinasi logam. Dengan desain yang dapat disesuaikan sesuai keinginan Anda, kami siap membantu menciptakan <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> yang tidak hanya menarik secara visual tetapi juga menyimpan nilai dan makna penting. Hubungi customer service Troppion sekarang juga untuk konsultasi gratis dan mulailah merancang piala impian Anda.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 35cm, TInggi dudukan 7cm, Tinggi Badan 28cm, Lebar badan 14cm Tebal 2.5cm, Dudukan panjang dan lebar 11cm', 
    Bahan:'	Kayu dan Logam', 
    Warna:'Merah Maroon, Gold'} 
  },
  {
    id: 'PES 003',
    name: 'Piala Bergilir Penerapan K3 Terbaik Perum Jasa Tirta 1 Malang',
    category: 'E-Sport',
    images: ['image/esport/esport5.jpg', 'image/esport/esport5.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala E-Sport', 'Piala Olahraga'],
    desc: `
    <p>Perum Jasa Tirta 1 Malang memberikan penghargaan “K3 Terbaik” sebagai bentuk apresiasi terhadap unit kerja yang telah menerapkan Keselamatan dan Kesehatan Kerja (K3) dengan paling efektif dan inovatif. Penghargaan ini merupakan bagian dari upaya perusahaan untuk mengutamakan keamanan dan kesejahteraan semua karyawan serta untuk meningkatkan kesadaran akan pentingnya K3 dalam setiap operasional perusahaan.</p>
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Penerapan K3 Terbaik Perum Jasa Tirta 1 Malang dirancang khusus sebagai simbol prestasi yang tinggi dalam menerapkan standar K3. Terbuat dari kombinasi logam dan resin berkualitas, piala ini tidak hanya menonjolkan keunggulan estetika, tetapi juga keabadian dan nilai penghargaan yang diberikan kepada penerima.</p>
    <p>Untuk institusi atau organisasi yang ingin memberikan penghargaan spesifik seperti piala E-sport atau penghargaan lain dengan bahan dari kombinasi logam dan resin, Troppion menyediakan layanan custom yang bisa disesuaikan dengan kebutuhan spesifik Anda. Hubungi customer service <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> untuk mendiskusikan konsep desain unik Anda dan mari kita wujudkan piala impian yang tidak hanya berkesan tetapi juga memotivasi penerima untuk terus berprestasi.</p>
    `,
    specs:{
    Ukuran:'Tinggi Total 45cm, Tinggi dudukan 9cm, Tinggi Badan 36cm, Diameter dudukan 15.5cm', 
    Bahan:'Resin dan logam', 
    Warna:'	Transparan dan Gold'} 
  },
  {
    id: 'PBE 001',
    name: 'Piala Best In Culture Program Corporate SBU Kalla Makassar',
    category: 'E-Sport',
    images: ['image/esport/esport7.jpg', 'image/esport/esport7.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Olahraga', 'Piala E-Sport'],
    desc: `
    <p>Corporate SBU Kalla Makassar merupakan sebuah entitas bisnis yang terus mendorong inovasi dan keunggulan dalam budaya kerja perusahaan. Melalui pelaksanaan program-program yang berfokus pada pengembangan kultur korporat, mereka berkomitmen untuk menciptakan lingkungan kerja yang inspiratif dan produktif bagi semua karyawan.</p>
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Best In Culture Program Corporate SBU Kalla Makassar dirancang khusus untuk mengakui dan merayakan unit atau individu yang berhasil menerapkan dan mempromosikan budaya perusahaan dengan cara yang paling efektif dan inovatif. Terbuat dari kombinasi logam dan resin berkualitas, piala ini tidak hanya sebagai simbol prestasi, tetapi juga sebagai motivasi untuk terus meningkatkan kualitas budaya kerja.</p>
    <p>Untuk organisasi atau perusahaan yang ingin memberikan penghargaan unik dan menarik dalam event E-sport atau lainnya, Troppion menawarkan layanan pembuatan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">Piala e-sport</a> custom dari kombinasi logam dan resin. Dengan desain yang dapat disesuaikan, kami siap membantu Anda menciptakan piala yang tidak hanya memukau secara visual tetapi juga mengandung nilai dan makna yang dalam. Hubungi customer service Troppion sekarang untuk konsultasi gratis dan mulai desain piala impian Anda.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 28cm, panjang dan lebar dudukan 11cm', 
    Bahan:'Logam dan Resin', 
    Warna:'	Gold, transparan, Hitam'} 
  },
  {
    id: 'PES 001',
    name: 'Piala PBNC Champion',
    category: 'E-Sport',
    images: ['image/esport/esport8.jpg', 'image/esport/esport8.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala Olahraga', 'Piala E-Sport'],
    desc: `
    <p>PBNC Champion merupakan gelar prestisius dalam dunia e-sport, menandakan tim yang berhasil menjuarai turnamen Point Blank National Championship. Gelar ini tidak hanya merepresentasikan keahlian dan strategi permainan yang luar biasa, tetapi juga dedikasi dan kerja keras tim dalam mencapai puncak kemenangan.</p>
    <p>Piala PBNC Champion dirancang khusus untuk menghormati dan merayakan kesuksesan tim juara. Terbuat dari logam berkualitas tinggi, piala ini memiliki desain yang menarik dan simbolis, mencerminkan kebanggaan dan prestasi dalam dunia e-sport. <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menjadi lambang keberhasilan yang diidamkan oleh setiap tim e-sport.</p>
    <p>Siap mengabadikan kemenangan tim Anda dengan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">Piala e-sport</a> custom dari logam yang berkesan? Hubungi customer service TROPPION sekarang juga. Kami menawarkan layanan pembuatan piala custom yang dapat disesuaikan, memastikan piala Anda unik dan memukau. Dengan pengalaman kami, TROPPION berkomitmen untuk membantu Anda merayakan setiap momen kemenangan dengan piala yang tidak hanya indah, tetapi juga penuh makna.</p>
    `,
    specs:{ 
    Bahan:'Logam kuningan, dudukan resin', 
    Box:'Bludru'} 
  },
  //GOLF--------===========================================================
  {
    id: 'PGO 017',
    name: 'Piala Golf Hole in One Club Merapi Golf Yogyakarta',
    category: 'Golf',
    images: ['image/golf/golf1.jpg', 'image/golf/golf1.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala'],
    desc: `
    <p>Acara eksklusif Hole in One Club yang diadakan oleh Merapi Golf Yogyakarta menjadi momen istimewa untuk menghormati pencapaian luar biasa dalam olahraga golf. Event ini mengapresiasi para pemain yang berhasil mencetak hole-in-one dengan penuh kebanggaan dan prestise.</p>
    <p>Piala Hole in One Club ini dirancang elegan sebagai simbol penghargaan dalam piala olahraga golf. Dengan desain pemain golf dan bola yang presisi, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini dibuat dari bahan premium dengan sentuhan emas yang mewah, menjadikannya trofi yang bernilai tinggi untuk setiap pemenang.</p>
    <p>Percayakan pembuatan <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> Anda hanya di JogjaPlakat. Hubungi kami sekarang untuk mendapatkan produk berkualitas terbaik yang menonjolkan prestasi Anda!</p>
    `,
    specs:{
    Ukuran:'Tinggi 20.5 cm',
    Dudukan:'Tinggi 3.5 cm, Panjang 17 cm, Lebar 15 cm', 
    Boxakrilik:'Tinggi 17 cm, Panjang 16 cm, Lebar 14 cm',
    Bahan:'Resin, Kayu, Logam', 
    Teknik:'Kuningan etsa cat'} 
  },
  {
    id: 'PGO 016',
    name: 'Piala Akrilik Monthly Fun Golf Andalan Fluid Sistem',
    category: 'Golf',
    images: ['image/golf/golf2.jpg', 'image/golf/golf2.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Golf'],
    desc: `
    <p>Andalan Fluid Sistem menggelar acara Monthly Fun Golf sebagai bentuk apresiasi kepada para peserta atas partisipasi dan prestasi. Acara yang diselenggarakan di Kaleang Golf Course, Batulijau, Sumbawa, pada November 2024 ini menjadi momen penting untuk mempererat hubungan sekaligus memberikan penghargaan kepada para pemenang.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> ini dirancang dengan desain elegan, menampilkan siluet pegolf yang dinamis dan detail logo yang khas. Terbuat dari bahan akrilik berkualitas tinggi, piala Monthly Fun Golf ini memberikan kesan mewah dan modern. Sangat cocok untuk mengapresiasi prestasi di olahraga golf.</p>
    <p>Percayakan kebutuhan piala Anda hanya pada <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a>! Kami siap menyediakan desain premium untuk acara spesial Anda.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 19 cm, Tebal akrilik 1 cm', 
    Dudukan:'Tebal 2 cm, Panjang 12 cm, Lebar 5 cm',
    Box:'Bludru hitam satin hitam',
    Bahan:'Akrilik', 
    Teknik:'Akrilik print UV'} 
  },
  {
    id: 'PGO 015',
    name: 'Piala Golf United Tractors Golfday 2024',
    category: 'Golf',
    images: ['image/golf/golf3.jpg', 'image/golf/golf3.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Olahraga'],
    desc: `
    <p>United Tractors mengadakan Golfday 2024, sebuah turnamen golf bergengsi yang mempertemukan para pegolf terbaik dalam suasana kompetitif dan penuh semangat. Turnamen ini menjadi ajang untuk menunjukkan keterampilan dan dedikasi dalam olahraga golf, sekaligus membangun hubungan yang lebih kuat antar peserta</p>
    <p>Piala Golfday 2024 dirancang dengan elegan sebagai simbol kemenangan yang berkelas.</p>
    <p>Piala golf ini diberikan kepada para juara yang telah berhasil menaklukkan tantangan di lapangan golf dengan penuh prestasi. Terbuat dari bahan logam berkualitas, piala ini didesain secara representatif, mencerminkan keagungan turnamen golf. Untuk piala kemenangan yang eksklusif dan berkesan, percayakan kepada Troppion, ahli piala kustom berkelas.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 28 cm, Diameter bola golf 7 cm', 
    Dudukan:'Tinggi 5 cm, Panjang dan lebar 9 cm',
    Box:'Bludru hitam satin hitam',
    Bahan:'Resin, Logam', 
    Teknik:'Kuningan etsa cat obat kuning, Kuningan etsa poles Print UV'} 
  },
  {
    id: 'PGO 014',
    name: 'Piala Golf The Majestic Challenge Hosel Cup 2.0 Yogyakartau',
    category: 'Golf',
    images: ['image/golf/golf4.jpg', 'image/golf/golf4.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Olahraga'],
    desc: `
    <p>The Majestic Challenge Hosel Cup 2.0 Yogyakarta adalah turnamen golf eksklusif yang menantang para pegolf terbaik di kawasan ini. Pada turnamen tersebut, piala The Majestic Challenge diperebutkan sebagai hadiah kemenangan.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> ini diberikan kepada pemenang yang menunjukkan keunggulan dalam teknik dan strategi bermain. Kompetisi ini tidak hanya mengukur keterampilan, tetapi juga daya tahan di lapangan hijau.</p>
    <p>Bahan kristal  premium dimanfaatkan untuk membuat <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> ini sehingga memberikan tampilan yang elegan dan mewah. Desainnya yang mewah mencerminkan prestise turnamen ini. Jadikan piala ini sebagai simbol kemenangan. Dapatkan piala untuk turnamen atau event hanya memesan di Troppion.</p>
    `,
    specs:{
    Ukuran:'Tinggi 18 cm, Tinggi dudukan 4 cm, Panjang dan Lebar dudukan 6.8 cm', 
    Bahan:'Kristal',
    Box:'Bludru Hitam Satin Emas', 
    Teknik:'Kristal grafir'} 
  },
  {
    id: 'PGO 012',
    name: 'Piala Golf Bhayangkara Golf Tournament 2024',
    category: 'Golf',
    images: ['image/golf/golf6.jpg', 'image/golf/golf6.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Paila Olahraga'],
    desc: `
    <p>Di masyarakat luas berkembang opini yang menyatakan golf sebagai olahraga mewah. Bukan tanpa alasan, pasalnya olahraga ini memang lekat dimainkan oleh kalangan atas. Maka dari itu, tidak mengherankan jika <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> secara khusus didesain begitu elegan. Hal inilah yang terepresentasikan dalam Piala Bhayangkara Golf Tournament tahun 2024.</p>
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini dirancang khusus dari bahan logam pilihan sehingga lebih kokoh. Dominasi warna emas pada piala ini makin menambah kesan mewah dan elegan. Untuk membuat piala semacam ini tentu dibutuhkan desain yang baik. Anda dapat melakukan personalisasi piala agar lebih berkesan kemudian sampaikan kepada customer service kami segera.</p>
    `,
    specs:{
    Ukuran:'Tinggi 61.6 cm, Lebar piala 24 cm', 
    Bahan:'	Logam, Resin', 
    Teknik:'Kuningan Plat Print UV'} 
  },
  {
    id: 'PGO 013',
    name: 'Piala Golf Hosel Cup Kategori Best Net Overall',
    category: 'Golf',
    images: ['image/golf/golf5.jpg', 'image/golf/golf5.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala golf'],
    desc: `
    <p>Hosel Cup, Best Nett Overall adalah turnamen prestisius yang memperebutkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> bergengsi. Piala Hosel Cup menjadi simbol kemenangan atas kemampuan dalam memainkan golf di lapangan. Kompetisi ini tidak hanya menguji keterampilan, tetapi juga strategi para pegolf terbaik. Karena itulah, piala dirancang secara khusus agar meninggalkan pesan mendalam.</p>
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini dibuat dari bahan logam berkualitas tinggi sehingga mampu menjadikannya tahan lama dan elegan. Desainnya yang anggun mencerminkan prestise turnamen golf yang megah. Jadikan piala ini sebagai trofi kebanggaan bagi pemenang. Pesanlah secara kustom kebutuhan piala Anda hanya di Troppion.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 35 cm, Panjang piala 17,9 cm, Lebar piala 10,6 cm', 
    Dudukan:'Tinggi 4.5 cm, Panjang dan Lebar 12 cm',
    Bahan:'Logam, Resin', 
    Box:'Bludru Hitam Satin Emas',
    Teknik:'Kuningan tatah krom nikel, Stainless Etsa Cat'} 
  },
  {
    id: 'PGO 011',
    name: 'Piala Golf Badak LNG Golf Course Bontang Best Nett',
    category: 'Golf',
    images: ['image/golf/golf7.jpg', 'image/golf/golf7.jpg'],
    stock: 'Pre-Order',
    tags: [ 'Piala Custom', 'Golf'],
    desc: `
    <p>Golf adalah salah satu olahraga permainan yang dianggap mewah. Hal inilah yang menjadikan setiap turnamen golf terasa lebih berkelas. Karena itulah, <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> dibuat secara khusus agar menjadi hadiah yang berkesan Hal inilah yang terlihat pada piala Badak LNG. Piala tersebut diberikan sebagai penghargaan terhadap best nett dalam turnamen golf yang diselenggarakan.</p>
    <p>Material akrilik digunakan untuk membuat piala yang satu ini. Dengan teknik khusus, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> pun tampak berkelas sebagai hadiah. Desainnya yang relevan tentu akan memberikan kesan representatif terhadap turnamen yang diselenggarakan. Anda pun dapat membuat piala semacam ini dengan kustom. Silakan untuk menghubungi customer service kami.</p>
    `,
    specs:{
    Ukuran:'Tinggi total 20 cm, Tinggi dudukan 4 cm, Panjang dudukan 9 cm, Lebar dudukan 6 cm', 
    Bahan:'Akrilik, Resin',
    Box:'Bludru Hitam Satin Orange', 
    Teknik:'Print UV Press'} 
  },
  {
    id: 'PGO 010',
    name: 'Piala Golf Longest Drive Jasa Pertambangan Fun Golf 2024 Kuta Bali',
    category: 'Golf',
    images: ['image/golf/golf8.jpg', 'image/golf/golf8.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Paial Custom'],
    desc: `
    <p>Longest Drive Jasa Pertambangan Fun Golf 2024 di Kuta, Bali, menjadi ajang unjuk kebolehan para pegolf dalam mencapai pukulan terjauh. Turnamen ini tidak hanya menawarkan persaingan yang seru, tetapi juga kesempatan untuk menjalin hubungan dalam suasana yang santai dan menyenangkan.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> Longest Drive Jasa Pertambangan Fun Golf 2024 merupakan penghargaan spesial untuk pegolf yang berhasil melakukan pukulan terjauh. Didesain khusus oleh Troppion, piala ini terbuat dari akrilik berkualitas tinggi, menampilkan elegansi dan prestasi yang diraih oleh pemenang.</p>
    <p>Ingin <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom yang menarik untuk event Anda? Hubungi customer service Troppion sekarang juga! Kami menyediakan piala dari akrilik dengan desain yang bisa disesuaikan, menjadikan setiap penghargaan istimewa dan tidak terlupakan. Jadikan momen kemenangan Anda lebih berkesan dengan Troppion.</p>
    `,
    specs:{
    Ukuran:'Tinggi 18 cm, Lebar 15.5 cm, Tebal 1.5 cm, Tinggi dudukan 3.5 cm, Lebar 4 cm, Panjang dudukan 15 cm', 
    Bahan:'	Akrilik dan Resin', 
    Warna:'Transparan, Biru transparan'} 
  },
  {
    id: 'PGO 009',
    name: 'Trophy Golf Akrilik Best Gross Merapi Golf Yogyakarta',
    category: 'Golf',
    images: ['image/golf/golf9.jpg', 'image/golf/golf9.jpg'],
    stock: 'Pre-Order',
    tags: ['GOlf', 'Piala Custom'],
    desc: `
    <p>Best Gross Merapi Golf Yogyakarta merupakan penghargaan prestisius yang diberikan kepada pemain dengan skor terendah di turnamen golf, menegaskan kemahiran dan konsistensi dalam permainan. Penghargaan ini tidak hanya simbol prestasi, tetapi juga dedikasi dan kecintaan terhadap olahraga golf.</p>
    <p>Trophy Golf Akrilik Best Gross Merapi Golf Yogyakarta, dibuat khusus oleh Troppion, adalah pengakuan atas keunggulan tersebut. Dirancang dengan material akrilik berkualitas, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menampilkan kejernihan dan keindahan yang luar biasa, menjadikannya sebuah item yang diidamkan oleh setiap golfer.</p>
    <p>Untuk memperingati pencapaian yang istimewa ini, Troppion menawarkan layanan customisasi <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> dari akrilik. Hubungi customer service kami sekarang juga untuk menciptakan piala yang sempurna, yang tidak hanya menghormati kemenangan tetapi juga mewakili kebanggaan dan kegembiraan. Dengan Troppion, setiap kemenangan Anda akan diabadikan dalam sebuah piala yang elegan dan berkesan.</p>
    `,
    specs:{
    Ukuran:'Tinggi Total 18cm, Tinggi dudukan 3.5cm Panjang dudukan 15cm, Lebar dudukan 4cm, Tebal Akrilik 1.5cm', 
    Bahan:'	Hijau Transparan dan Transparan', 
    Warna:'	Resin, Akrilik'} 
  },
  {
    id: 'PGO 008',
    name: 'Piala Golf Akrilik Nearset Merapi Golf Yogyakarta',
    category: 'Golf',
    images: ['image/golf/golf10.jpg', 'image/golf/golf10.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Custom'],
    desc: `
    <p>Nearset Merapi Golf Yogyakarta merupakan turnamen golf yang bergengsi, menyatukan para pemain golf amatir dan profesional di salah satu lapangan golf terindah di Indonesia. Turnamen ini tidak hanya tentang kompetisi, tetapi juga tentang membangun relasi dan menikmati keindahan alam Merapi yang memukau.</p>
    <p>Untuk memperingati kesuksesan acara ini, Troppion menyediakan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> Akrilik Nearset Merapi Golf Yogyakarta. Piala ini dirancang dengan estetika yang sederhana, menggunakan material akrilik berkualitas yang menampilkan kejernihan dan kilauan luar biasa, menjadikannya penghargaan yang prestisius dan diinginkan oleh semua peserta.</p>
    <p>Bagi panitia yang ingin memberikan penghargaan istimewa kepada para pemenang, Troppion menawarkan layanan custom <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> dari akrilik. Hubungi customer service kami untuk mendesain piala unik yang tidak hanya mengabadikan prestasi, tetapi juga memperkuat citra turnamen Anda. Bersama Troppion, setiap piala dibuat untuk menginspirasi dan menghormati setiap pencapaian.</p>
    `,
    specs:{
    Ukuran:'Tinggi Total 22cm, Panjang dudukan 14cm, dan lebar 6cm', 
    Bahan:'	Akrilik', 
    Warna:'	Transparant'} 
  },
  {
    id: 'PGO 002',
    name: 'Piala Tenee Open Tournament Golf – BNO dan BGO',
    category: 'Golf',
    images: ['image/golf/golf11.jpg', 'image/golf/golf11.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Custom'],
    desc: `
    <p>“Tenee Open Tournament” di Royal Sumatera Golf & Country Medan merupakan salah satu event golf terkemuka yang menarik para pegolf berbakat dari berbagai wilayah. Troppion merasa terhormat dapat menjadi bagian dari acara ini dengan menyediakan <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> custom yang dirancang khusus untuk memperingati kompetisi BNO dan BGO. Piala ini tidak hanya simbol prestasi, tapi juga dedikasi dan semangat para peserta dalam menghadapi tantangan di lapangan.</p>
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Tenee Open Tournament Golf – BNO dan BGO, dibuat dari logam berkualitas tinggi, menampilkan desain yang elegan dan detail yang memukau. Setiap aspek piala dirancang untuk mencerminkan keagungan turnamen ini, memberikan penghargaan yang layak kepada para juara. Dengan kombinasi keindahan visual dan ketahanan material, piala ini diharapkan menjadi kenang-kenangan yang abadi dan sumber inspirasi bagi setiap penerima.</p>
    <p>Apakah Anda ingin mengabadikan momen kemenangan dengan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom dari logam yang eksklusif? Hubungi customer service Troppion sekarang juga. Kami menawarkan berbagai pilihan desain yang dapat disesuaikan sesuai kebutuhan Anda, memastikan setiap piala yang kami buat tidak hanya unik, tapi juga menyimpan nilai historis dan estetika. Dengan Troppion, setiap piala menjadi simbol keberhasilan yang tak terlupakan. Pesan piala custom Anda hari ini dan buatlah acara Anda lebih spesial.</p>
    `,
    specs:{ 
    Bahan:'Logam, dudukan resin', 
    Warna:'Silver'} 
  },
  {
    id: 'PGO 004',
    name: 'Piala Golf Tribute To Our Best Regional CEO BRI Semarang',
    category: 'Golf',
    images: ['image/golf/golf12.jpg', 'image/golf/golf12.jpg'],
    stock: 'Pre-Order',
    tags: ['Piala olahraga', 'Piala Custom'],
    desc: `
    <p>Perayaan “Tribute To Our Best Regional CEO BRI Semarang” merupakan momen penting yang menghormati kepemimpinan dan dedikasi luar biasa. Dalam rangka memperingati acara ini, Troppion menyediakan piala custom yang dirancang khusus untuk mengakui dan merayakan kontribusi signifikan Regional CEO terhadap kesuksesan BRI Semarang. Desain <a href="https://troppion.com/piala-set/" target="_blank" rel="noopener" class="highlight-link">Piala Set</a> ini mencerminkan keunggulan dan prestasi, simbol penghargaan yang abadi untuk seorang pemimpin yang inspiratif.</p>
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> “Tribute To Our Best Regional CEO BRI Semarang” dibuat dari resin berkualitas tinggi, menawarkan detail yang halus dan finish yang elegan. Piala ini tidak hanya sebagai penghargaan, tetapi juga sebagai karya seni yang memperkuat pengakuan atas pencapaian dan pengaruh positif yang diberikan oleh Regional CEO kepada tim dan organisasi. Setiap elemen desain dipilih untuk menonjolkan kehormatan dan mengabadikan momen istimewa ini.</p>
    <p>Untuk membuat acara penghargaan Anda semakin berkesan dengan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom dari resin, hubungi customer service Troppion sekarang juga. Kami berkomitmen untuk memberikan pelayanan terbaik dan produk berkualitas yang sesuai dengan kebutuhan Anda. Dengan Troppion, setiap piala dirancang untuk merefleksikan keunikan dan kebesaran acara Anda. Jangan tunggu lagi, pesan piala custom Anda hari ini dan berikan penghargaan yang elegan dan berkesan kepada para pemimpin yang berprestasi.</p>
    `,
    specs:{
    Bahan:'Resin, plat kuningan', 
    Warna:'	Resin transparant, dudukan hitam'} 
  },
  {
    id: 'PGO 006',
    name: 'Piala Best Gross Overall – Serikat Pekerja Pertamina Patra Wijayakusuma (SPP PWK)',
    category: 'Golf',
    images: ['image/golf/golf13.jpg', 'image/golf/golf13.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Custom'],
    desc: `
    <p>Dalam perhelatan prestisius “Best Gross Overall – Serikat Pekerja Pertamina Patra Wijayakusuma (SPP PWK)”, Troppion menawarkan piala custom yang dirancang khusus untuk merayakan prestasi tertinggi dalam kompetisi golf ini. Setiap detail piala dipilih untuk mencerminkan keunggulan dan kehormatan, menandai momen penting bagi para peserta dan pemenang.</p>
    <p>Piala Best Gross Overall untuk Serikat Pekerja Pertamina Patra Wijayakusuma (SPP PWK) dirancang dengan elegan, menggabungkan keindahan estetika dengan kekuatan dan ketahanan logam pilihan. Detail dan kerumitan desainnya menciptakan simbol keberhasilan yang abadi, menjadikan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> ini lebih dari sekedar penghargaan, melainkan sebuah karya seni yang menghormati prestasi golf terbaik.</p>
    <p>Apakah Anda mencari <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom dari logam yang unik dan berkualitas untuk event Anda? Hubungi customer service TROPPION sekarang juga. Kami siap memberikan layanan terbaik untuk menciptakan piala yang sesuai dengan keinginan dan kebutuhan Anda, memastikan setiap penghargaan menjadi kenangan yang tak terlupakan. Dengan Troppion, setiap kemenangan Anda akan tersimpan dalam elegansi dan keindahan yang abadi. Pesan sekarang dan jadikan event Anda legendaris!</p>
    `,
    specs:{
    Bahan:'	Logam, dudukan resin', 
    Warna:'GOld'} 
  },
  {
    id: 'PGO 001',
    name: 'Trophy Golf Go Bar Baruna Bina Utama – Longest Drive',
    category: 'Golf',
    images: ['image/golf/golf14.jpg', 'image/golf/golf14.jpg'],
    stock: 'Pre-Order',
    tags: ['Golf', 'Piala Custom'],
    desc: `
    <p>Go Bar Baruna Bina Utama – Longest Drive merupakan salah satu kategori yang paling prestisius dalam turnamen golf, di mana para peserta berkompetisi untuk mencapai pukulan terjauh. Kategori ini tidak hanya menguji kekuatan dan keahlian para pegolf, tetapi juga strategi dan ketelitian dalam memilih peralatan dan teknik pukulan.</p>
    <p>Trophy Golf Go Bar Baruna Bina Utama – Longest Drive dirancang sebagai simbol keunggulan dan prestasi bagi pegolf yang berhasil mencetak pukulan terjauh. Terbuat dari logam berkualitas tinggi, trophy ini memiliki desain yang elegan dan mewah, mencerminkan prestasi yang luar biasa dalam dunia golf.</p>
    <p>Ingin merayakan pencapaian luar biasa di lapangan golf dengan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom dari logam? Hubungi customer service TROPPION sekarang juga. Kami menyediakan layanan pembuatan piala golf custom yang dapat disesuaikan dengan kebutuhan Anda, memastikan setiap pencapaian mendapatkan penghargaan yang sesuai dan berkesan. Dengan pengalaman kami, TROPPION berkomitmen untuk menghadirkan produk berkualitas tinggi yang memuaskan.</p>
    `,
    specs:{
    Bahan:'Logam, resin, akrilik',} 
  },
  
  {
    id: '',
    name: '',
    category: '',
    images: ['', ''],
    stock: 'Pre-Order',
    tags: ['', ''],
    desc: `
    <p></p>
    <p></p>
    <p></p>
    `,
    specs:{
    Ukuran:'', 
    Bahan:'', 
    Teknik:''} 
  },    
];

// ========================= LOGIKA HALAMAN =========================
(() => {
  const PHONE='6285728527934';
  const CATEGORIES = ["Semua","Sepak Bola","Basket","Futsal","E-Sport","Medali","Golf"];

  // Helpers
  const qs = s => document.querySelector(s);
  const qsa = s => [...document.querySelectorAll(s)];
  const stripTags = html => String(html||'').replace(/<[^>]*>/g,'');
  const safe = s => (s||'').toLowerCase();

  // Chips kategori
  const chipsEl = document.getElementById('chips');
  CATEGORIES.forEach((c,i)=>{
    const el = document.createElement('button');
    el.className='chip'+(i===0?' active':'');
    el.textContent=c; el.dataset.cat=c;
    chipsEl.appendChild(el);
  });

  // State
  let state = { cat:'Semua', q:'', sort:'default', page:1, per:6 };

  // Elemen
  const grid = document.getElementById('grid');
  const sortSel = document.getElementById('sort');
  const qInput = document.getElementById('q');
  const loadBtn = document.getElementById('loadMore');

  // Filter
  function filterProducts(){
    let arr = products.slice();

    // kategori
    if(state.cat!=='Semua'){
      arr = arr.filter(p => safe(p.category) === safe(state.cat));
    }

    // cari
    if(state.q){
      const q = safe(state.q);
      arr = arr.filter(p => (
        safe((p.name||'') + ' ' + stripTags(p.desc||'') + ' ' + (p.tags||[]).join(' '))
          .includes(q)
      ));
    }

    // sort
    if(state.sort==='name-asc')  arr.sort((a,b)=>(a.name||'').localeCompare(b.name||''));
    if(state.sort==='name-desc') arr.sort((a,b)=>(b.name||'').localeCompare(a.name||''));

    return arr;
  }

  function card(p){
    const el = document.createElement('article');
    el.className='card';

    const main = document.createElement('img');
    main.className='thumb';
    main.src = (p.images&&p.images[0]) || '';
    main.alt = p.name || 'Produk';

    const b2 = document.createElement('span');
    b2.className='badge secondary';
    b2.textContent = p.category || '-';

    const c = document.createElement('div');
    c.className='content';

    const t = document.createElement('div');
    t.className='title';
    t.textContent = p.name || '(Tanpa nama)';

    const actions = document.createElement('div');
    actions.className='actions';

    const bDetail = document.createElement('button');
    bDetail.className='btn';
    bDetail.textContent='Detail';
    bDetail.addEventListener('click',()=>openModal(p));

    const bChat = document.createElement('button');
    bChat.className='btn brand';
    bChat.textContent='Chat';
    bChat.addEventListener('click',()=>openWA(p));

    actions.append(bDetail,bChat);
    c.append(t,actions);
    el.append(main,b2,c);
    return el;
  }

  function render(){
    const list = filterProducts();
    const end = state.page*state.per;
    grid.innerHTML = '';
    list.slice(0,end).forEach(p=>grid.appendChild(card(p)));
    loadBtn.style.display = list.length > end ? 'inline-flex' : 'none';
  }

  // Events
  chipsEl.addEventListener('click',e=>{
    const b = e.target.closest('.chip'); if(!b) return;
    qsa('.chip').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    state.cat = b.dataset.cat; state.page = 1; render();
  });
  qInput.addEventListener('input',e=>{ state.q=e.target.value; state.page=1; render(); });
  sortSel.addEventListener('change',e=>{ state.sort=e.target.value; state.page=1; render(); });
  loadBtn.addEventListener('click',()=>{ state.page++; render(); });

  // Modal
  const modal = document.getElementById('modal');
  const mImg  = document.getElementById('mImg');
  const mDots = document.getElementById('mDots');
  const mTitle= document.getElementById('mTitle');
  const mDesc = document.getElementById('mDesc');
  const mSpecs= document.getElementById('mSpecs');
  const mSizes= document.getElementById('mSizes');
  let mProd=null;

  function openModal(p){
    mProd=p;
    mTitle.textContent=p.name||'Produk';
    mDesc.innerHTML = p.desc || '';

    mDots.innerHTML='';
    const imgs = p.images||[];
    mImg.src = imgs[0] || '';
    imgs.forEach((_,i)=>{
      const d=document.createElement('button'); d.className='dot'+(i===0?' active':'');
      d.addEventListener('click',()=>setSlide(i));
      mDots.appendChild(d);
    });

    mSpecs.innerHTML='';
    Object.entries(p.specs||{}).forEach(([k,v])=>{
      const s=document.createElement('div'); s.className='spec'; s.textContent=`${k}: ${v}`;
      mSpecs.appendChild(s);
    });

    mSizes.innerHTML='';
    ['S','M','L'].forEach((sz,i)=>{
      const pill=document.createElement('button'); pill.className='pill'+(i===1?' active':'');
      pill.textContent=sz; pill.addEventListener('click',()=>{
        qsa('.pill').forEach(x=>x.classList.remove('active')); pill.classList.add('active');
      });
      mSizes.appendChild(pill);
    });

    modal.classList.add('show');
  }
  function setSlide(i){
    if(!mProd) return;
    const imgs = mProd.images||[];
    mImg.src = imgs[i] || '';
    qsa('.dot').forEach((d,ix)=>d.classList.toggle('active',ix===i));
  }
  document.getElementById('mClose').addEventListener('click',()=>modal.classList.remove('show'));
  modal.addEventListener('click',e=>{ if(e.target===modal) modal.classList.remove('show'); });

  // WhatsApp
  function openWA(p){
    const msg = `Halo Troppion,%0ASaya tertarik dengan produk:%0A- Nama: ${encodeURIComponent(p.name||'')}`
      + `%0A- Kategori: ${encodeURIComponent(p.category||'')}%0A%0ATolong info ketersediaan & waktu produksi.`;
    window.open(`https://wa.me/${PHONE}?text=${msg}`,'_blank');
  }
  document.getElementById('mChat').addEventListener('click',()=>{ if(mProd) openWA(mProd); });

  // Init
  (function init(){
    render();
    const y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();
  })();

  // ===== Tambahan agar blog.html bisa akses data ini =====
  window.products = window.products || products;
  window.PRODUCTS  = window.PRODUCTS  || products;
})();
