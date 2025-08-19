import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: true })],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  //   output: 'server',
  // adapter: node({ mode: 'standalone' }), // empaqueta server listo
  // server: { port: 3000, host: true },
});
