import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: [
      '**/*.{test,spec}.?(c|m)[jt]s?(x)',
      './src/**/{tests,spec}.?(c|m)[jt]s?(x)'
    ],
    setupFiles: './.vitest/setup.js'
  }
})
