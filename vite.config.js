import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'

// For GitHub Pages project site: set to your repo name, e.g. '/energy-ktech-2/'
// Build with: npm run build (or VITE_BASE_PATH=/your-repo/ npm run build)
// For root deployment (user site at username.github.io), use: VITE_BASE_PATH=/ npm run build
const basePath = process.env.VITE_BASE_PATH || '/energy-ktech-2/'

export default defineConfig({
  plugins: [
    react(),
    // GitHub Pages: serve SPA for any 404 so client-side routes work
    {
      name: 'copy-404',
      closeBundle() {
        const out = join(process.cwd(), 'dist')
        const idx = join(out, 'index.html')
        const notFound = join(out, '404.html')
        if (existsSync(idx)) copyFileSync(idx, notFound)
      },
    },
  ],
  base: basePath,
})
