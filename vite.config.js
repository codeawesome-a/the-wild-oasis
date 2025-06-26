import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // Automatically opens in browser
  },
  resolve: {
    alias: {
      // Optional: Shorten import paths if you want
      '@': '/src',
    },
  },
});
