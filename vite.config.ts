import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Or '/my-app/' if deployed to a subdirectory
  build: { // Ensure proper build configuration
    outDir: 'dist', // Vite's default, but be explicit
    emptyOutDir: true, // Recommended to clear the output dir before each build
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Keep this, if you need it
  },
});