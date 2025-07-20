import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaStripeS, FaDocker, FaGitAlt } from "react-icons/fa6"
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
	SiGithub,
	SiVercel,
	SiNetlify,
	SiMongodb,
	SiPostgresql,
	SiGraphql,
	SiRedux,
	SiJest,
	SiEslint,
	SiPrettier,
	SiFramer,
	SiStorybook,
	SiPlaywright,
} from "react-icons/si"
import { MdStore } from "react-icons/md"

type Skill = {
	text: string
	icon: React.ReactNode
	category: "primary" | "secondary"
}

const primarySkills: Skill[] = [
	// Core Frontend
	{
		text: "React.js",
		icon: <FaReact size={32} className="text-cyan-400" />,
		category: "primary"
	},
	{
		text: "Next.js",
		icon: <SiNextdotjs size={32} className="text-white" />,
		category: "primary"
	},
	{
		text: "TypeScript",
		icon: <SiTypescript size={32} className="text-blue-600" />,
		category: "primary"
	},
	{
		text: "JavaScript",
		icon: <IoLogoJavascript size={32} className="text-yellow-400" />,
		category: "primary"
	},
	
	// Styling & UI
	{
		text: "Tailwind",
		icon: <SiTailwindcss size={32} className="text-cyan-500" />,
		category: "primary"
	},
	{
		text: "Material UI",
		icon: <SiMui size={32} className="text-blue-600" />,
		category: "primary"
	},
	{
		text: "Framer Motion",
		icon: <SiFramer size={32} className="text-purple-500" />,
		category: "primary"
	},
	
	// Backend & APIs
	{
		text: "Node.js",
		icon: <FaNodeJs size={32} className="text-green-500" />,
		category: "primary"
	},
	{
		text: "GraphQL",
		icon: <SiGraphql size={32} className="text-pink-500" />,
		category: "primary"
	},
	
	// DevOps & Tools
	{
		text: "Docker",
		icon: <FaDocker size={32} className="text-blue-500" />,
		category: "primary"
	},
	{
		text: "Git",
		icon: <FaGitAlt size={32} className="text-orange-500" />,
		category: "primary"
	},
	{
		text: "CI/CD",
		icon: <SiGithub size={32} className="text-green-500" />,
		category: "primary"
	},
]

const secondarySkills: Skill[] = [
	// Core Technologies
	{
		text: "HTML",
		icon: <FaHtml5 size={24} className="text-orange-500" />,
		category: "secondary"
	},
	{
		text: "CSS",
		icon: <FaCss3 size={24} className="text-blue-500" />,
		category: "secondary"
	},
	
	// State Management
	{
		text: "Redux",
		icon: <SiRedux size={24} className="text-purple-500" />,
		category: "secondary"
	},
	{
		text: "Zustand",
		icon: <MdStore size={24} className="text-orange-500" />,
		category: "secondary"
	},
	
	// Databases
	{
		text: "MongoDB",
		icon: <SiMongodb size={24} className="text-green-500" />,
		category: "secondary"
	},
	{
		text: "PostgreSQL",
		icon: <SiPostgresql size={24} className="text-blue-500" />,
		category: "secondary"
	},
	
	// CMS
	{
		text: "Strapi",
		icon: <SiStrapi size={24} className="text-purple-500" />,
		category: "secondary"
	},
	{
		text: "Sanity",
		icon: <SiSanity size={24} className="text-orange-500" />,
		category: "secondary"
	},
	
	// Deployment
	{
		text: "Vercel",
		icon: <SiVercel size={24} className="text-white" />,
		category: "secondary"
	},
	{
		text: "Netlify",
		icon: <SiNetlify size={24} className="text-green-500" />,
		category: "secondary"
	},
	
	// Development Tools
	{
		text: "Vite",
		icon: <SiVite size={24} className="text-purple-500" />,
		category: "secondary"
	},
	{
		text: "Jest",
		icon: <SiJest size={24} className="text-red-500" />,
		category: "secondary"
	},
	{
		text: "Cypress",
		icon: <SiCypress size={24} className="text-green-500" />,
		category: "secondary"
	},
	{
		text: "Playwright",
		icon: <SiPlaywright size={24} className="text-green-600" />,
		category: "secondary"
	},
	{
		text: "Storybook",
		icon: <SiStorybook size={24} className="text-pink-500" />,
		category: "secondary"
	},
	{
		text: "ESLint",
		icon: <SiEslint size={24} className="text-purple-500" />,
		category: "secondary"
	},
	{
		text: "Prettier",
		icon: <SiPrettier size={24} className="text-pink-500" />,
		category: "secondary"
	},
	
	// Payment
	{
		text: "Stripe",
		icon: <FaStripeS size={24} className="text-blue-600" />,
		category: "secondary"
	},
]

const Skills = () => {
	const [isPaused, setIsPaused] = useState(false)
	const [isDragging, setIsDragging] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	return (
		<section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
			{/* Section Header */}
			<motion.div 
				className="text-center mb-8 sm:mb-12"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4 hero:text-4xl">
					Skills & Technologies
				</h2>
				<p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
					I work with modern technologies to create robust and scalable web applications
				</p>
			</motion.div>

			{/* Primary Skills - Main Focus */}
			<motion.div 
				className="mb-8 sm:mb-12"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
					Core Technologies
				</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
					{primarySkills.map((skill, index) => (
						<motion.div 
							key={skill.text} 
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<SkillBox text={skill.text} icon={skill.icon} />
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Secondary Skills - Flowing Animation */}
			<motion.div 
				className="mb-6 sm:mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				<h3 className="text-base sm:text-lg font-medium text-slate-400 mb-4 sm:mb-6 text-center">
					Additional Tools & Technologies
				</h3>
				
				<div className="relative">
					{/* Skills Container with Overflow Hidden */}
					<div className="overflow-hidden">
						<motion.div
							ref={containerRef}
							className="flex gap-3 sm:gap-4"
							animate={isPaused || isDragging ? {} : { x: [0, -100 * secondarySkills.length] }}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "linear"
							}}
							onHoverStart={() => setIsPaused(true)}
							onHoverEnd={() => setIsPaused(false)}
							drag="x"
							dragConstraints={{ left: -100, right: 100 }}
							dragElastic={0.1}
							onDragStart={() => {
								setIsDragging(true)
								setIsPaused(true)
							}}
							onDragEnd={() => {
								setIsDragging(false)
								setTimeout(() => setIsPaused(false), 2000)
							}}
							style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
						>
							{/* Duplicate skills for seamless loop */}
							{[...secondarySkills, ...secondarySkills].map((skill, index) => (
								<motion.div 
									key={`${skill.text}-${index}`}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: (index % secondarySkills.length) * 0.05 }}
									drag={false}
								>
									<SkillBox text={skill.text} icon={skill.icon} />
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Gradient overlays for smooth fade effect */}
					<div className="absolute left-0 top-0 w-12 sm:w-20 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
					<div className="absolute right-0 top-0 w-12 sm:w-20 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />
				</div>
			</motion.div>
		</section>
	)
}

export default Skills
