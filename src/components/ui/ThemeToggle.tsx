import { motion } from "framer-motion"
import { HiMoon, HiSun } from "react-icons/hi2"

type ThemeToggleProps = {
	onToggle: () => void
	theme: "light" | "dark"
}

const ThemeToggle = ({ onToggle, theme }: ThemeToggleProps) => {
	return (
		<motion.button
			type="button"
			onClick={onToggle}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
			className="button-secondary h-11 w-11 p-0"
			whileTap={{ scale: 0.94 }}
		>
			{theme === "dark" ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
		</motion.button>
	)
}

export default ThemeToggle
