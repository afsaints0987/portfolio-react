import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig(() => {
  return {
    define: {
        'process.env': process.env
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});