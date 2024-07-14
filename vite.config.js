import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MagicString from 'magic-string';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'remove-eval',
      enforce: 'post',
      transform(code, id) {
        if (id.includes('node_modules/three-stdlib/libs/lottie.js')) {
          const magicString = new MagicString(code);
          const evalPattern = /eval/g;
          let match;

          while ((match = evalPattern.exec(code)) !== null) {
            magicString.overwrite(match.index, match.index + 4, '(() => { throw new Error("eval is not allowed"); })()');
          }

          const result = {
            code: magicString.toString(),
            map: magicString.generateMap({
              source: id,
              includeContent: true,
              hires: true,
            }),
          };
          return result;
        }
        return null;
      },
    },
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
