import { useEffect, useState } from "react"
import { About, Contact, Navbar, Skills, Works } from "./components"
import "./index.css"

type Theme = "light" | "dark"

const getInitialTheme = (): Theme => {
	if (typeof window === "undefined") {
		return "dark"
	}

	const storedTheme = window.localStorage.getItem("portfolio-theme")

	if (storedTheme === "light" || storedTheme === "dark") {
		return storedTheme
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function App() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme)

	useEffect(() => {
		document.documentElement.dataset.theme = theme
		window.localStorage.setItem("portfolio-theme", theme)
	}, [theme])

	return (
		<div className="app-shell">
			<div className="pointer-events-none fixed inset-0 -z-10">
				<div className="hero-grid absolute inset-0 opacity-55 [mask-image:radial-gradient(circle_at_top,black,transparent_78%)]" />
				<div className="noise-overlay absolute inset-0" />
				<div className="floating-orb absolute left-[8%] top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
				<div
					className="floating-orb absolute right-[6%] top-[28rem] h-72 w-72 rounded-full bg-accent-strong/10 blur-3xl"
					style={{ animationDelay: "-3s" }}
				/>
			</div>

			<Navbar theme={theme} onToggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))} />
			<main className="pt-24 md:pt-28">
				<About />
				<div id="skills">
					<Skills />
				</div>
				<div id="works">
					<Works />
				</div>
				<Contact />
			</main>
		</div>
	)
}

export default App
