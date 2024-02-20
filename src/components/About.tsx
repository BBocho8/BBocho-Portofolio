import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import img from "../assets/bbocho.jpg"
import { FaAngleDoubleDown } from "react-icons/fa"

const About = () => {
	return (
		<section
			id="about"
			className="mx-auto flex flex-col items-center justify-center p-8 gap-y-8 h-hero0 nav:h-hero1 nav2:h-hero2  max-w-xl"
		>
			<div className="avatar">
				<div className="w-20 nav:w-28 hero:w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<img src={img} />
				</div>
			</div>
			<div className="flex flex-col gap-y-1 hero:gap-y-2">
				<h1 className="tracking-tight text-primary font-semibold text-3xl hero:text-6xl text-center">
					Brice Braquin
				</h1>
				<p className="text-right text-white font-medium text-sm hero:text-base">
					Web Developer
				</p>
				<div className="flex gap-x-2 justify-end">
					<a
						href="#"
						target="_blank"
						rel="noreferrer"
						className=" btn btn-xs hero:btn-sm btn-primary "
					>
						<div className="block hero:hidden">
							<FaGithub size={15} />
						</div>
						<div className="hidden hero:block">
							<FaGithub size={20} />
						</div>
					</a>
					<a
						href="#"
						target="_blank"
						rel="noreferrer"
						className=" btn btn-xs hero:btn-sm btn-primary "
					>
						<div className="block hero:hidden">
							<FaLinkedinIn size={15} />
						</div>
						<div className="hidden hero:block">
							<FaLinkedinIn size={20} />
						</div>
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-y-4">
				<p className="font-light hero:font-medium text-white text-center">
					Hey there, I'm Brice, and I thrive on creating user-friendly,
					captivating websites and web applications. It's all about the cool
					stuff, in a nutshell.
				</p>
				<p className="font-light hero:font-medium text-white text-center">
					When I'm not immersed in projects, you'll find me out on the field
					playing football or creating content for my social media channels.
					Additionally, I'm always eager to dive into the latest web
					technologies.
				</p>
			</div>

			<a href="#works">
				<button className="btn hero:btn-lg btn-primary">
					<p className="flex gap-x-4 justify-center items-center">
						SEE MY PROJECTS
						<span className="animate-bounce">
							<FaAngleDoubleDown size={23} />
						</span>
					</p>
				</button>
			</a>
		</section>
	)
}
export default About
