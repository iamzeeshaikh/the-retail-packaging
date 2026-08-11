// @ts-check
import { defineConfig } from 'astro/config'

const SITE = 'https://theretailpackaging.com'


export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: { responsiveStyles: false },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: { output: { manualChunks: undefined } },
    },
  },
})
