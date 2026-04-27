import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { HiArrowDownRight, HiArrowUpRight, HiSparkles } from "react-icons/hi2"
import img from "../assets/pdpocho.jpeg"
import Button from "./ui/Button"

const About = () => {
	const strengths = [
		"UI architecture",
		"Design systems",
		"Product-minded frontend",
	]

	const profileCards = [
		{
			label: "Current role",
			value: "Bonn Consulting",
			text: "Frontend engineer since April 2024.",
		},
		{
			label: "Flagship product",
			value: "My Annotator",
			text: "200+ active users and paid plans.",
		},
		{
			label: "Core focus",
			value: "React + systems",
			text: "Reusable UI, motion, testing, and performance.",
		},
		{
			label: "Built for",
			value: "Real usage",
			text: "Products that need clarity, speed, and trust.",
		},
	]

	return (
		<section id="about" className="section-shell pb-20 pt-10 sm:pb-24 md:pt-14">
			<div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="space-y-8"
				>
					<div className="space-y-6">
						<div className="eyebrow">
							<HiSparkles className="text-sm text-accent" />
							<span>Frontend engineer. Product mindset. High standards.</span>
						</div>
						<div className="space-y-4">
							<p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted">Brice Braquin</p>
							<h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
								I build modern interfaces that feel sharp, clear, and reliable.
							</h1>
							<p className="max-w-2xl text-lg leading-8 text-muted text-balance">
								I&apos;m a frontend engineer focused on scalable UI, product clarity, and design systems that make complex experiences feel simple. I care about maintainability, user trust, and the small interaction details that raise the quality of a product.
							</p>
						</div>
					</div>

					<div className="flex flex-wrap gap-3">
						<Button href="#works" variant="primary">
							See selected work
							<HiArrowDownRight className="text-base" />
						</Button>
						<Button href="#contact" variant="secondary">
							Get in touch
							<HiArrowUpRight className="text-base" />
						</Button>
					</div>

					<div className="flex flex-wrap gap-3">
						{strengths.map((strength) => (
							<span key={strength} className="pill">
								<span className="h-1.5 w-1.5 rounded-full bg-accent" />
								{strength}
							</span>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 26 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.15 }}
					className="relative lg:self-start"
				>
					<div className="absolute -right-8 top-6 hidden h-24 w-24 rounded-full bg-accent/20 blur-3xl lg:block" />
					<div className="surface-card-strong spotlight-ring relative overflow-hidden p-5 sm:p-6 lg:max-w-[560px]">
						<div className="grid gap-4 sm:grid-cols-[120px_minmax(0,1fr)]">
							<div className="relative mx-auto aspect-square w-24 overflow-hidden rounded-[28px] border border-line/70 bg-panel sm:mx-0 sm:w-28">
								<img src={img} alt="Brice Braquin" className="h-full w-full object-cover" />
								<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
							</div>
							<div className="space-y-3">
								<div className="flex flex-wrap items-center justify-between gap-3">
									<div>
										<p className="font-display text-2xl font-bold">Brice Braquin</p>
										<p className="text-sm text-muted">Frontend engineer building thoughtful, high-quality digital products.</p>
									</div>
									<div className="pill">
										<span className="h-2 w-2 rounded-full bg-emerald-400" />
										Currently at Bonn Consulting
									</div>
								</div>

								<div className="grid gap-3 sm:grid-cols-2">
									{profileCards.map((card) => (
										<div key={card.label} className="surface-card rounded-[22px] p-4">
											<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">{card.label}</p>
											<p className="mt-2 font-display text-xl font-bold">{card.value}</p>
											<p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
										</div>
									))}
								</div>

								<div className="surface-card rounded-[22px] p-4">
									<div className="flex flex-wrap items-center justify-between gap-3">
										<p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">Primary stack</p>
										<div className="flex flex-wrap gap-2">
											<span className="pill">React</span>
											<span className="pill">Next.js</span>
											<span className="pill">TypeScript</span>
										</div>
									</div>
								</div>

								<div className="flex flex-wrap gap-3">
									<a
										href="https://github.com/BBocho8/"
										target="_blank"
										rel="noreferrer"
										className="button-secondary px-4 py-3"
									>
										<FaGithub className="text-base" />
										GitHub
									</a>
									<a
										href="https://www.linkedin.com/in/bricebraquin/"
										target="_blank"
										rel="noreferrer"
										className="button-secondary px-4 py-3"
									>
										<FaLinkedinIn className="text-base" />
										LinkedIn
									</a>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default About;
