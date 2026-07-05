import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tiagor85.github.io',
  base: '/brubru-nails',
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
