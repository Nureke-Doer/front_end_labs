import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Говорим Vite НЕ пытаться оптимизировать react-window самому
    include: ['react-window'],
  },
  build: {
    commonjsOptions: {
      include: [/react-window/, /node_modules/],
    },
  },
})