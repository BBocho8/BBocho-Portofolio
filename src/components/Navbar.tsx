const Navbar = () => {
	return (
		<div className="navBgColor z-50 flex flex-col py-3 gap-y-2 nav2:gap-y-0 nav2:flex-row nav2:justify-between nav2:items-center w-full nav2:px-16 nav2:py-4 border-b border-b-primary h-[74px] nav:h-[90px] nav2:h-[62px] fixed top-0">
			<div>
				<p className="text-sm nav:text-lg nav2:text-xl nav2:font-semibold text-white tracking-wider font-lato text-center">
					Brice Braquin.
				</p>
			</div>
			<div className="flex justify-center items-center gap-x-8 font-lato">
				<a href="#about" className="navLink">
					About
				</a>
				<a href="#works" className=" navLink">
					Works
				</a>
				<a href="#contact" className=" navLink">
					Contact
				</a>
			</div>
		</div>
	)
}
export default Navbar
