import { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
	children: ReactNode
	className?: string
	delay?: number
}

// Calm entrance: fade plus a small lift, once. MotionConfig turns it off for reduced motion.
const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
	<motion.div
		initial={{ opacity: 0, y: 8 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.2 }}
		transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1], delay }}
		className={className}
	>
		{children}
	</motion.div>
)

export default Reveal
