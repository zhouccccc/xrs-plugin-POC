import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  build: {
    outDir: 'shein',
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      formats: ['es'],
      fileName: 'plugin'
    },
  },
  plugins: [react()],
})
