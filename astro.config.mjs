import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brubrunails.com.br',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
