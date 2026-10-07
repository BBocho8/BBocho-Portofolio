import { readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

const serverDir = resolve('dist-ssr')
const renderedAt = new Date().toISOString()

try {
  // This bundle only runs at build time; the deployment remains static files.
  await build({
    configFile: false,
    build: {
      ssr: 'src/prerender.tsx',
      outDir: serverDir,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'prerender.mjs' } },
    },
  })

  const { routes, render } = await import(pathToFileURL(resolve(serverDir, 'prerender.mjs')).href)
  const locations = []

  for (const route of routes) {
    const file = resolve('dist', route.file)
    const template = await readFile(file, 'utf8')
    const title = template.match(/<title>(.*?)<\/title>/s)?.[1]
    const description = template.match(/<meta\s+name="description"\s+content="([^"]+)"/s)?.[1]
    const canonical = template.match(/<link\s+rel="canonical"\s+href="([^"]+)"/s)?.[1]
    if (!title || !description || !canonical) throw new Error(`Missing SEO metadata in ${route.file}`)
    if (!template.includes('<div id="root"></div>')) throw new Error(`Missing render outlet in ${route.file}`)

    const { html, structuredData, image } = render(route.path, renderedAt, { title, description, canonical })
    // Escape '<' so content can never close the JSON-LD script element.
    const json = JSON.stringify(structuredData).replace(/</g, '\\u003c')
    const head = `<link rel="preload" as="image" href="${image}" fetchpriority="high" />\n\t\t<script type="application/ld+json">${json}</script>`
    const result = template
      .replace('<div id="root"></div>', () => `<div id="root" data-rendered-at="${renderedAt}">${html}</div>`)
      .replace('</head>', () => `\t\t${head}\n\t</head>`)
    await writeFile(file, result)
    locations.push(canonical)
    console.log(`Prerendered ${route.path}`)
  }

  // Derive discovery files from the exact pages emitted above. Omit speculative
  // lastmod timestamps: a rebuild does not imply that page content changed.
  const origin = new URL(locations[0]).origin
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locations.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`
  await writeFile(resolve('dist/sitemap.xml'), sitemap)
  await writeFile(resolve('dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`)
} finally {
  await rm(serverDir, { recursive: true, force: true })
}
