import assert from 'node:assert/strict'
import { access, readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const origin = 'https://www.bbocho.com'
const dist = resolve('dist')
const pages = new Map()
const titles = new Set()
const descriptions = new Set()
const sharingImages = new Set()
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]),
)
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(([tag]) => attributes(tag))
const meta = (html, name) => {
  const matches = tags(html, 'meta').filter((tag) => tag.name === name || tag.property === name)
  assert.equal(matches.length, 1, `Expected one ${name} metadata tag`)
  return matches[0].content
}

// Read the emitted JPEG's frame header so metadata is checked against the file,
// including accidentally renamed PNGs or exports with the wrong dimensions.
const jpegDimensions = (buffer) => {
  assert.equal(buffer.readUInt16BE(0), 0xffd8, 'Sharing images must be real JPEG files')
  let offset = 2
  while (offset + 4 < buffer.length) {
    assert.equal(buffer[offset], 0xff, 'Invalid JPEG segment')
    while (buffer[offset] === 0xff) offset++
    const marker = buffer[offset++]
    if (marker === 0xd9 || marker === 0xda) break
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue
    const length = buffer.readUInt16BE(offset)
    assert.ok(length >= 2 && offset + length <= buffer.length, 'Truncated JPEG segment')
    if ([0xc0, 0xc1, 0xc2].includes(marker)) {
      return { height: buffer.readUInt16BE(offset + 3), width: buffer.readUInt16BE(offset + 5) }
    }
    offset += length
  }
  throw new Error('JPEG image dimensions not found')
}

// Inspect every emitted HTML page rather than testing only the homepage.
const collect = async (directory) => {
  for (const entry of await readdir(resolve(dist, directory), { withFileTypes: true })) {
    const path = `${directory}${entry.name}`
    if (entry.isDirectory()) await collect(`${path}/`)
    else if (entry.name === 'index.html') pages.set(`/${directory}`, await readFile(resolve(dist, path), 'utf8'))
  }
}
await collect('')
assert.deepEqual([...pages.keys()].sort(), ['/', '/work/clubsitekit/', '/work/highlights/', '/work/my-annotator/', '/work/qivoa/'], 'The homepage and all four case studies must be emitted')

