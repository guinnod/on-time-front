import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), ViteAliases({ deep: true, depth: 2, adjustDuplicates: true })],
})
