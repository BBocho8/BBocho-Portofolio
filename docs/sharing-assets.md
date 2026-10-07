# Portfolio sharing assets

Created on 2026-10-07 using the built-in imagegen tool.

Five generated compositions use the portfolio's navy/mint palette and existing photographic or product references. Final JPEGs are 1200 × 630, exported at quality 88, and stored in public/social/.

| Page | Asset | Reference |
| --- | --- | --- |
| / | public/social/portfolio-v1.jpg | src/assets/hero-striker.webp |
| /work/my-annotator/ | public/social/my-annotator-v1.jpg | src/assets/annotator-video.webp |
| /work/highlights/ | public/social/highlights-v1.jpg | src/assets/highlights-clips.webp |
| /work/qivoa/ | public/social/qivoa-v1.jpg | src/assets/qivoa.webp |
| /work/clubsitekit/ | public/social/clubsitekit-v1.jpg | src/assets/clubsitekit.webp |

The HTML entries declare the images in Open Graph and Twitter large-image metadata, with matching image descriptions and dimensions. Prerendering associates the same images with the page's JSON-LD. The homepage author image continues to represent the author, while each case study includes its sharing card and product image.

Versioned filenames give each image a new URL. For a future replacement, increment the version and update both metadata references. After deployment, inspect the public page and image URLs; platform preview caches may need refreshing.

The SEO build check verifies separate images for all pages, actual JPEG signatures and dimensions, file size, matching metadata, and JSON-LD image references. Protocol reference: https://ogp.me/.

## Generation prompts

### home

Reference: src/assets/hero-striker.webp

```text
Use case: ads-marketing.
Asset type: a finished Open Graph social sharing card, landscape aspect ratio 1200:630 (1.905:1), designed to be read at small thumbnail sizes.
Visual system: Brice Braquin's portfolio uses deep navy #1F2739, mint #72FFC9, warm white #F4F4F4, and muted cool gray #C9D0DC. Use clean Outfit-like geometric sans-serif headlines and Inter-like supporting text. Editorial, restrained, precise. Flat straight-on composition; no angled devices, perspective mockups, busy textures or generic code symbols.
Layout: generous approximately 60px safe margins on a 1200px-wide card. Text in the left half with clear hierarchy, reference photograph or screenshot framed in the right half. A small mint eyebrow at the upper left and a subtle thin footer rule. Keep all new text perfectly sharp, spelled exactly, and away from edges. Only use the exact display text provided. Do not add logos, icons, metrics, claims or URLs besides the provided text.
Important image invariants: reuse the provided reference image as photographic/screenshot content, preserve the people, identity, real UI, framing content, colors and labels. Treat it as an embedded real image, not a prompt to invent a replacement. No fabricated interfaces or altered screenshot contents. Cropping to fit its card window is acceptable.
Primary request: Create the homepage sharing card for Brice Braquin's engineering portfolio. Reference image 1 is a real photo of Brice, jersey number 11, playing football for SVE Mendig. Preserve his actual identity, pose, uniform and environment; do not create a new portrait. Embed the photo in a tall rounded rectangle on the right, approximately 42% of the card. The navy left area should feel like the site's existing homepage. A small, quiet mint underline under the main name is acceptable.
Exact display text, hierarchy:
Eyebrow: "PORTFOLIO"
Large name on two lines: "Brice" / "Braquin"
Role, mint: "Full-stack engineer"
Supporting text, gray on two lines: "Clear interfaces." / "Whole products."
Footer left: "Koblenz, Germany"
Footer right: "bbocho.com"
Export intent: one opaque complete sharing image at 1200 × 630 if possible, landscape.
```

### my-annotator

Reference: src/assets/annotator-video.webp

