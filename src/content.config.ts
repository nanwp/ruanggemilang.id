import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Setiap berita adalah satu file Markdown di src/content/berita/.
// Nama file menjadi alamat halaman, misal `bulan-bahasa-2026.md` -> /berita/bulan-bahasa-2026/
const berita = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/berita' }),
  schema: z.object({
    judul: z.string(),
    tanggal: z.coerce.date(),
    ringkasan: z.string(),
    sampul: z.string(),
    sampulAlt: z.string(),
    kategori: z.string().default('Kegiatan'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { berita };
