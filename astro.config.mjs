// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const isGitHub = process.env.GITHUB_PAGES === 'true';
const base = isGitHub ? '/my-portfolio/' : '/';
const site = isGitHub ? 'https://zengzcs.github.io/my-portfolio' : 'https://zengzcs-portfolio.pages.dev';

export default defineConfig({
  integrations: [react()],
  base,
  site,
});
