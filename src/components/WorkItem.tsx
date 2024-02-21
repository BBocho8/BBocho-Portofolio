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
		<div className="flex justify-center items-center py-2.5 gap-x-2 badge badge-sm  badge-outline uppercase ">
			<span>{icon}</span>
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
		<div className="flex gap-x-1.5 justify-center md:justify-start items-center">
			{isDemo && (
				<a href={demoLink} target="_blank" rel="noreferrer">
					<button className="flex items-center justify-center gap-x-2 btn btn-sm btn-outline ">
						<span>
							<SiVercel />
						</span>
						<span>Demo</span>
					</button>
				</a>
			)}
			{isSourceCode && (
				<a href={sourceCodeLink} target="_blank" rel="noreferrer">
					<button className="flex items-center justify-center gap-x-2 btn btn-sm btn-outline ">
						<span>
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
		<div className="flex flex-col justify-center md:flex-row md:justify-between bg-neutral">
			<div className="px-8 flex flex-col  items-center md:items-start xl:items-center justify-start  gap-y-4 py-4 xl:py-8 max-w-[600px] order-2 md:order-1 ">
				<h3 className="text-2xl font-semibold text-center text-white">
					{title}
				</h3>
				<div className="flex flex-wrap items-center justify-center gap-2 md:justify-start xl:justify-center">
					{isPCRecommended &&
						WorkItemBadge(<RiComputerFill />, "PC Recommended")}
					{isMobileRecommended &&
						WorkItemBadge(<FaMobileScreenButton />, "Mobile Recommended")}
					{isResponsive &&
						WorkItemBadge(<FaMobileScreenButton />, "Responsive")}
					{isTypescript && WorkItemBadge(<SiTypescript />, "Typescript")}
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
				<p className="text-sm font-light tracking-wide text-center text-white md:text-justify xl:text-center">
					{desc}
				</p>
				{WorkItemButton(isDemo, isSourceCode, demoLink, sourceCodeLink)}
			</div>
			<img
				src={img}
				className="aspect-video object-top md:aspect-square object-cover max-h-[15rem] md:max-w-[17rem] xl:max-h-[25rem] border-2 border-neutral order-1 md:order-2"
			/>
		</div>
	)
}
export default WorkItem
