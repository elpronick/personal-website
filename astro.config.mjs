import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://elpronick.github.io',
  base: '/personal-website',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (source, filepath) => {
            if (filepath.includes('_variables.scss') || filepath.includes('_mixins.scss')) {
              return source;
            }
            return `@use "src/styles/_variables.scss" as *;\n@use "src/styles/_mixins.scss" as *;\n${source}`;
          }
        }
      }
    }
  }
});