for (const [path, html] of pages) {
  assert.match(html, /<html lang="en">/)
  const canonical = tags(html, 'link').filter((tag) => tag.rel === 'canonical')
  assert.equal(canonical.length, 1, `${path}: missing or duplicate canonical`)
  assert.equal(canonical[0].href, `${origin}${path}`)
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]
  const description = meta(html, 'description')
  assert.ok(title && title.length <= 65, `${path}: missing or overly long title`)
  assert.ok(description.length >= 80 && description.length <= 170, `${path}: missing or overly long description`)
  assert.ok(!titles.has(title), `${path}: duplicate title`)
  assert.ok(!descriptions.has(description), `${path}: duplicate description`)
  titles.add(title)
  descriptions.add(description)
  assert.equal(meta(html, 'og:title'), title)
  assert.equal(meta(html, 'twitter:title'), title)
  assert.equal(meta(html, 'og:description'), description)
  assert.equal(meta(html, 'twitter:description'), description)
  assert.equal(meta(html, 'og:url'), canonical[0].href)
  assert.equal(meta(html, 'og:type'), path === '/' ? 'website' : 'article')
  assert.equal(meta(html, 'twitter:card'), 'summary_large_image')
  assert.equal(meta(html, 'twitter:image'), meta(html, 'og:image'))
  assert.ok(meta(html, 'og:image:alt'))
  assert.equal(meta(html, 'twitter:image:alt'), meta(html, 'og:image:alt'))
  const sharingImage = new URL(meta(html, 'og:image'))
  assert.equal(sharingImage.origin, origin)
  assert.match(sharingImage.pathname, /^\/social\/[a-z-]+-v\d+\.jpg$/)
  assert.ok(!sharingImages.has(sharingImage.href), `${path}: sharing preview must be specific to this page`)
  sharingImages.add(sharingImage.href)
  const imageFile = await readFile(resolve(dist, `.${sharingImage.pathname}`))
  const dimensions = jpegDimensions(imageFile)
  assert.deepEqual(dimensions, { width: 1200, height: 630 })
  assert.equal(meta(html, 'og:image:type'), 'image/jpeg')
  assert.equal(Number(meta(html, 'og:image:width')), dimensions.width)
  assert.equal(Number(meta(html, 'og:image:height')), dimensions.height)
  assert.ok(imageFile.length < 1_000_000, `${path}: sharing preview is unnecessarily large`)
  assert.doesNotMatch(meta(html, 'robots'), /noindex|nofollow/)
  assert.match(meta(html, 'robots'), /max-image-preview:large/)

  const body = html.split('<body>')[1]
  assert.match(body, /id="root" data-rendered-at="[^"]+"/)
  assert.equal(tags(body, 'h1').length, 1, `${path}: expected one rendered primary heading`)
  assert.equal(tags(body, 'main').length, 1)
  assert.match(body, /Brice Braquin/)
  assert.match(body, /id="contact"/)
  assert.match(body, /mailto:bricebraquin@live.fr/)
  assert.doesNotMatch(body, /opacity:\s*0(?:[;"\s]|$)|visibility:\s*hidden|display:\s*none/, `${path}: content hidden without JavaScript`)
  assert.ok(body.replace(/<[^>]+>/g, '').length > 2000, `${path}: missing prerendered content`)
  for (const image of tags(body, 'img')) {
    assert.ok(image.alt && image.width && image.height, `${path}: image needs alt text and dimensions`)
  }
  const primaryImage = tags(body, 'img').find((image) => image.fetchPriority === 'high' || image.fetchpriority === 'high')
  assert.ok(primaryImage && primaryImage.loading !== 'lazy', `${path}: primary image must load eagerly`)
  assert.ok(tags(html, 'link').some((tag) => tag.rel === 'preload' && tag.as === 'image' && tag.href === primaryImage.src))

  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  assert.equal(jsonBlocks.length, 1, `${path}: expected structured data`)
  const schema = JSON.parse(jsonBlocks[0][1])
  assert.equal(schema['@context'], 'https://schema.org')
  const person = schema['@graph'].find((node) => node['@type'] === 'Person')
  const website = schema['@graph'].find((node) => node['@type'] === 'WebSite')
  const page = schema['@graph'].find((node) => node['@type'] === (path === '/' ? 'ProfilePage' : 'WebPage'))
  assert.equal(person.name, 'Brice Braquin')
  assert.equal(person.url, `${origin}/`)
  assert.ok(person.sameAs.includes('https://github.com/BBocho8/'))
  assert.equal(website.url, `${origin}/`)
  assert.equal(page.url, canonical[0].href)
  assert.equal(page.description, description)
  const socialImage = schema['@graph'].find((node) => node['@type'] === 'ImageObject' && node['@id'] === page.primaryImageOfPage['@id'])
  assert.equal(socialImage.contentUrl, sharingImage.href)
  assert.equal(socialImage.width, dimensions.width)
  assert.equal(socialImage.height, dimensions.height)
  if (path !== '/') {
    const article = schema['@graph'].find((node) => node['@type'] === 'Article')
    const breadcrumbs = schema['@graph'].find((node) => node['@type'] === 'BreadcrumbList')
    assert.equal(article.author['@id'], person['@id'])
    assert.equal(article.url, canonical[0].href)
    assert.ok(article.image.includes(sharingImage.href))
    assert.equal(breadcrumbs.itemListElement.at(-1).item, canonical[0].href)
  }

  // Check every local asset, page link and fragment in the actual build output.
  for (const tag of [...tags(html, 'a'), ...tags(html, 'img'), ...tags(html, 'script'), ...tags(html, 'link')]) {
    const value = tag.src ?? tag.href
    if (!value) continue
    const url = new URL(value, `${origin}${path}`)
    if (url.origin !== origin) continue
    const target = pages.get(url.pathname)
    if (target) {
      if (url.hash) assert.ok(tags(target, '[a-z][a-z0-9]*').some((element) => element.id === decodeURIComponent(url.hash.slice(1))), `${path}: broken anchor ${value}`)
    } else {
      await access(resolve(dist, `.${url.pathname}`))
    }
  }
  console.log(`SEO verified: ${path}`)
}

const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8')
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url)
assert.deepEqual(locations.sort(), [...pages.keys()].map((path) => `${origin}${path}`).sort())
assert.match(sitemap, /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/)
const robots = await readFile(resolve(dist, 'robots.txt'), 'utf8')
assert.match(robots, /User-agent: \*/)
assert.match(robots, /Allow: \//)
assert.doesNotMatch(robots, /Disallow: \//)
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`))
console.log('Sitemap, robots, metadata, structured data, visible content and local links verified.')
