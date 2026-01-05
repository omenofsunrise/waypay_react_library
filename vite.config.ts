import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WaypayReactLibrary',
      fileName: (format) => (format === 'cjs' ? 'waypay-react-library.cjs' : 'waypay-react-library.es.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'framer-motion': 'framerMotion',
        },
      },
    },
  },
})
