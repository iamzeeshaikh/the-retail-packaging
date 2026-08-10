// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const SITE = 'https://theretailpackaging.com'

// Routes that must never reach the XML sitemap.
const EXCLUDE = ['/thank-you/', '/404/', '/search/']

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: { responsiveStyles: false },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE.some((e) => page.endsWith(e)),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const u = new URL(item.url)
        // Homepage carries the most weight, then hubs, then leaf pages.
        const depth = u.pathname.split('/').filter(Boolean).length
        item.priority = depth === 0 ? 1.0 : depth === 1 ? 0.8 : 0.6
        return item
      },
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: { output: { manualChunks: undefined } },
    },
  },
})
