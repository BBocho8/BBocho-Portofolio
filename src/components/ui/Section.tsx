import { ReactNode } from "react"
import { motion } from "framer-motion"

type SectionProps = {
	children: ReactNode
	description: string
	eyebrow: string
	id?: string
	title: string
}

const Section = ({ children, description, eyebrow, id, title }: SectionProps) => {
	return (
		<section id={id} className="section-shell py-12 sm:py-14 lg:py-16">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ duration: 0.45 }}
				className="mb-8 max-w-3xl space-y-4 sm:mb-10"
			>
				<div className="eyebrow">{eyebrow}</div>
				<h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
				<p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
			</motion.div>
			{children}
		</section>
	)
}

export default Section
