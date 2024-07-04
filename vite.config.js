import { defineConfig } from 'vite'  
import { fileURLToPath } from 'node:url'
import { htmlEntries } from './html_entries'


export default defineConfig({
  resolve: {
    alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
     ]
  },
  publicDir: 'static',
  build: {
    outDir: 'public',
    rollupOptions: {
      input: htmlEntries()
    }
  }
})