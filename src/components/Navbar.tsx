const Navbar = () => {
	return (
		<div className="flex flex-col py-3 gap-y-2 nav2:gap-y-0 nav2:flex-row nav2:justify-between nav2:items-center w-full nav2:px-16 nav2:py-4 border-b border-b-secondary">
			<div>
				<p className="text-sm nav:text-lg nav2:text-xl nav2:font-semibold text-white tracking-wider font-lato text-center">
					Brice Braquin.
				</p>
			</div>
			<div className="flex justify-center items-center gap-x-8 font-lato">
				<a
					href="#about"
					className="font-medium text-white text-sm nav:text-lg link-accent"
				>
					About
				</a>
				<a
					href="#works"
					className=" font-medium text-white text-sm nav:text-lg link-accent"
				>
					Works
				</a>
				<a
					href="#contact"
					className=" font-medium text-white text-sm nav:text-lg link-accent"
				>
					Contact
				</a>
			</div>
		</div>
	)
}
export default Navbar