```text
Use case: ads-marketing.
Asset type: a finished Open Graph social sharing card, landscape aspect ratio 1200:630 (1.905:1), designed to be read at small thumbnail sizes.
Visual system: Brice Braquin's portfolio uses deep navy #1F2739, mint #72FFC9, warm white #F4F4F4, and muted cool gray #C9D0DC. Use clean Outfit-like geometric sans-serif headlines and Inter-like supporting text. Editorial, restrained, precise. Flat straight-on composition; no angled devices, perspective mockups, busy textures or generic code symbols.
Layout: generous approximately 60px safe margins on a 1200px-wide card. Text in the left half with clear hierarchy, reference photograph or screenshot framed in the right half. A small mint eyebrow at the upper left and a subtle thin footer rule. Keep all new text perfectly sharp, spelled exactly, and away from edges. Only use the exact display text provided. Do not add logos, icons, metrics, claims or URLs besides the provided text.
Important image invariants: reuse the provided reference image as photographic/screenshot content, preserve the people, identity, real UI, framing content, colors and labels. Treat it as an embedded real image, not a prompt to invent a replacement. No fabricated interfaces or altered screenshot contents. Cropping to fit its card window is acceptable.
Primary request: Create a project case-study sharing card for My Annotator, built by Brice Braquin. Reference image 1 is the real My Annotator football telestration screenshot. Preserve and embed this exact screenshot as a large rounded rectangular panel occupying the right half, wide enough that the football video and annotation arrows are recognizable at thumbnail size. Do not redraw players, annotations or interface controls. Place the screenshot panel slightly lower than the eyebrow so the text and screenshot align around the center.
Exact display text, hierarchy:
Eyebrow: "CASE STUDY"
Large project name on two lines: "My" / "Annotator"
Subtitle, mint on two lines: "Football video" / "analysis."
Supporting text, gray on two lines: "From side project" / "to paid product."
Footer left: "Built by Brice Braquin"
Footer right: "bbocho.com"
Export intent: one opaque complete sharing image at 1200 × 630 if possible, landscape.
```

### highlights

Reference: src/assets/highlights-clips.webp

```text
Use case: ads-marketing.
Asset type: a finished Open Graph social sharing card, landscape aspect ratio 1200:630 (1.905:1), designed to be read at small thumbnail sizes.
Visual system: Brice Braquin's portfolio uses deep navy #1F2739, mint #72FFC9, warm white #F4F4F4, and muted cool gray #C9D0DC. Use clean Outfit-like geometric sans-serif headlines and Inter-like supporting text. Editorial, restrained, precise. Flat straight-on composition; no angled devices, perspective mockups, busy textures or generic code symbols.
Layout: generous approximately 60px safe margins on a 1200px-wide card. Text in the left half with clear hierarchy, reference photograph or screenshot framed in the right half. A small mint eyebrow at the upper left and a subtle thin footer rule. Keep all new text perfectly sharp, spelled exactly, and away from edges. Only use the exact display text provided. Do not add logos, icons, metrics, claims or URLs besides the provided text.
Important image invariants: reuse the provided reference image as photographic/screenshot content, preserve the people, identity, real UI, framing content, colors and labels. Treat it as an embedded real image, not a prompt to invent a replacement. No fabricated interfaces or altered screenshot contents. Cropping to fit its card window is acceptable.
Primary request: Create a project case-study sharing card for Highlights, built by Brice Braquin. Reference image 1 is the real Highlights browser application screenshot. Preserve and embed this exact screenshot inside a large rounded rectangular panel occupying the right half. Its football video, clip review list, timeline and orange controls should remain recognizable. Do not invent, redraw or change the UI. Place the screenshot panel slightly lower than the eyebrow so the text and screenshot align around the center. Keep the "Highlights" headline entirely in the left half without touching the screenshot.
Exact display text, hierarchy:
Eyebrow: "CASE STUDY"
Large project name: "Highlights"
Subtitle, mint on two lines: "Full match in." / "Highlight reel out."
Supporting text, gray on two lines: "Cut in the browser." / "No upload."
Footer left: "Built by Brice Braquin"
Footer right: "bbocho.com"
Export intent: one opaque complete sharing image at 1200 × 630 if possible, landscape.
```

