// Semua konten komunitas ada di sini, supaya mudah diperbarui tanpa menyentuh tampilan.

export const kontak = {
  instagram: { handle: '@ruanggemilang.id', url: 'https://instagram.com/ruanggemilang.id' },
  tiktok: { handle: '@ruanggemilang.id', url: 'https://www.tiktok.com/@ruanggemilang.id' },
  email: 'ruanggemilang.id@gmail.com',
  whatsapp: [
    { label: '0821-1484-7315', nomor: '6282114847315' },
    { label: '0878-2617-2793', nomor: '6287826172793' },
  ],
  alamat: 'Jl. H. Dehir, RT.009/RW.002, Kel. Jatiluhur, Kec. Jatiasih, Kota Bekasi 17425',
  mapsQuery: 'Jl. H. Dehir Jatiluhur Jatiasih Bekasi',
};

export const waLink = (pesan = 'Halo Gemilang, saya ingin bertanya tentang kegiatan komunitas.') =>
  `https://wa.me/${kontak.whatsapp[0].nomor}?text=${encodeURIComponent(pesan)}`;

export const visi =
  'Menjadi komunitas yang mencetak generasi yang literat, numerat dan berkarakter melalui gerakan kolaborasi komunitas, keluarga, dan masyarakat sehingga tercipta budaya belajar.';

export const misi = [
  'Melakukan pembelajaran literasi dan numerasi dasar anak melalui pembelajaran secara kontekstual.',
  'Menanamkan nilai akhlak mulia melalui kelas akhlak dan monitoring.',
  'Menggerakkan relawan pendidikan yang peduli pada kemajuan karakter anak.',
  'Membangun kolaborasi dengan komunitas, keluarga, dan masyarakat.',
  'Membuat taman baca sebagai sarana menciptakan budaya belajar.',
];

export const tujuan = [
  'Membiasakan anak membaca dan menghitung tiap pekan sehingga tercipta budaya belajar.',
  'Menanamkan nilai akhlak mulia: jujur, empati, tanggung jawab, dan sopan santun.',
  'Menggerakkan relawan pendidikan yang peduli pada kemajuan karakter anak.',
  'Membangun kolaborasi dengan sekolah, komunitas, dan orang tua.',
  'Memberikan manfaat nyata bagi lingkungan sekitar.',
];

export const program = [
  {
    id: 'literasi',
    nama: 'Literasi',
    ringkas: 'Membaca, menulis, mengamati, dan bercerita sampai anak berani berpikir kritis.',
    rincian: [
      'Pembiasaan membaca buku minimal 15 menit di awal kegiatan.',
      'Membaca, menulis, mengamati, dan bercerita hingga mampu berpikir kritis bersama.',
      'Diskusi cerita dan pemahaman bacaan.',
    ],
    tujuan: 'Meningkatkan minat baca dan kemampuan memahami teks.',
    foto: '/img/kelas-literasi.webp',
    simbol: 'Aa',
  },
  {
    id: 'numerasi',
    nama: 'Numerasi',
    ringkas: 'Berhitung lewat permainan dan kejadian sehari-hari yang dekat dengan anak.',
    rincian: [
      'Permainan angka dan berhitung.',
      'Pembelajaran operasi hitung dengan kejadian sehari-hari.',
      'Proyek pembelajaran numerasi.',
    ],
    tujuan: 'Menguatkan keterampilan berhitung dan logika matematika.',
    foto: '/img/lembar-kerja.webp',
    simbol: '1+2',
  },
  {
    id: 'akhlak',
    nama: 'Akhlak',
    ringkas: 'Kisah keteladanan, jurnal harian, dan proyek sosial kecil untuk membentuk budi pekerti.',
    rincian: [
      'Cerita dan kisah inspiratif penuh keteladanan yang mengandung pesan moral.',
      'Pembiasaan melalui jurnal harian.',
      'Proyek sosial kecil.',
    ],
    tujuan: 'Menjadikan akhlak dan budi pekerti sebagai penuntun moral dalam kehidupan sehari-hari anak.',
    foto: '/img/berbagi.webp',
    simbol: '♡',
  },
];

export const capaian = [
  {
    judul: 'Program pembinaan pendidikan dasar berjalan',
    isi: 'Kegiatan belajar dan pendampingan rutin dengan fokus literasi, numerasi, dan karakter.',
  },
  {
    judul: 'Anak-anak makin semangat belajar',
    isi: 'Metode aktif, menyenangkan, dan berbasis praktik membuat partisipasi peserta terus meningkat.',
  },
  {
    judul: 'Relawan muda dan mahasiswa ikut turun langsung',
    isi: 'Gemilang menjadi wadah kontribusi nyata anak muda di bidang sosial dan pendidikan.',
  },
  {
    judul: 'Nilai sosial dan karakter tumbuh',
    isi: 'Bukan hanya akademik: disiplin, kerja sama, kepedulian sosial, dan akhlak ikut ditanamkan.',
  },
  {
    judul: 'Dipercaya orang tua dan warga',
    isi: 'Respons positif dari orang tua dan lingkungan sekitar sebagai kegiatan edukatif yang bermanfaat.',
  },
  {
    judul: 'Kolaborasi lintas elemen',
    isi: 'Bersama karang taruna, orang tua, komunitas, dan aparat pemerintah setempat.',
  },
];

export type Mitra = { nama: string; peran?: string; tahun: string; kegiatan: string };

