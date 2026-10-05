// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { legal, legalPaths } from './src/data/legal.ts';

// Unlinked pages that should not be indexed.
const hidden = ['/sprint/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://runmystore.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Draft legal pages are noindex, so keep them out of the sitemap too.
      filter: (page) =>
        !hidden.some((p) => page.endsWith(p)) && (legal.ready || !legalPaths.some((p) => page.endsWith(p))),
    }),
  ],
});
