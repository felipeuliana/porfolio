import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
