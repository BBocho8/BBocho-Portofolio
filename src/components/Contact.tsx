import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import { HiArrowRight, HiEnvelope } from "react-icons/hi2"
import Button from "./ui/Button"
import Section from "./ui/Section"

const Contact = () => {
	return (
		<Section
			id="contact"
			title="Let&apos;s talk about building better digital products"
			eyebrow="Get In Touch"
			description="I&apos;m currently working at Bonn Consulting, and I&apos;m always happy to connect around strong frontend work, product quality, and interesting collaborations."
		>
			<motion.div
				className="surface-card-strong overflow-hidden p-6 sm:p-8"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.45 }}
			>
				<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
					<div className="space-y-5">
						<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
							<HiEnvelope className="text-2xl" />
						</div>
						<div>
							<h3 className="font-display text-3xl font-bold sm:text-4xl">Currently at Bonn Consulting, always open to good conversations.</h3>
							<p className="mt-3 max-w-2xl text-base leading-7 text-muted">
								If you want to talk about a role, a product challenge, or a collaboration where frontend quality really matters, feel free to reach out.
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<a href="https://github.com/BBocho8/" target="_blank" rel="noreferrer" className="button-secondary px-4 py-3">
								<FaGithub />
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/bricebraquin/"
								target="_blank"
								rel="noreferrer"
								className="button-secondary px-4 py-3"
							>
								<FaLinkedinIn />
								LinkedIn
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-3 lg:items-end">
						<Button href="mailto:bricebraquin@live.fr" variant="primary" className="w-full sm:w-auto">
							Email me
							<HiArrowRight className="text-base" />
						</Button>
						<p className="text-sm font-medium text-text">bricebraquin@live.fr</p>
						<p className="text-sm text-muted">Typically replies within 24 hours on business days.</p>
					</div>
				</div>
			</motion.div>
		</Section>
	)
}

export default Contact
