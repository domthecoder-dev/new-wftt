import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/new-wftt/',  // <-- CHANGE THIS TO YOUR REPO NAME            
  build: {
    outDir: 'dist',        // default, keep it
    assetsDir: 'assets',   // default, keep it
  },
});