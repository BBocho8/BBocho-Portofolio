import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import img from "../assets/pdpocho.jpeg";
import { FaAngleDoubleDown } from "react-icons/fa";

const About = () => {
	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center max-w-xl p-8 mx-auto gap-y-8 h-hero0 nav:h-hero1 nav2:h-hero2"
		>
			<div className="avatar">
				<div className="w-20 rounded-full nav:w-28 hero:w-32 ring ring-primary ring-offset-base-100 ring-offset-2">
					<img src={img} alt="avatar" />
				</div>
			</div>
			<div className="flex flex-col gap-y-1 hero:gap-y-2">
				<h1 className="text-3xl font-semibold tracking-tight text-center text-primary hero:text-6xl">
					Brice Braquin
				</h1>
				<p className="text-sm font-medium text-right text-white hero:text-base">
					Web Developer
				</p>
				<div className="flex justify-end gap-x-2">
					<a
						href="https://github.com/BBocho8/"
						target="_blank"
						rel="noreferrer"
						className=" btn btn-xs hero:btn-sm btn-primary"
					>
						<div className="block hero:hidden">
							<FaGithub size={15} />
						</div>
						<div className="hidden hero:block">
							<FaGithub size={20} />
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/bricebraquin/"
						target="_blank"
						rel="noreferrer"
						className=" btn btn-xs hero:btn-sm btn-primary"
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
				<p className="font-light text-center text-white hero:font-medium">
					Hey there, I'm Brice, and I thrive on creating user-friendly,
					captivating websites and web applications. It's all about the cool
					stuff, in a nutshell.
				</p>
				<p className="font-light text-center text-white hero:font-medium">
					When I'm not immersed in projects, you'll find me out on the field
					playing football or creating content for my social media channels.
					Additionally, I'm always eager to dive into the latest web
					technologies.
				</p>
			</div>

			<a href="#works">
				<button type="button" className="btn hero:btn-lg btn-primary">
					<p className="flex items-center justify-center gap-x-4">
						SEE MY PROJECTS
						<span className="animate-bounce">
							<FaAngleDoubleDown size={23} />
						</span>
					</p>
				</button>
			</a>
		</section>
	);
};
export default About;
