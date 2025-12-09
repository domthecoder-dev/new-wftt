import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',               // <-- important for gh-pages
  build: {
    outDir: 'dist',        // default, keep it
    assetsDir: 'assets',   // default, keep it
  },
});