import { getCollection } from 'astro:content';

/** Semua berita yang bukan draft, terbaru lebih dulu. */
export const ambilBerita = async () =>
  (await getCollection('berita', (b) => !b.data.draft)).sort(
    (a, b) => b.data.tanggal.getTime() - a.data.tanggal.getTime()
  );

export const formatTanggal = (d: Date) =>
  d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' });
