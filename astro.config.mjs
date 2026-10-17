import { defineConfig } from 'astro/config';

// Ganti `site` dengan domain final saat deploy.
export default defineConfig({
  site: 'https://ruanggemilang.id',
  output: 'static',
  build: { format: 'directory' },
});
