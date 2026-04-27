import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { HiArrowUpRight, HiBars3, HiXMark } from "react-icons/hi2"
import Button from "./ui/Button"
import ThemeToggle from "./ui/ThemeToggle"

type NavbarProps = {
	theme: "light" | "dark"
	onToggleTheme: () => void
}

const navItems = [
	{ href: "#about", label: "About" },
	{ href: "#skills", label: "Skills" },
	{ href: "#works", label: "Projects" },
	{ href: "#contact", label: "Contact" },
]

const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="fixed inset-x-0 top-0 z-50">
			<div className="section-shell pt-4">
				<div className="surface-card-strong flex items-center justify-between gap-4 px-4 py-3 md:px-6">
					<a href="#about" className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-sm font-bold text-slate-950 shadow-[0_12px_35px_-18px_hsl(var(--glow)/0.9)]">
							BB
						</div>
						<div>
							<p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-muted">Brice Braquin</p>
							<p className="text-xs text-muted">Frontend Engineer</p>
						</div>
					</a>

					<div className="hidden items-center gap-2 rounded-full border border-line/80 bg-panel/70 p-1.5 md:flex">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:bg-panel-strong/80 hover:text-text"
							>
								{item.label}
							</a>
						))}
					</div>

					<div className="flex items-center gap-2">
						<ThemeToggle theme={theme} onToggle={onToggleTheme} />
						<div className="hidden md:block">
							<Button href="#contact" variant="secondary" className="px-4 py-2.5">
								Contact me
								<HiArrowUpRight className="text-base" />
							</Button>
						</div>
						<button
							type="button"
							onClick={() => setIsOpen((currentOpen) => !currentOpen)}
							className="button-ghost p-3 md:hidden"
							aria-label={isOpen ? "Close navigation" : "Open navigation"}
						>
							{isOpen ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
						</button>
					</div>
				</div>

				<AnimatePresence>
					{isOpen ? (
						<motion.div
							className="surface-card mt-3 overflow-hidden md:hidden"
							initial={{ opacity: 0, y: -12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -12 }}
							transition={{ duration: 0.2 }}
						>
							<div className="flex flex-col gap-1 p-3">
								{navItems.map((item) => (
									<a
										key={item.href}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className="rounded-2xl px-4 py-3 text-sm font-medium text-muted transition-colors duration-300 hover:bg-panel-strong/80 hover:text-text"
									>
										{item.label}
									</a>
								))}
								<Button href="#contact" variant="primary" className="mt-2 w-full">
									Contact me
								</Button>
							</div>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</nav>
	)
}

export default Navbar
