import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for GitHub Pages subpath deployment
export default defineConfig({
  plugins: [react()],
  base: '/support-jar-v4/'   // <--- IMPORTANT: your repo name
})
