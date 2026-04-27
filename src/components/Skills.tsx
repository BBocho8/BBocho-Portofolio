import { motion } from "framer-motion"
import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa6"
import {
	SiBun,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiKirby,
	SiFramer,
	SiGraphql,
	SiMui,
	SiNextdotjs,
	SiPhp,
	SiPlaywright,
	SiPostgresql,
	SiPrisma,
	SiRedux,
	SiSupabase,
	SiTailwindcss,
	SiTestinglibrary,
	SiStorybook,
	SiTypescript,
	SiVercel,
	SiMongodb,
} from "react-icons/si"
import { HiSparkles } from "react-icons/hi2"
import Section from "./ui/Section"

const skillGroups = [
	{
		title: "Frontend Foundations",
		description: "The core technologies I use to build modern, production-ready interfaces from architecture to delivery.",
		icon: <FaReact className="text-2xl text-accent" />,
		skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Vite", "PHP", "Kirby"],
	},
	{
		title: "UI Systems & Experience",
		description: "Design systems, accessibility, and interaction work that help products feel cleaner, faster, and easier to trust.",
		icon: <FaNodeJs className="text-2xl text-accent" />,
		skills: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "Material UI", "shadcn/ui", "Design Systems", "Design Tokens", "Accessibility", "Framer Motion"],
	},
	{
		title: "State, Data & Quality",
		description: "The libraries, patterns, and testing tools I rely on when products need to scale without getting fragile.",
		icon: <FaDocker className="text-2xl text-accent" />,
		skills: ["React Query", "Redux", "Zustand", "Context API", "REST APIs", "GraphQL", "Playwright", "Cypress", "Jest", "React Testing Library"],
	},
	{
		title: "Backend & Shipping",
		description: "Enough backend and platform depth to build complete features, ship them well, and support real product usage.",
		icon: <FaGitAlt className="text-2xl text-accent" />,
		skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Firebase", "Supabase", "Stripe", "Authentication", "Docker"],
	},
]

const marqueeSkills = [
	"SEO",
	"Structured Data",
	"Sitemaps",
	"Core Web Vitals",
	"Chrome Extensions",
	"YouTube Integrations",
	"Privacy-first Product Design",
	"GDPR Compliance",
	"File Uploads",
	"Role-based Access",
	"CI/CD",
	"VPS",
	"Dokploy",
	"pnpm",
	"npm",
	"Biome",
	"Bun",
]

const Skills = () => {
	return (
		<Section
			title="Capabilities shaped by product work, not just tutorials"
			eyebrow="Capabilities"
			description="My strongest value is frontend, but I&apos;m comfortable across the product stack. I like owning the UI deeply while still being able to handle data, testing, payments, SEO, and deployment when the project needs it."
		>
			<div className="grid gap-5 lg:grid-cols-2">
				{skillGroups.map((group, index) => (
					<motion.article
						key={group.title}
						className="surface-card spotlight-ring p-6"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.45, delay: index * 0.08 }}
					>
						<div className="flex items-center justify-between gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft">
								{group.icon}
							</div>
							<div className="flex gap-2 text-accent">
								{index === 0 ? (
									<>
										<FaReact />
										<SiNextdotjs />
										<SiTypescript />
									</>
								) : null}
								{index === 1 ? (
									<>
										<SiTailwindcss />
										<SiMui />
										<HiSparkles />
									</>
								) : null}
								{index === 2 ? (
									<>
										<SiRedux />
										<SiGraphql />
										<SiPlaywright />
									</>
								) : null}
								{index === 3 ? (
									<>
										<SiExpress />
										<SiPrisma />
										<SiPostgresql />
									</>
								) : null}
							</div>
						</div>
						<h3 className="mt-6 font-display text-2xl font-bold">{group.title}</h3>
						<p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{group.skills.map((skill) => (
								<span key={skill} className="tag">
									{skill}
								</span>
							))}
						</div>
					</motion.article>
				))}
			</div>

			<div className="surface-card mt-6 overflow-hidden p-4 sm:p-5">
				<div className="mb-4 flex items-center justify-between gap-3">
					<div>
						<p className="font-display text-xl font-bold">Additional toolkit</p>
						<p className="text-sm text-muted">The supporting tools and product concerns I regularly work with beyond the core frontend stack.</p>
					</div>
					<div className="hidden gap-2 text-accent sm:flex">
						<SiDocker />
						<FaGitAlt />
						<SiGraphql />
						<SiFirebase />
						<SiSupabase />
						<SiMongodb />
						<SiPostgresql />
						<SiFramer />
						<SiPlaywright />
						<SiTestinglibrary />
						<SiStorybook />
						<SiPhp />
						<SiKirby />
						<SiVercel />
						<HiSparkles />
						<SiBun />
					</div>
				</div>
				<div className="relative overflow-hidden">
					<div className="marquee-track flex min-w-max gap-3">
						{[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
							<span key={`${skill}-${index}`} className="tag whitespace-nowrap px-4 py-2">
								{skill}
							</span>
						))}
					</div>
					<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-panel to-transparent" />
					<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-panel to-transparent" />
				</div>
			</div>
		</Section>
	)
}

export default Skills
