import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Project-repo GitHub Pages: served from /priyanka-portfolio/.
// Base is applied only for production builds so `npm run dev` stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/priyanka-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    cssMinify: true,
  },
}))
