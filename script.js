// ====== DATA ======
const organisasi = [
  { judul: "HIMATEK", info: "Himpunan Mahasiswa Teknik Komputer · Anggota", gambar: "" },
  { judul: "UKMO Karate", info: "Unit Kegiatan Mahasiswa Olahraga Karate · Anggota", gambar: "" },
];

const pendidikan = [
  { tahun: "Lulus", judul: "SD Patrang 01 Jember", tempat: "Sekolah Dasar" },
  { tahun: "Lulus", judul: "SMPN 4 Jember", tempat: "Sekolah Menengah Pertama" },
  { tahun: "Lulus", judul: "SMAN 5 Jember", tempat: "Sekolah Menengah Atas" },
    { tahun: "Aktif", judul: "Politeknik Negeri Jember", tempat: "Teknik Komputer · Angkatan 2026" },
];

const proyek = [
  { judul: "Sertifikat Kejuaraan Karate", info: "Juara 3 Kejuaraan Open karate Championship 2026 Di UMM .", gambar: "assets/sertifikat1.jpeg" },
  { judul: "Sertifikat Kejuaraan Karate", info: "Juara 3 Kejuaraan Karate FORKI Jember 2026  .", gambar: "assets/sertifikat2.jpeg" },
];

// ====== RENDER ======
const placeholder = t => `https://placehold.co/640x400/1b2340/8aa4ff?text=${encodeURIComponent(t)}`;
const cardHTML = d => `
  <article class="card">
    <img src="${d.gambar || placeholder(d.judul)}" alt="${d.judul}" loading="lazy">
    <div><h3>${d.judul}</h3><p>${d.info}</p></div>
  </article>`;

document.getElementById('orgGrid').innerHTML = organisasi.map(cardHTML).join('');
document.getElementById('projectGrid').innerHTML = proyek.map(cardHTML).join('');
document.getElementById('eduList').innerHTML = pendidikan.map(e => `
  <div class="edu"><small>${e.tahun}</small><h3>${e.judul}</h3><p class="muted">${e.tempat}</p></div>`).join('');

// ====== LOADER ======
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 800);
});

// ====== MENU MOBILE ======
const menu = document.getElementById('menu');
document.getElementById('burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// ====== REVEAL SAAT SCROLL ======
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.reveal, .card, .edu').forEach(el => io.observe(el));

// ====== COUNTER ANGKA ======
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count; let n = 0;
  const step = setInterval(() => {
    n++; el.textContent = n;
    if (n >= target) clearInterval(step);
  }, 1200 / target);
});

// ====== FORM KONTAK -> WhatsApp ======
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const nomor = '6289529312021'; // ganti dengan nomor WA kamu (tanpa +)
  const teks = `Halo, saya ${nama.value} (${email.value}).%0A${encodeURIComponent(pesan.value)}`;
  window.open(`https://wa.me/${nomor}?text=${teks}`, '_blank');
  e.target.reset();
});