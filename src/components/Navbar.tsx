import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 navBgColor">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center h-16 sm:h-[74px] nav:h-[90px] nav2:h-[62px]">
					{/* Logo */}
					<div className="flex items-center">
						<a href="#about" className="text-lg sm:text-xl font-bold gradient-text">
							Brice Braquin
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
						<a href="#about" className="navLink text-sm lg:text-base">
							About
						</a>
						<a href="#skills" className="navLink text-sm lg:text-base">
							Skills
						</a>
						<a href="#works" className="navLink text-sm lg:text-base">
							Projects
						</a>
						<a href="#contact" className="navLink text-sm lg:text-base">
							Contact
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-white hover:text-primary transition-colors duration-300 p-2"
						>
							{isOpen ? <FaTimes size={20} className="sm:w-6 sm:h-6" /> : <FaBars size={20} className="sm:w-6 sm:h-6" />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden">
						<div className="px-3 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 mx-2">
							<a
								href="#about"
								className="navLink block px-3 py-3 rounded-md text-base font-medium"
								onClick={() => setIsOpen(false)}
							>
								About
							</a>
							<a
								href="#skills"
								className="navLink block px-3 py-3 rounded-md text-base font-medium"
								onClick={() => setIsOpen(false)}
							>
								Skills
							</a>
							<a
								href="#works"
								className="navLink block px-3 py-3 rounded-md text-base font-medium"
								onClick={() => setIsOpen(false)}
							>
								Projects
							</a>
							<a
								href="#contact"
								className="navLink block px-3 py-3 rounded-md text-base font-medium"
								onClick={() => setIsOpen(false)}
							>
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
