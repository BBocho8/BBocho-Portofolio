import { About, Contact, Navbar, Skills, Works } from "./components"
import "./index.css"

function App() {
	return (
		<>
			<Navbar />
			<div className="mt-[74px] nav:mt-[90px] nav2:mt-[62px]">
				<About />
				<Skills />
				<Works />
				<Contact />
			</div>
		</>
	)
}

export default App
