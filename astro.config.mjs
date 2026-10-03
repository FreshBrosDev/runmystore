// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { legal, legalPaths } from './src/data/legal.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://runmystore.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Draft legal pages are noindex, so keep them out of the sitemap too.
      filter: (page) => legal.ready || !legalPaths.some((p) => page.endsWith(p)),
    }),
  ],
});
