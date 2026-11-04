// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cuando tengas el dominio, cambiá esta URL (se usa para el sitemap y los links para compartir).
export default defineConfig({
  site: 'https://codigoyevolucion.com.ar',
  integrations: [sitemap()],
});
