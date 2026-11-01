/*
  DATA GALERI
  ===========
  Tambahkan foto baru cukup dengan menambah satu objek ke array `galeri`.

  - src      : URL gambar. Bisa link S3 (https://<bucket>.s3.<region>.amazonaws.com/galeri/foto.jpg)
               atau file lokal di folder /public (contoh: '/img/foto.webp').
               Pastikan objek S3 bisa dibaca publik (atau lewat CloudFront).
  - alt      : deskripsi singkat isi foto (penting untuk aksesibilitas & SEO).
  - kegiatan : nama kegiatan. Dipakai sebagai filter di halaman Galeri,
               jadi tulis dengan ejaan yang sama untuk kegiatan yang sama.
  - tahun    : tahun kegiatan.
  - tanggal  : (opsional) tanggal kegiatan, bebas formatnya, misal '12 Okt 2026'.

  Foto di bawah ini sementara diambil dari portfolio. Silakan ganti dengan link S3.
*/

export type Foto = {
  src: string;
  alt: string;
  kegiatan: string;
  tahun: string;
  tanggal?: string;
};

// Opsional: isi dengan base URL bucket supaya cukup menulis nama file di `src`.
// Contoh: export const S3_BASE = 'https://gemilang-media.s3.ap-southeast-1.amazonaws.com/galeri/';
export const S3_BASE = '';

export const galeri: Foto[] = [
  { src: '/img/gemilang-uia1.webp', alt: 'Foto bersama anak-anak, orang tua, relawan Gemilang, dan mahasiswa UIA', kegiatan: 'Bulan Bahasa & Ekonomi Berdaya', tahun: '2026', tanggal: '1 Nov 2026' },
  { src: '/img/gemilang-uia3.webp', alt: 'Anak-anak tampil di panggung Bulan Bahasa', kegiatan: 'Bulan Bahasa & Ekonomi Berdaya', tahun: '2026', tanggal: '1 Nov 2026' },
  { src: '/img/gemilang-uia2.webp', alt: 'Mahasiswa FIKES UIA memeriksa tekanan darah warga', kegiatan: 'Bulan Bahasa & Ekonomi Berdaya', tahun: '2026', tanggal: '1 Nov 2026' },
  { src: '/img/gemilang-uia4.webp', alt: 'Relawan Gemilang bersama mahasiswa BEM FEB dan FIKES UIA', kegiatan: 'Bulan Bahasa & Ekonomi Berdaya', tahun: '2026', tanggal: '1 Nov 2026' },
  { src: '/img/foto-bersama.webp', alt: 'Foto bersama relawan dan puluhan anak peserta di aula', kegiatan: 'Generasi', tahun: '2025' },
  { src: '/img/belajar-bawah-pohon.webp', alt: 'Anak-anak duduk di atas tikar belajar bersama di bawah pohon', kegiatan: 'Generasi', tahun: '2025' },
  { src: '/img/mendampingi-membaca.webp', alt: 'Relawan mendampingi anak membaca di meja kecil', kegiatan: 'Kelas Literasi', tahun: '2025' },
  { src: '/img/lembar-kerja.webp', alt: 'Anak-anak mengerjakan lembar kerja berhitung', kegiatan: 'Kelas Numerasi', tahun: '2025' },
  { src: '/img/kelas-literasi.webp', alt: 'Relawan dan anak-anak membaca buku bersama', kegiatan: 'Kelas Literasi', tahun: '2025' },
  { src: '/img/membaca-bersama.webp', alt: 'Relawan membacakan buku untuk anak di atas tikar', kegiatan: 'Kelas Literasi', tahun: '2025' },
  { src: '/img/relawan-dan-anak.webp', alt: 'Relawan duduk bersama anak-anak di teras rumah warga', kegiatan: 'Generasi', tahun: '2025' },
  { src: '/img/berbagi.webp', alt: 'Relawan membagikan bingkisan kepada anak-anak', kegiatan: 'Kelas Akhlak', tahun: '2025' },
  { src: '/img/diskusi-kelompok.webp', alt: 'Anak-anak berdiskusi dalam kelompok kecil', kegiatan: 'Generasi', tahun: '2025' },
  { src: '/img/kelas-teras.webp', alt: 'Anak-anak mengangkat tangan menjawab pertanyaan di kelas teras', kegiatan: 'Generasi', tahun: '2025' },
  { src: '/img/kegiatan-pekanan.webp', alt: 'Suasana kegiatan pekanan dengan banyak anak di halaman', kegiatan: 'Generasi', tahun: '2025' },
];

export const fotoUrl = (src: string) => (/^https?:\/\//.test(src) || src.startsWith('/') ? src : S3_BASE + src);
