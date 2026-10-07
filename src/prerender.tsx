import { renderToString } from "react-dom/server"
import App from "./App"
import Page from "./Page"
import MyAnnotatorCase from "./pages/MyAnnotatorCase"
import HighlightsCase from "./pages/HighlightsCase"
import { contact } from "./content"
import portrait from "./assets/hero-striker.webp"
import annotatorImage from "./assets/annotator.webp"
import highlightsImage from "./assets/highlights-clips.webp"

// These are the same components and image imports used by the browser entries.
// Vite gives their assets the same hashed URLs in both builds.
export const routes = [
	{ path: "/", file: "index.html", component: App, image: portrait, name: "Brice Braquin" },
	{ path: "/work/my-annotator/", file: "work/my-annotator/index.html", component: MyAnnotatorCase, image: annotatorImage, name: "My Annotator" },
	{ path: "/work/highlights/", file: "work/highlights/index.html", component: HighlightsCase, image: highlightsImage, name: "Highlights" },
]

type Metadata = { title: string; description: string; canonical: string }

export const render = (path: string, renderedAt: string, metadata: Metadata) => {
	const route = routes.find((page) => page.path === path)
	if (!route) throw new Error(`Unknown portfolio route: ${path}`)

	const Component = route.component
	const origin = new URL(metadata.canonical).origin
	const home = `${origin}/`
	const personId = `${home}#brice-braquin`
	const websiteId = `${home}#website`
	const pageId = `${metadata.canonical}#webpage`
	const isHome = path === "/"
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": personId,
				name: "Brice Braquin",
				url: home,
				jobTitle: "Full-stack engineer",
				description: "Full-stack engineer based in Koblenz, Germany. I design, build and deploy complete products.",
				image: new URL(portrait, origin).href,
				homeLocation: { "@type": "Place", name: "Koblenz, Germany" },
				sameAs: [contact.github, contact.linkedin],
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: home,
				name: "Brice Braquin",
				alternateName: "BBocho",
				inLanguage: "en",
				publisher: { "@id": personId },
			},
			{
				"@type": isHome ? "ProfilePage" : "WebPage",
				"@id": pageId,
				url: metadata.canonical,
				name: metadata.title,
				description: metadata.description,
				inLanguage: "en",
				isPartOf: { "@id": websiteId },
				mainEntity: { "@id": isHome ? personId : `${metadata.canonical}#article` },
				...(!isHome && { breadcrumb: { "@id": `${metadata.canonical}#breadcrumbs` } }),
			},
			...(!isHome ? [
				{
					"@type": "Article",
					"@id": `${metadata.canonical}#article`,
					headline: `${route.name} case study`,
					description: metadata.description,
					url: metadata.canonical,
					image: new URL(route.image, origin).href,
					inLanguage: "en",
					author: { "@id": personId },
					mainEntityOfPage: { "@id": pageId },
				},
				{
					"@type": "BreadcrumbList",
					"@id": `${metadata.canonical}#breadcrumbs`,
					itemListElement: [
						{ "@type": "ListItem", position: 1, name: "All work", item: home },
						{ "@type": "ListItem", position: 2, name: route.name, item: metadata.canonical },
					],
				},
			] : []),
		],
	}

	return {
		html: renderToString(<Page renderedAt={renderedAt}><Component /></Page>),
		structuredData,
		image: route.image,
	}
}
