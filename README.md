# Website Komunitas Gemilang

Situs statis untuk GEMILANG (Gerakan Mendidik dengan Ilmu dan Akhlak Cemerlang), dibangun dengan [Astro](https://astro.build).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil statis di folder dist/
npm run preview  # cek hasil build
```

## Struktur

```
src/
  data/site.ts      # semua konten: kontak, visi-misi, program, mitra, pengurus
  data/galeri.ts    # daftar foto galeri (isi dengan link S3)
  pages/            # index, tentang, program, kolaborasi, galeri, kontak, 404
  components/       # Header, Footer
  layouts/Base.astro
  styles/global.css # token warna & tipografi
public/
  logo.png, logo-terang.png, favicon.png
  img/              # foto sementara dari portfolio
```

## Menambah foto galeri (S3)

Buka `src/data/galeri.ts`, lalu tambahkan objek baru:

```ts
{ src: 'https://nama-bucket.s3.ap-southeast-1.amazonaws.com/galeri/generasi-batch-4-01.jpg',
  alt: 'Anak-anak membaca bersama di kelas Generasi Batch 4',
  kegiatan: 'Generasi', tahun: '2026', tanggal: '12 Okt 2026' },
```

- Objek S3 harus bisa dibaca publik (atau lewat CloudFront).
- Isi `S3_BASE` di file yang sama supaya `src` cukup ditulis nama filenya.
- `kegiatan` otomatis jadi tombol filter di halaman Galeri. Tulis dengan ejaan yang sama untuk kegiatan yang sama.
- Ukuran ideal: sisi terpanjang ±1600px, format WebP/JPG, di bawah 400 KB.
- Lima foto pertama juga muncul di beranda.

Setelah mengubah data, jalankan `npm run build` lalu deploy ulang folder `dist/`.

## Menambah berita

Buat file Markdown baru di `src/content/berita/`. Nama file menjadi alamat halaman
(`kegiatan-baru.md` → `/berita/kegiatan-baru/`).

```md
---
judul: 'Judul berita'
tanggal: 2026-11-15
kategori: Kegiatan        # opsional, default "Kegiatan"
ringkasan: 'Satu-dua kalimat untuk kartu berita dan preview di media sosial.'
sampul: /img/foto-sampul.webp
sampulAlt: 'Deskripsi foto sampul'
draft: false              # true = tidak ditampilkan
---

Isi berita. Paragraf biasa, > untuk kutipan.

<figure>
  <img src="/img/foto.webp" alt="Deskripsi foto" loading="lazy" />
  <figcaption>Keterangan foto.</figcaption>
</figure>
```

Berita diurutkan dari tanggal terbaru. Tiga berita terbaru juga tampil di beranda.

## Deploy dengan Docker Compose (VPS)

Image dibangun dua tahap: Node membuat situs statis, lalu nginx (di dalam container) menyajikannya.
Port container hanya dibuka ke `127.0.0.1` sehingga hanya bisa diakses lewat nginx di host.

```bash
git clone <repo> gemilang && cd gemilang
docker compose up -d --build        # default: 127.0.0.1:8080
# port lain: echo "WEB_PORT=8090" > .env && docker compose up -d --build
```

Update konten atau galeri: `git pull && docker compose up -d --build`.

Contoh server block nginx di host (`/etc/nginx/sites-available/gemilang`):

```nginx
server {
    listen 80;
    server_name ruanggemilang.id www.ruanggemilang.id;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Lalu `sudo ln -s /etc/nginx/sites-available/gemilang /etc/nginx/sites-enabled/ && sudo nginx -t && sudo systemctl reload nginx`,
dan pasang HTTPS dengan `sudo certbot --nginx -d ruanggemilang.id -d www.ruanggemilang.id`.

Ganti `site` di `astro.config.mjs` dengan domain final agar tautan canonical dan Open Graph benar.
Folder `dist/` juga tetap bisa diunggah ke hosting statis lain (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront).

## Warna

| Token | Hex | Peran |
| --- | --- | --- |
| `--biru` | `#0a3f73` | Biru logo, warna utama |
| `--biru-tua` | `#072c52` | Judul, garis |
| `--tinta` | `#2e2e33` | Teks, footer (abu logo) |
| `--kertas` | `#f7f9fc` | Latar kertas bergaris |
| `--pensil` | `#f6b800` | Aksen tombol (kuning pensil) |
| `--margin` | `#e0475b` | Garis margin & catatan tangan |