## Highlights cleanup prompt

```text
Edit the attached finished Highlights social sharing card. There is one unintended black diamond or chevron sticking out from the left edge of the screenshot panel, immediately to the right of the end of the large word "Highlights", roughly around 40% of image width and 35% of image height. Remove only that small black shape and fill its area with the same smooth navy background as its surroundings. Keep every other pixel/content as close to the original as possible: preserve the existing layout, navy/mint colors, all headline text exactly, the complete reference screenshot, screen frame, footer text and aspect ratio. Do not add anything. This is a tiny artifact cleanup, not a redesign.
```

## New case study sharing cards

Qivoa and ClubSiteKit also use public/social/my-annotator-v1.jpg as a style reference. The product screenshots remain the original WebP files in the case study pages; the generated compositions are used only as sharing cards.

### qivoa

Product reference: src/assets/qivoa.webp

```text
Create one finished Open Graph case study sharing card, landscape 1200:630 (1.905:1). Use reference image 1 ONLY as the design-system reference: deep navy #1F2739, mint #72FFC9, white #F4F4F4, fog gray #C9D0DC, bold clean Outfit-like geometric sans-serif headlines, restrained straight-on editorial layout, rounded screenshot window on the right, mint eyebrow at upper left, thin footer rule near the bottom, generous 55-60px safe margins. Do not reuse the football image or any My Annotator text from reference 1. Reference image 2 is the actual product screenshot to embed inside the right-side window. Preserve the existing screenshot contents; do not invent product interfaces, numbers or claims. Cropping the screenshot is fine. Keep all specified text legible and away from the screenshot. Only include the exact display text below, plus existing text within the screenshot. No icons, mockup devices, extra branding, ornament or invented metrics. Footer exactly "Built by Brice Braquin" on the left and "bbocho.com" on the right. Opaque background.
Project Qivoa. Exact text:
Eyebrow: "CASE STUDY"
Large white headline: "Qivoa"
Mint subtitle on two lines: "Know before" / "you buy."
Gray supporting text on two lines: "Facts, risks and" / "market evidence."
Use the product screenshot's illustrative deal report as the right-side crop, showing its dark green recommendation panel and price-evidence table while preserving its illustrative/unverified labels. Use a 44% text / 56% screenshot split.
```

### clubsitekit

Product reference: src/assets/clubsitekit.webp

```text
Create one finished Open Graph case study sharing card, landscape 1200:630 (1.905:1). Use reference image 1 ONLY as the design-system reference: deep navy #1F2739, mint #72FFC9, white #F4F4F4, fog gray #C9D0DC, bold clean Outfit-like geometric sans-serif headlines, restrained straight-on editorial layout, rounded screenshot window on the right, mint eyebrow at upper left, thin footer rule near the bottom, generous 55-60px safe margins. Do not reuse the football image or any My Annotator text from reference 1. Reference image 2 is the actual product screenshot to embed inside the right-side window. Preserve the existing screenshot contents; do not invent product interfaces, numbers or claims. Cropping the screenshot is fine. Keep all specified text legible and away from the screenshot. Only include the exact display text below, plus existing text within the screenshot. No icons, mockup devices, extra branding, ornament or invented metrics. Footer exactly "Built by Brice Braquin" on the left and "bbocho.com" on the right. Opaque background.
Project ClubSiteKit. Exact text:
Eyebrow: "CASE STUDY"
Large white headline on two lines: "ClubSite" / "Kit"
Mint subtitle on two lines: "Websites for" / "football clubs."
Gray supporting text on two lines: "From my club" / "to a product."
Use the ClubSiteKit screenshot in the right-side window, with its green club-site visual and SVE Mendig demo visible. Use a 45% text / 55% screenshot split.
```
