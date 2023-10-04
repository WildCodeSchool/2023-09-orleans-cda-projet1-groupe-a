import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'JAGA', // TODO: use the right repo name
  plugins: [react()],
});
