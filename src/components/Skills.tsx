import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaStripeS } from "react-icons/fa6"
import SkillBox from "./SkillBox"
import { IoLogoJavascript } from "react-icons/io5"
import {
	SiCypress,
	SiMui,
	SiNextdotjs,
	SiSanity,
	SiStrapi,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "react-icons/si"

type Skill = {
	text: string
	icon: React.ReactNode
}

const skillsList: Skill[] = [
	{
		text: "HTML",
		icon: <FaHtml5 size={40} className="text-primary" />,
	},
	{
		text: "CSS",
		icon: <FaCss3 size={40} className="text-primary" />,
	},
	{
		text: "JavaScript",
		icon: <IoLogoJavascript size={40} className="text-primary" />,
	},
	{
		text: "TypeScript",
		icon: <SiTypescript size={40} className="text-primary" />,
	},
	{
		text: "React.js",
		icon: <FaReact size={40} className="text-primary" />,
	},
	{
		text: "Node.js",
		icon: <FaNodeJs size={40} className="text-primary" />,
	},
	{
		text: "Next.js",
		icon: <SiNextdotjs size={40} className="text-primary" />,
	},
	{
		text: "Tailwind",
		icon: <SiTailwindcss size={40} className="text-primary" />,
	},
	{
		text: "Material UI",
		icon: <SiMui size={40} className="text-primary" />,
	},
	{
		text: "Strapi",
		icon: <SiStrapi size={40} className="text-primary" />,
	},
	{
		text: "Sanity",
		icon: <SiSanity size={40} className="text-primary" />,
	},
	{
		text: "Vite",
		icon: <SiVite size={40} className="text-primary" />,
	},
	{
		text: "Cypress",
		icon: <SiCypress size={40} className="text-primary" />,
	},
	{
		text: "Stripe",
		icon: <FaStripeS size={40} className="text-primary" />,
	},
]

const Skills = () => {
	return (
		<section className="mx-auto   px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
			{skillsList.map((skill) => {
				return <SkillBox key={skill.text} text={skill.text} icon={skill.icon} />
			})}
		</section>
	)
}
export default Skills
