import { motion } from "framer-motion"
import myAnnotatorImg from "../assets/my-annotator.png"
import img2 from "../assets/wk-planner.png"
import img3 from "../assets/sge-replay.png"
import Button from "./ui/Button"
import Section from "./ui/Section"

type ProjectLink = {
	href: string
	label: string
}

type FeaturedProject = {
	title: string
	summary: string
	stack: string[]
	image: string
	insight: string
	highlights?: string[]
	links: ProjectLink[]
}

const featuredProjects: FeaturedProject[] = [
	{
		title: "My Annotator",
		summary:
			"A web application and Chrome extension that lets users annotate YouTube videos with drawing tools, highlights, and interactive coaching elements. It is my main product, with nearly 200 active users and paying customers already on the platform.",
		stack: ["SaaS", "Chrome Extension", "Stripe", "Accessibility", "SEO"],
		image: myAnnotatorImg,
		insight: "Flagship product",
		highlights: ["200+ active users", "Paid plans", "Chrome Web Store launch"],
		links: [
			{ href: "https://my-annotator.com", label: "Open app" },
			{
				href: "https://chromewebstore.google.com/detail/my-annotator/gpdiihikldjmklohemgleminoaijahob?authuser=0&hl=fr&pli=1",
				label: "Chrome extension",
			},
		],
	},
	{
		title: "SGE Replay",
		summary:
			"A mobile-first replay hub that gives players and staff quick access to results, highlights, and team updates.",
		stack: ["React", "Contentful", "Tailwind", "Vite"],
		image: img3,
		insight: "Mobile-first team platform",
		links: [
			{ href: "https://sge-replay.netlify.app", label: "View live" },
			{ href: "https://github.com/BBocho8/SGE-Replay", label: "View code" },
		],
	},
	{
		title: "Workout Planner",
		summary:
			"A fitness planning app designed to make exercise discovery and routine building feel structured, practical, and personal.",
		stack: ["React", "Firebase", "Tailwind", "MUI", "Vite"],
		image: img2,
		insight: "Fitness product UX",
		links: [
			{ href: "https://wk-planner.netlify.app", label: "View live" },
			{ href: "https://github.com/BBocho8/WK-Planner-App", label: "View code" },
		],
	},
]

const Works = () => {
	return (
		<Section
			title="Selected projects that show range, product thinking, and execution"
			eyebrow="Selected Work"
			description="A tight project selection works best here: one flagship product with real traction, then a couple of supporting projects that show range, execution, and product thinking."
		>
			<div className="grid gap-5">
				{featuredProjects.map((project, index) => (
					<motion.article
						key={project.title}
						className="surface-card-strong spotlight-ring overflow-hidden p-5 sm:p-6"
						initial={{ opacity: 0, y: 22 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.45, delay: index * 0.07 }}
					>
						<div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
							<div className={index % 2 === 1 ? "order-2 lg:order-1" : "order-2"}>
								<div className="flex flex-wrap items-center gap-3">
									<span className="eyebrow">{project.insight}</span>
								</div>
								<h3 className="mt-5 font-display text-3xl font-bold">{project.title}</h3>
								<p className="mt-4 max-w-2xl text-base leading-7 text-muted">{project.summary}</p>
								{project.highlights?.length ? (
									<div className="mt-5 flex flex-wrap gap-2">
										{project.highlights.map((highlight) => (
											<span key={highlight} className="pill">
												<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
												{highlight}
											</span>
										))}
									</div>
								) : null}
								<div className="mt-5 flex flex-wrap gap-2">
									{project.stack.map((item) => (
										<span key={item} className="tag">
											{item}
										</span>
									))}
								</div>
								<div className="mt-6 flex flex-wrap gap-3">
									{project.links.map((link, linkIndex) => (
										<Button
											key={link.href}
											href={link.href}
											external
											variant={linkIndex === 0 ? "primary" : "secondary"}
										>
											{link.label}
										</Button>
									))}
								</div>
							</div>

							<div className={index % 2 === 1 ? "order-1 lg:order-2" : "order-1"}>
								<div className="overflow-hidden rounded-[28px] border border-line/70 bg-panel shadow-card">
									<img
										src={project.image}
										alt={project.title}
										className="h-full max-h-[320px] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
									/>
								</div>
							</div>
						</div>
					</motion.article>
				))}
			</div>
		</Section>
	)
}

export default Works
