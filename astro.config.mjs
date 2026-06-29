// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hirepinevalley.com',
  // Emit clean URLs (no .html), matching the live Webflow site.
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Keep system/utility pages out of the sitemap.
      filter: (page) => !/\/(401|404)\/?$/.test(page),
    }),
  ],
});
