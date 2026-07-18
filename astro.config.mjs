// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // GitHub Pages base path: /<repo-name>/
  // Change 'my-portfolio' to your repo name
  base: '/',
});
