import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio_website/', // Replace 'your-repo-name' with your GitHub repository name
  plugins: [
    react(),
    {
      name: 'remove-eval',
      enforce: 'post',
      transform(code, id) {
        if (id.includes('node_modules/three-stdlib/libs/lottie.js')) {
          return code.replace(/eval/g, '(() => { throw new Error("eval is not allowed"); })()');
        }
        return code;
      },
    },
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Adjust according to your dependencies
        },
      },
    },
    chunkSizeWarningLimit: 600, // Adjust the chunk size warning limit if needed
  },
});
