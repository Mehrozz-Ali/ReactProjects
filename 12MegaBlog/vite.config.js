
import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  plugins: [
    react(),
    tailwind(),
    autoprefixer(),
  ],
})
