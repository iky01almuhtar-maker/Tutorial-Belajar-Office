// Modal Data
const modalData = {
  'word-1': {
    title: 'Cara Dasar & Format Word',
    content: `
      <h2>Cara Dasar & Format</h2>
      <h3>Cara membuat paragraf rapi</h3>
      <p>Untuk membuat paragraf yang rapi:</p>
      <ul>
        <li>Gunakan spacing yang konsisten sebelum dan sesudah paragraf</li>
        <li>Atur line spacing ke 1.5 atau double untuk kenyamanan membaca</li>
        <li>Gunakan tab atau indent untuk awal paragraf</li>
      </ul>

      <h3>Cara mengatur margin</h3>
      <p>Margin standar dalam dokumen profesional adalah:</p>
      <ul>
        <li><strong>Atas & bawah:</strong> 2.5 cm</li>
        <li><strong>Kiri & kanan:</strong> 2.5 cm atau 3 cm</li>
      </ul>
      <p>Akses melalui <strong>Layout</strong> → <strong>Margins</strong> → Pilih preset atau custom.</p>

      <h3>Cara menyisipkan tabel dan gambar</h3>
      <ul>
        <li>Untuk tabel: <strong>Insert</strong> → <strong>Table</strong></li>
        <li>Untuk gambar: <strong>Insert</strong> → <strong>Pictures</strong> atau <strong>Online Pictures</strong></li>
        <li>Gunakan <strong>Wrap Text</strong> untuk mengatur posisi gambar</li>
      </ul>

      <h3>Cara membuat cover otomatis</h3>
      <p>Gunakan fitur <strong>Cover Page</strong>:</p>
      <ol>
        <li>Pilih tab <strong>Insert</strong></li>
        <li>Klik <strong>Cover Page</strong></li>
        <li>Pilih desain yang disukai dan isi data</li>
      </ol>
    `
  },
  'word-2': {
    title: 'Fitur Lanjutan Word',
    content: `
      <h2>Fitur Lanjutan</h2>
      <h3>Cara membuat daftar isi otomatis</h3>
      <p>Untuk membuat daftar isi yang otomatis terupdate:</p>
      <ol>
        <li>Format setiap bab dengan Heading 1, sub-bab dengan Heading 2, dst.</li>
        <li>Buat halaman baru untuk daftar isi</li>
        <li>Pilih <strong>References</strong> → <strong>Table of Contents</strong></li>
        <li>Pilih format yang diinginkan</li>
        <li>Jika ada perubahan, klik kanan dan <strong>Update Field</strong></li>
      </ol>

      <h3>Cara menggunakan header & footer</h3>
      <ul>
        <li>Header: tampil di atas setiap halaman</li>
        <li>Footer: tampil di bawah setiap halaman</li>
        <li>Akses via <strong>Insert</strong> → <strong>Header</strong> atau <strong>Footer</strong></li>
        <li>Gunakan untuk nama dokumen, tanggal, atau informasi penting lainnya</li>
      </ul>

      <h3>Cara memberi nomor halaman</h3>
      <p>Tambahkan nomor halaman melalui:</p>
      <ol>
        <li><strong>Insert</strong> → <strong>Page Numbers</strong></li>
        <li>Pilih posisi (Header, Footer, Margin)</li>
        <li>Pilih format nomor (1, i, a, dll.)</li>
      </ol>
    `
  },
  'excel-1': {
    title: 'Rumus Dasar Excel',
    content: `
      <h2>Rumus Dasar Excel</h2>
      <p>Penguasaan rumus dasar adalah fondasi untuk bekerja efisien di Excel.</p>

      <h3>SUM — Menjumlahkan nilai</h3>
      <p><code>=SUM(A1:A10)</code></p>
      <p>Contoh: Jika ingin menjumlahkan nilai dari A1 sampai A10, gunakan formula di atas.</p>

      <h3>AVERAGE — Menghitung rata-rata</h3>
      <p><code>=AVERAGE(A1:A10)</code></p>
      <p>Menghitung rata-rata dari sejumlah nilai dalam rentang tertentu.</p>

      <h3>MAX — Nilai tertinggi</h3>
      <p><code>=MAX(A1:A10)</code></p>
      <p>Mencari nilai tertinggi dalam rentang.</p>

      <h3>MIN — Nilai terendah</h3>
      <p><code>=MIN(A1:A10)</code></p>
      <p>Mencari nilai terendah dalam rentang.</p>

      <h3>COUNT — Menghitung jumlah data</h3>
      <p><code>=COUNT(A1:A10)</code></p>
      <p>Menghitung berapa banyak cell yang berisi angka.</p>
    `
  },
  'excel-2': {
    title: 'Rumus Menengah Excel',
    content: `
      <h2>Rumus Menengah</h2>
      <h3>IF — Pernyataan kondisional</h3>
      <p><code>=IF(A1>10,"Yes","No")</code></p>
      <p>Jika nilai A1 lebih besar dari 10, tampilkan "Yes", jika tidak tampilkan "No".</p>

      <h3>VLOOKUP — Pencarian vertikal</h3>
      <p><code>=VLOOKUP(A2,$F$2:$G$20,2,FALSE)</code></p>
      <p>Mencari nilai di kolom pertama dan mengembalikan nilai dari kolom yang ditentukan.</p>

      <h3>HLOOKUP — Pencarian horizontal</h3>
      <p>Sama seperti VLOOKUP, tapi untuk data yang disusun secara horizontal.</p>

      <h3>COUNTIF — Menghitung dengan kondisi</h3>
      <p><code>=COUNTIF(A1:A10,">5")</code></p>
      <p>Menghitung berapa banyak cell yang memenuhi kriteria tertentu.</p>

      <h3>SUMIF — Menjumlahkan dengan kondisi</h3>
      <p><code>=SUMIF(A1:A10,">100",B1:B10)</code></p>
      <p>Menjumlahkan nilai jika memenuhi kriteria tertentu.</p>
    `
  },
  'excel-3': {
    title: 'Tips & Shortcut Excel',
    content: `
      <h2>Tips & Shortcut Excel</h2>
      <table>
        <tr><td>Ctrl + Shift + L</td><td>Filter — Aktifkan filter pada header tabel</td></tr>
        <tr><td>Ctrl + Arrow Key</td><td>Lompat ke cell terakhir dalam rentang data</td></tr>
        <tr><td>F2</td><td>Edit cell — Edit isi cell yang dipilih</td></tr>
        <tr><td>Ctrl + ;</td><td>Masukkan tanggal hari ini</td></tr>
        <tr><td>Ctrl + Shift + ;</td><td>Masukkan waktu sekarang</td></tr>
        <tr><td>Ctrl + 1</td><td>Buka Format Cells dialog</td></tr>
        <tr><td>F9</td><td>Refresh formula</td></tr>
      </table>

      <h3>Tips membuat tabel otomatis</h3>
      <ul>
        <li>Pilih data → <strong>Home</strong> → <strong>Format as Table</strong></li>
        <li>Pilih style yang diinginkan</li>
        <li>Excel akan otomatis memberikan filter dan format</li>
      </ul>

      <h3>Cara membuat grafik</h3>
      <ol>
        <li>Pilih data yang ingin dibuat grafik</li>
        <li>Pilih <strong>Insert</strong> → <strong>Chart</strong></li>
        <li>Pilih jenis grafik (Column, Line, Pie, dll.)</li>
        <li>Sesuaikan judul dan label sumbu</li>
      </ol>
    `
  },
  'ppt-1': {
    title: 'Membuat Slide Profesional',
    content: `
      <h2>Cara Membuat Slide Profesional</h2>
      <h3>Gunakan template konsisten</h3>
      <ul>
        <li>Pilih satu template dan gunakan di seluruh presentasi</li>
        <li>Hindari mengubah-ubah warna, font, atau layout</li>
        <li>Konsistensi membuat presentasi terlihat profesional</li>
      </ul>

      <h3>Batasi teks, lebihkan visual</h3>
      <ul>
        <li>Jangan terlalu banyak teks per slide</li>
        <li>Gunakan bullet points, bukan paragraf panjang</li>
        <li>Tambahkan gambar, grafik, atau diagram untuk memperjelas</li>
        <li>Rasio ideal: 1 slide = 1 ide utama</li>
      </ul>

      <h3>Gunakan slide master untuk konsistensi</h3>
      <ol>
        <li>Buka <strong>View</strong> → <strong>Slide Master</strong></li>
        <li>Edit layout utama yang akan diterapkan ke semua slide</li>
        <li>Tambahkan logo, tema warna, atau elemen desain</li>
        <li>Klik <strong>Close Master View</strong> untuk kembali</li>
      </ol>
    `
  },
  'ppt-2': {
    title: 'Animasi & Transisi',
    content: `
      <h2>Animasi & Transisi PowerPoint</h2>
      <h3>Memilih animasi sederhana</h3>
      <ul>
        <li>Pilih elemen slide</li>
        <li>Buka <strong>Animations</strong> tab</li>
        <li>Pilih animasi dari pilihan yang tersedia</li>
        <li>Animasi yang bagus: Fade, Wipe, Fly In</li>
        <li>Hindari animasi yang terlalu banyak atau mencolok</li>
      </ul>

      <h3>Menggunakan transisi slide</h3>
      <ul>
        <li>Transisi berfungsi untuk perpindahan antar slide</li>
        <li>Akses via <strong>Transitions</strong> tab</li>
        <li>Pilih transisi yang halus: Push, Wipe, atau Fade</li>
        <li>Set durasi 0.5-1 detik untuk efek yang sempurna</li>
      </ul>

      <h3>Tips animasi yang efektif</h3>
      <ul>
        <li>Gunakan animasi untuk menekankan, bukan untuk hiburan</li>
        <li>Jangan gunakan lebih dari 3 animasi per slide</li>
        <li>Atur timing agar animasi muncul saat Anda membicarakannya</li>
      </ul>
    `
  },
  'ppt-3': {
    title: 'Membuat Grafik & Chart',
    content: `
      <h2>Cara Membuat Grafik dan Chart</h2>
      <h3>Langkah-langkah membuat grafik</h3>
      <ol>
        <li>Pilih <strong>Insert</strong> → <strong>Chart</strong></li>
        <li>Pilih jenis grafik:
          <ul>
            <li><strong>Column Chart:</strong> Untuk perbandingan antar kategori</li>
            <li><strong>Line Chart:</strong> Untuk menunjukkan trend</li>
            <li><strong>Pie Chart:</strong> Untuk menunjukkan proporsi</li>
            <li><strong>Bar Chart:</strong> Untuk data horizontal</li>
          </ul>
        </li>
        <li>Edit data langsung di PowerPoint atau impor dari Excel</li>
        <li>Sesuaikan warna dan label sesuai desain slide</li>
      </ol>

      <h3>Tips presentasi grafik</h3>
      <ul>
        <li>Gunakan warna yang konsisten dengan tema presentasi</li>
        <li>Tambahkan judul dan label sumbu yang jelas</li>
        <li>Hindari grafik yang terlalu kompleks</li>
        <li>Fokus pada data yang penting untuk audiens</li>
      </ul>
    `
  },
  'ppt-4': {
    title: 'Tips Presentasi Efektif',
    content: `
      <h2>Tips Presentasi yang Efektif</h2>
      <h3>Sebelum presentasi</h3>
      <ul>
        <li>Pahami konten dengan mendalam</li>
        <li>Latih presentasi berkali-kali</li>
        <li>Persiapkan jawaban untuk pertanyaan yang mungkin muncul</li>
        <li>Cek peralatan (proyektor, mic, dll.)</li>
      </ul>

      <h3>Selama presentasi</h3>
      <ul>
        <li>Buat kontak mata dengan audiens</li>
        <li>Bicara dengan jelas dan jangan terburu-buru</li>
        <li>Gunakan gesture yang natural dan ekspresif</li>
        <li>Jangan membaca slide word-for-word</li>
        <li>Berikan waktu untuk pertanyaan</li>
      </ul>

      <h3>Desain slide yang mendukung presentasi</h3>
      <ul>
        <li>Font besar yang mudah dibaca dari jauh</li>
        <li>Warna kontras agar teks jelas</li>
        <li>Spasi yang cukup, jangan cramped</li>
        <li>Visual yang relevan dengan konten</li>
      </ul>
    `
  },
  'ppt-5': {
    title: 'Shortcut PowerPoint',
    content: `
      <h2>Shortcut PowerPoint Penting</h2>
      <table>
        <tr><td>Ctrl + M</td><td>Slide baru — Tambah slide baru setelah slide saat ini</td></tr>
        <tr><td>Ctrl + D</td><td>Duplicate — Duplikasi slide yang dipilih</td></tr>
        <tr><td>Shift + F5</td><td>Mulai presentasi dari slide sekarang</td></tr>
        <tr><td>F5</td><td>Mulai presentasi dari slide pertama</td></tr>
        <tr><td>Escape</td><td>Keluar dari mode presentasi</td></tr>
        <tr><td>Page Down / Space</td><td>Slide berikutnya saat presentasi</td></tr>
        <tr><td>Page Up</td><td>Slide sebelumnya saat presentasi</td></tr>
        <tr><td>B</td><td>Layar hitam saat presentasi</td></tr>
        <tr><td>W</td><td>Layar putih saat presentasi</td></tr>
        <tr><td>Ctrl + A</td><td>Select all — Pilih semua object di slide</td></tr>
      </table>

      <h3>Shortcut tambahan yang berguna</h3>
      <ul>
        <li><strong>Ctrl + N:</strong> Presentasi baru</li>
        <li><strong>Ctrl + O:</strong> Buka file presentasi</li>
        <li><strong>Ctrl + S:</strong> Simpan presentasi</li>
        <li><strong>Ctrl + P:</strong> Print presentasi</li>
      </ul>
    `
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Smooth scroll with offset for fixed header
  const header = document.getElementById('header');
  const headerHeight = () => header ? header.offsetHeight + 10 : 70;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const top = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight();
        window.scrollTo({top, behavior: 'smooth'});
        // close mobile nav
        if (nav.classList.contains('open')){
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });

  // Accordion behavior
  document.querySelectorAll('.accordion-item').forEach(item => {
    const btn = item.querySelector('.accordion-head');
    const body = item.querySelector('.accordion-body');
    if (!btn || !body) return;
    body.style.display = 'none';
    btn.addEventListener('click', () => {
      const open = body.style.display !== 'none';
      // close all in same accordion
      const parent = item.parentElement;
      parent.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
      if (!open) body.style.display = 'block';
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r => io.observe(r));

  // Active nav link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const setActive = () => {
    const fromTop = window.scrollY + headerHeight() + 6;
    let current = null;
    sections.forEach(section => {
      const top = section.offsetTop;
      if (top <= fromTop) current = section.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  setActive();
  window.addEventListener('scroll', setActive);

  // Modal functionality
  const modal = document.getElementById('modal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.querySelector('.modal-close');

  function openModal(modalId) {
    if (modalData[modalId]) {
      const data = modalData[modalId];
      modalContent.innerHTML = data.content;
      modal.classList.add('open');
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  }

  function closeModal() {
    modal.classList.remove('open');
    modalOverlay.classList.remove('open');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  // Card click handlers
  document.querySelectorAll('.card-clickable').forEach(card => {
    card.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Close modal handlers
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
});
