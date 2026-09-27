import { useEffect, useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"

type NavbarProps = {
	// Section links point at the home page when rendered on another page
	base?: string
}

const Navbar = ({ base = "" }: NavbarProps) => {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const links = [
		{ href: `${base}#work`, label: "Work" },
		{ href: `${base}#about`, label: "About" },
		{ href: `${base}#contact`, label: "Contact" },
	]

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-200 ease-brand ${
				scrolled || open ? "bg-navy-deep/85 backdrop-blur-[16px]" : "bg-transparent"
			}`}
		>
			<nav className="container-page flex h-[72px] items-center justify-between border-b border-white/[0.08] lg:h-[88px]">
				<a href={base || "#top"} className="flex items-baseline gap-3">
					<span className="font-display text-lg font-medium tracking-[-0.01em] sm:text-xl">Brice Braquin</span>
					<span className="mono hidden text-[11px] text-fog-faint sm:inline">Full-stack engineer</span>
				</a>

				<div className="hidden items-center gap-9 text-[15px] text-fog md:flex">
					{links.map((link) => (
						<a key={link.href} href={link.href} className="transition-colors duration-120 hover:text-white">
							{link.label}
						</a>
					))}
					<a href={`${base}#contact`} className="btn-primary h-11 px-5">
						Get in touch
					</a>
				</div>

				<button
					type="button"
					className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 md:hidden"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					aria-controls="mobile-menu"
					onClick={() => setOpen((value) => !value)}
				>
					{open ? <LuX size={20} /> : <LuMenu size={20} />}
				</button>
			</nav>

			{open && (
				<div id="mobile-menu" className="container-page flex flex-col gap-1 pb-6 pt-3 md:hidden">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setOpen(false)}
							className="rounded-md px-2 py-3 font-display text-2xl font-medium text-white hover:bg-white/5"
						>
							{link.label}
						</a>
					))}
					<a href={`${base}#contact`} onClick={() => setOpen(false)} className="btn-primary mt-3">
						Get in touch
					</a>
				</div>
			)}
		</header>
	)
}

export default Navbar
