import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root deployment (Hostinger, Netlify, etc.): assets load from /
// For GitHub Pages at username.github.io/repo-name/, use: VITE_BASE_PATH=/repo-name/ npm run build
const basePath = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
})
