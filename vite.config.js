import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  server: {
    allowedHosts: [
      'd1edbfe22567.ngrok-free.app',
      '.ngrok-free.app',  // Allow all ngrok-free.app subdomains
      '.ngrok.io'          // Allow all ngrok.io subdomains (if you upgrade)
    ]
  }
})
