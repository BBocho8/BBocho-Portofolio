import { About, Contact, Navbar, Skills, Works } from "./components"
import "./index.css"

function App() {
	return (
		<>
			<Navbar />
			<div className="pt-16 sm:pt-[74px] nav:pt-[90px] nav2:pt-[62px]">
				<About />
				<div id="skills">
					<Skills />
				</div>
				<div id="works">
					<Works />
				</div>
				<Contact />
			</div>
		</>
	)
}

export default App
