import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/your-repo-name/', // Replace 'your-repo-name' with your GitHub repository name
  plugins: [react()],
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
