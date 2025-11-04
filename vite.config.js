import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite pour Mixx Radio SPA
export default defineConfig({
  plugins: [react()],
  base: './',
})
