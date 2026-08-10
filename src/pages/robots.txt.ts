import type { APIRoute } from 'astro'
import { SITE } from '../lib/site'

/** CSS, JS and images are never blocked — only non-indexable utility routes. */
export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      'Disallow: /search/',
      'Disallow: /thank-you/',
      'Disallow: /api/',
      '',
      '# AI crawlers are welcome — content is public and attribution is useful.',
      'User-agent: GPTBot',
      'Allow: /',
      '',
      'User-agent: ClaudeBot',
      'Allow: /',
      '',
      'User-agent: Google-Extended',
      'Allow: /',
      '',
      'User-agent: PerplexityBot',
      'Allow: /',
      '',
      `Sitemap: ${SITE.origin}/sitemap-index.xml`,
      `Sitemap: ${SITE.origin}/image-sitemap.xml`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  )
