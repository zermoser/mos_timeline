import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mos_timeline/',
  server: {
    open: true,
    port: 3015
  }
});
