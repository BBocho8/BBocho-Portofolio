import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import img from "../assets/pdpocho.jpeg";
import { FaAngleDoubleDown } from "react-icons/fa";

const About = () => {
	return (
		<section
			id="about"
			className="relative flex flex-col items-center justify-center max-w-4xl p-4 mx-auto gap-y-8 h-hero0 nav:h-hero1 nav2:h-hero2 sm:p-8 sm:gap-y-12"
		>
			{/* Background decoration */}
			{/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
				<div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 blur-3xl"></div>
			</div> */}

			<div className="relative z-10 flex flex-col items-center gap-y-6 sm:gap-y-8">
				{/* Avatar - Clean circular design */}
				<div className="w-20 overflow-hidden rounded-full shadow-2xl nav:w-24 hero:w-32 sm:w-28 sm:nav:w-32 sm:hero:w-36 ring-2 ring-slate-600/50 sm:ring-4">
					<img src={img} alt="Brice Braquin" className="object-cover w-full h-full" />
				</div>

				{/* Name and title */}
				<div className="flex flex-col items-center text-center gap-y-2 sm:gap-y-3">
					<h1 className="text-2xl font-bold tracking-tight gradient-text nav:text-3xl hero:text-4xl sm:text-3xl sm:nav:text-4xl sm:hero:text-5xl lg:hero:text-7xl slide-in-left">
						Brice Braquin
					</h1>
					<p className="text-sm font-medium text-slate-300 nav:text-base hero:text-lg sm:text-base sm:nav:text-lg sm:hero:text-xl slide-in-right">
						Full Stack Web Developer
					</p>
					
					{/* Social links */}
					<div className="flex mt-3 gap-x-4 sm:mt-4 sm:gap-x-4">
						<a
							href="https://github.com/BBocho8/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full shadow-lg sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-110"
						>
							<FaGithub size={20} className="text-white sm:w-6 sm:h-6" />
						</a>
						<a
							href="https://www.linkedin.com/in/bricebraquin/"
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center w-12 h-12 transition-all duration-300 rounded-full shadow-lg sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-110"
						>
							<FaLinkedinIn size={20} className="text-white sm:w-6 sm:h-6" />
						</a>
					</div>
				</div>

				{/* Description */}
				<div className="max-w-2xl px-4 text-center fade-in sm:px-0">
					<p className="mb-3 text-sm font-light leading-relaxed text-slate-300 nav:text-base hero:text-lg sm:mb-4 sm:text-base sm:nav:text-lg sm:hero:text-lg">
						Hey there! I'm Brice, a passionate web developer who loves creating 
						<span className="font-semibold gradient-text"> user-friendly, captivating websites and web applications</span>. 
						I believe in crafting digital experiences that not only look great but also solve real problems.
					</p>
					<p className="text-sm font-light leading-relaxed text-slate-300 nav:text-base hero:text-lg sm:text-base sm:nav:text-lg sm:hero:text-lg">
						When I'm not coding, you'll find me on the football field or creating content for my social media channels. 
						I'm always eager to dive into the latest web technologies and stay ahead of the curve.
					</p>
				</div>

				{/* CTA Button */}
				<a href="#works" className="w-full fade-in sm:w-auto">
					<button className="flex items-center justify-center w-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg sm:w-auto sm:px-10 sm:py-5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 sm:text-base hover:scale-105">
						<span>Explore My Projects</span>
						<FaAngleDoubleDown size={18} className="ml-3 sm:ml-4 sm:w-5 sm:h-5" />
					</button>
				</a>
			</div>
		</section>
	);
};

export default About;
