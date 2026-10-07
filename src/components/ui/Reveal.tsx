import { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
	children: ReactNode
	className?: string
	delay?: number
	as?: "div" | "li"
}

// Keep prerendered content visible without JavaScript; enhance with a small lift.
const Reveal = ({ children, className, delay = 0, as = "div" }: RevealProps) => {
	const Component = as === "li" ? motion.li : motion.div
	return (
		<Component
			initial={{ y: 8 }}
			whileInView={{ y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1], delay }}
			className={className}
		>
			{children}
		</Component>
	)
}

export default Reveal