export const mitra: Mitra[] = [
  { nama: 'Karang Taruna 02 Jatiluhur', tahun: '2025', kegiatan: 'Generasi Batch 1' },
  { nama: 'dr. Yuan Martina, M.A', peran: 'Pengawas Madrasah Kemenag Kota Bekasi', tahun: '2025', kegiatan: 'Narasumber parenting orang tua Batch 1' },
  { nama: 'Karang Taruna 018 Jatimekar', tahun: '2025', kegiatan: 'Generasi Batch 2' },
  { nama: 'Tessya, S.Psi', peran: 'Founder Sekolah Rumah Belajar Mandiri', tahun: '2025 & 2026', kegiatan: 'Narasumber parenting orang tua Batch 2 dan Batch 4' },
  { nama: 'Sekolah PAUD Ummi', tahun: '2025', kegiatan: 'Tim penilai kegiatan Go Green' },
  { nama: 'Karang Taruna 06 Jatiluhur', tahun: '2025', kegiatan: 'Pesta Rakyat Jatiluhur' },
  { nama: 'Karang Taruna 07 Jatisari', tahun: '2026', kegiatan: 'Generasi Batch 3' },
  { nama: 'Vemia Sagitavia, S.Pd', peran: 'Guru BK SMP IT Shidqia Bekasi', tahun: '2026', kegiatan: 'Narasumber parenting orang tua Batch 3' },
  { nama: 'Febri Yoga', peran: 'Pendongeng', tahun: '2026', kegiatan: 'Pendongeng di Riang Ramadhan 2026' },
  { nama: 'DKM Masjid Al-Jannatu Ikhwanurrahmah', tahun: '2026', kegiatan: 'Safari Ramadhan' },
  { nama: 'Lingkungan RT.02/RW.07 Jatiluhur', tahun: '2026', kegiatan: 'Generasi Batch 4' },
  { nama: "TPQ Alfarizi / MT. Maratus Silihah", tahun: '2026', kegiatan: 'Muharram Festival' },
  { nama: 'Kampoeng Dongeng Bekasi', tahun: '2026', kegiatan: 'Geloria (Gemilang Lomba Ceria), Pekan Ceria, pendongeng Generasi 2026' },
  { nama: 'Karang Taruna 01 Jatiluhur', tahun: '2026', kegiatan: 'Kolaborasi edukasi sains' },
  { nama: "BEM FEB Universitas Islam As-Syafi'iyah Jakarta", peran: 'Program Pengabdian Masyarakat', tahun: '2026', kegiatan: 'Kolaborasi Generasi periode September–November 2026' },
  { nama: 'Pemadam Kebakaran Sektor Jatisampurna', tahun: '2026', kegiatan: 'Narasumber edukasi Generasi 2026' },
  { nama: 'Universitas Bina Sarana Informatika', peran: 'Program Penelitian', tahun: '2026', kegiatan: 'Objek penelitian' },
];

export const kegiatan = [
  { nama: 'Generasi', isi: 'Kelas belajar pekanan per batch bersama karang taruna dan lingkungan warga. Sudah berjalan sampai Batch 4.' },
  { nama: 'Parenting orang tua', isi: 'Sesi bersama psikolog, guru BK, dan pengawas madrasah agar pendampingan berlanjut di rumah.' },
  { nama: 'Riang Ramadhan & Safari Ramadhan', isi: 'Dongeng, kajian ringan, dan kegiatan bersama masjid selama bulan Ramadhan.' },
  { nama: 'Muharram Festival', isi: 'Perayaan tahun baru Hijriah bersama TPQ dan majelis taklim setempat.' },
  { nama: 'Geloria & Pekan Ceria', isi: 'Gemilang Lomba Ceria: lomba dan permainan edukatif bersama Kampoeng Dongeng Bekasi.' },
  { nama: 'Go Green & edukasi sains', isi: 'Belajar merawat lingkungan dan mengenal sains lewat percobaan sederhana.' },
];

export const pengurus = [
  { jabatan: 'Penasehat', nama: ['Hasbih, S.E', 'Yahya, S.M', 'Teguh Maulana, S.Pd'] },
  { jabatan: 'Ketua Komunitas', nama: ['Farhan Ali, S.Pd'] },
  { jabatan: 'Sekretaris', nama: ['Dea Amelia', 'Davina Kurnia Sandy'] },
  { jabatan: 'Bendahara', nama: ['Yulia Rahmawati, S.Pd', 'Aura Nafisa Salsabila'] },
  { jabatan: 'Divisi Pendidikan', nama: ['Fariha Ramadhanti', 'Addini Putri Khoirunnisa, S.Mat', 'Rivo M Tsulvan, S.Li'] },
  { jabatan: 'Divisi Media', nama: ['Muhammad Fauzi, A.Md'] },
  { jabatan: 'Divisi Humas', nama: ['Fariz Afif Amrullah, S.Pd', 'Selvi Wulandari'] },
  { jabatan: 'Divisi Keorganisasian', nama: ['Hary Permana', 'Ahmad Haetami, S.H'] },
  { jabatan: 'Divisi Logistik', nama: ['Tio Budiman'] },
  { jabatan: 'Divisi Ekonomi Kreatif', nama: ['Rizka Aulia Putri, S.M', 'Noor Sehah Fauzia, S.Pd'] },
];

export const kutipan =
  'Jika hari ini kita menanam huruf dan angka dengan kasih sayang, maka esok kita akan memanen generasi yang membaca dunia dengan akal dan menyentuhnya dengan akhlak.';
