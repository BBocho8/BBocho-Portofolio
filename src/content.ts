export const contact = {
	email: "bricebraquin@live.fr",
	github: "https://github.com/BBocho8/",
	linkedin: "https://www.linkedin.com/in/bricebraquin/",
}

export const links = {
	myAnnotator: "https://my-annotator.com",
	myAnnotatorExtension: "https://chromewebstore.google.com/detail/my-annotator/gpdiihikldjmklohemgleminoaijahob",
	highlights: "https://highlights.qivoa.app",
	qivoa: "https://qivoa.app",
	clubSiteKit: "https://clubsitekit.com",
	sveTemplate: "https://sve.clubsitekit.com",
	myAnnotatorCase: "/work/my-annotator/",
	highlightsCase: "/work/highlights/",
	qivoaCase: "/work/qivoa/",
	clubSiteKitCase: "/work/clubsitekit/",
}

// Measured 2026-10-07: the app's own export on my match file, two runs (2:05 and 2:06), the slower one quoted
export const highlightsBenchmark = {
	time: "2:06",
	clips: 65,
	reel: "14:26",
	inputSize: "4.3 GB",
	input: "4.3 GB · 1080p H.264 · 2:03:24",
	output: "1.1 GB · 1080p H.264 + AAC",
	machine: "MacBook Pro M4 Pro · Chrome",
}

// Counted from the visitor's clock, so the copy never goes stale
const monthsSince = (year: number, month: number, now: Date) => {
	return (now.getUTCFullYear() - year) * 12 + now.getUTCMonth() + 1 - month
}

// My Annotator's first commit: February 2025
export const getMyAnnotatorMonths = (now: Date) => monthsSince(2025, 2, now)

export const getStats = (now: Date) => [
	{ value: "300+", label: "active users on My Annotator" },
	{ value: highlightsBenchmark.time, label: `to cut a ${highlightsBenchmark.inputSize} match into a reel, in the browser` },
	{ value: String(getMyAnnotatorMonths(now)), label: "months building and running My Annotator, solo" },
	{ value: "5", label: "products designed, built and hosted myself since 2025" },
]

export const archive = [
	{
		year: "2024",
		name: "SGE Replay",
		summary: "Mobile-first replay hub for my team: results, highlights, updates",
		stack: "React · Contentful",
		href: "https://sge-replay.netlify.app",
	},
	{
		year: "2023",
		name: "Workout Planner",
		summary: "Exercise discovery and routine building",
		stack: "React · Firebase",
		href: "https://wk-planner.netlify.app",
	},
]

export const toolkit = [
	{ group: "Interface", items: ["React", "Next.js", "TypeScript", "Tailwind", "Design systems", "Playwright"] },
	{ group: "Backend and ops", items: ["Node", "Hono", "Postgres", "Prisma", "Payload CMS", "Stripe", "Docker", "Dokploy"] },
	{ group: "Exploring", items: ["WebCodecs", "Expo", "LLM structured outputs", "Computer vision"], highlight: true },
]

export const about = [
	{ label: "Club", value: "SVE Mendig · striker, #11" },
	{ label: "Roots", value: "Paris, France → Koblenz" },
	{ label: "Languages", value: "French · Spanish · German · English" },
	{ label: "Day job", value: "Bonn Consulting, since April 2024" },
]
