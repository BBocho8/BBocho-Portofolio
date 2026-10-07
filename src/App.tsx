import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Toolkit from "./components/Toolkit"
import Work from "./components/Work"

function App() {
	return (
		<>
			<a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-mint focus:px-4 focus:py-2 focus:text-navy-deep">
				Skip to work
			</a>
			<Navbar />
			<main>
				<Hero />
				<Work />
				<Toolkit />
				<About />
				<Contact />
			</main>
		</>
	)
}

export default App
