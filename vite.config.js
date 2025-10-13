import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config - Tailwind is handled via PostCSS (tailwind.config.js / postcss.config.js)
export default defineConfig({
  plugins: [react()],
})
