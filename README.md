# Brice Braquin's portfolio

React, TypeScript and Vite portfolio hosted on Vercel at https://www.bbocho.com/.
Use Node 24 and install dependencies with npm install.

- npm run dev starts the Vite development server.
- npm run build typechecks, builds the browser assets, prerenders all three pages and verifies the SEO output.
- npm run preview serves the production output locally.
- npm run lint checks the source.
- npm run check:seo rechecks an existing production build.

## SEO and rendering

The homepage and case studies have separate HTML entries. Their titles, descriptions,
canonical URLs and social metadata live in index.html and work/*/index.html.
The canonical host is www.bbocho.com, matching the existing production domain redirect.
Vercel's trailing-slash setting aligns route URLs with those canonicals.

After the Vite client build, scripts/prerender.mjs compiles src/prerender.tsx
and renders the same React components into each HTML file. It injects JSON-LD
for the author, website, profile and case studies, and preloads each page's primary image.
It also generates dist/robots.txt and dist/sitemap.xml from the rendered routes.
Only static files in dist/ are deployed; no runtime server is required.

The browser hydrates the existing markup; development entries use a normal React mount.
Entrance animations leave content visible without JavaScript. Date-based text hydrates
using the build date before refreshing from the visitor's clock.

When adding a page, add its HTML entry to vite.config.ts and its component/route
to src/prerender.tsx. Update the expected page count in scripts/check-seo.mjs.
The build checks unique metadata, canonicals, JSON-LD, sitemap coverage, primary image
loading, rendered headings, content visibility, and all local assets and anchor links.

## Production verification

After deployment, verify the three public URLs, /robots.txt and /sitemap.xml.
In Google Search Console, submit https://www.bbocho.com/sitemap.xml and inspect the
homepage and both case studies. Search Console access is needed to confirm Google's
indexing, selected canonical and Core Web Vitals; local checks cannot establish those.
Validate deployed JSON-LD with Google's Rich Results Test. Page metadata and valid
structured data help search engines understand the site, but do not guarantee rankings.
