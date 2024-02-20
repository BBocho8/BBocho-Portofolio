import { About, Contact, Footer, Navbar, Works } from "./components"
import "./index.css"

function App() {
	return (
		<>
			<Navbar />
			<div className="mt-[74px] nav:mt-[90px] nav2:mt-[62px]">
				<About />
				<Works />
				<Contact />
			</div>

			<Footer />
		</>
	)
}

export default App
