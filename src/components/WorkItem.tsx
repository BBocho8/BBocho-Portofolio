import { FaGithub, FaMobileScreenButton, FaReact } from "react-icons/fa6"
import { RiComputerFill } from "react-icons/ri"
import {
	SiContentful,
	SiMui,
	SiNextdotjs,
	SiSanity,
	SiStrapi,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVite,
} from "react-icons/si"
import { IoLogoFirebase } from "react-icons/io5"

const WorkItemBadge = (icon: React.ReactNode, text: string) => {
	return (
		<div className="flex justify-center items-center py-2 px-3 gap-x-2 badge badge-sm badge-outline uppercase text-xs font-medium border-slate-600 text-slate-300 hover:border-primary hover:text-primary transition-colors duration-300">
			<span className="text-primary">{icon}</span>
			<span>{text}</span>
		</div>
	)
}

const WorkItemButton = (
	isDemo: boolean,
	isSourceCode: boolean,
	demoLink: string = "/",
	sourceCodeLink: string = "/"
) => {
	return (
		<div className="flex flex-col sm:flex-row gap-3 sm:gap-x-3 justify-center md:justify-start items-center">
			{isDemo && (
				<a href={demoLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
					<button className="btn-modern btn btn-sm sm:btn-md rounded-full px-4 sm:px-6 py-2 w-full sm:w-auto">
						<span className="mr-2">
							<SiVercel />
						</span>
						<span>Live Demo</span>
					</button>
				</a>
			)}
			{isSourceCode && (
				<a href={sourceCodeLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
					<button className="btn btn-sm sm:btn-md btn-outline rounded-full px-4 sm:px-6 py-2 border-slate-600 text-slate-300 hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto">
						<span className="mr-2">
							<FaGithub />
						</span>
						<span>Source Code</span>
					</button>
				</a>
			)}
		</div>
	)
}

type WorkItemProps = {
	title: string
	desc: string
	img: string
	isPCRecommended?: boolean
	isMobileRecommended?: boolean
	isTypescript?: boolean
	isReact?: boolean
	isNext?: boolean
	isSanity?: boolean
	isStrapi?: boolean
	isTailwind?: boolean
	isMUI?: boolean
	isFirebase?: boolean
	isStripe?: boolean
	isResponsive?: boolean
	isContentful?: boolean
	isDemo: boolean
	isSourceCode: boolean
	demoLink?: string
	sourceCodeLink?: string
	isVite?: boolean
}

const WorkItem = ({
	title,
	desc,
	img,
	isDemo,
	demoLink,
	isSourceCode,
	sourceCodeLink,
	isPCRecommended = true,
	isMobileRecommended,
	isTypescript = true,
	isReact,
	isNext,
	isSanity,
	isStrapi,
	isTailwind,
	isMUI,
	isFirebase,
	isStripe,
	isResponsive = true,
	isContentful,
	isVite,
}: WorkItemProps) => {
	return (
		<div className="project-card p-4 sm:p-6 lg:p-8 fade-in">
			<div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
				{/* Content */}
				<div className="flex flex-col gap-y-4 sm:gap-y-6 order-2 lg:order-1">
					<div>
						<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 hero:text-3xl">
							{title}
						</h3>
						<p className="text-sm sm:text-base font-light leading-relaxed text-slate-300 mb-4 sm:mb-6">
							{desc}
						</p>
					</div>

					{/* Technology badges */}
					<div className="flex flex-wrap items-center gap-2">
						{isPCRecommended &&
							WorkItemBadge(<RiComputerFill />, "PC Recommended")}
						{isMobileRecommended &&
							WorkItemBadge(<FaMobileScreenButton />, "Mobile Recommended")}
						{isResponsive &&
							WorkItemBadge(<FaMobileScreenButton />, "Responsive")}
						{isTypescript && WorkItemBadge(<SiTypescript />, "TypeScript")}
						{isVite && WorkItemBadge(<SiVite />, "Vite")}
						{isReact && WorkItemBadge(<FaReact />, "React.js")}
						{isNext && WorkItemBadge(<SiNextdotjs />, "Next.js")}
						{isTailwind && WorkItemBadge(<SiTailwindcss />, "Tailwind")}
						{isMUI && WorkItemBadge(<SiMui />, "Material UI")}
						{isSanity && WorkItemBadge(<SiSanity />, "Sanity")}
						{isStrapi && WorkItemBadge(<SiStrapi />, "Strapi")}
						{isFirebase && WorkItemBadge(<IoLogoFirebase />, "Firebase")}
						{isStripe && WorkItemBadge(<SiStrapi />, "Stripe")}
						{isContentful && WorkItemBadge(<SiContentful />, "Contentful")}
					</div>

					{/* Action buttons */}
					{WorkItemButton(isDemo, isSourceCode, demoLink, sourceCodeLink)}
				</div>

				{/* Image */}
				<div className="order-1 lg:order-2">
					<div className="relative group">
						<div className="gradient-border">
							<div className="p-1">
								<img
									src={img}
									alt={title}
									className="w-full h-48 sm:h-56 lg:h-64 xl:h-80 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
						</div>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkItem
