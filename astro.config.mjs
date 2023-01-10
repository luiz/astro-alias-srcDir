import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// https://astro.build/config
export default defineConfig({
	srcDir: './src/main',
	vite: {
		resolve: {
			alias: {
				'@': join(dirname(fileURLToPath(import.meta.url)), 'src', 'main'),
			}
		}
	}
});
