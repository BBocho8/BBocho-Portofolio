import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Each page is its own HTML entry, so any static host serves /work/my-annotator/ without rewrites
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        myAnnotator: resolve(__dirname, 'work/my-annotator/index.html'),
        highlights: resolve(__dirname, 'work/highlights/index.html'),
        qivoa: resolve(__dirname, 'work/qivoa/index.html'),
        clubSiteKit: resolve(__dirname, 'work/clubsitekit/index.html'),
      },
    },
  },
})
