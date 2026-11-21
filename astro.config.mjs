// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Trocar pelo domínio próprio quando estiver ligado (e em src/data/config.ts)
export default defineConfig({
  site: 'https://www.jeffersonlourenco.com.br',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  server: { port: 4321, host: true },
});
