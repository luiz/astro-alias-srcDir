import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    resolve: {
      alias: {
        '@': join(dirname(fileURLToPath(import.meta.url)), 'src')
      }
    }
  },
  integrations: [vue()],
  adapter: vercel()
});
