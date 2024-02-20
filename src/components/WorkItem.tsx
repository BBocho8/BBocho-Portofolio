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
		<div className="flex gap-x-1.5 justify-start items-center">
			{isDemo && (
				<a href={demoLink} target="_blank" rel="noreferrer">
					<button className="flex justify-center items-center gap-x-2 btn btn-sm btn-outline ">
						<span>
							<SiVercel />
						</span>
						<span>Demo</span>
					</button>
				</a>
			)}
			{isSourceCode && (
				<a href={sourceCodeLink} target="_blank" rel="noreferrer">
					<button className="flex justify-center items-center gap-x-2 btn btn-sm btn-outline ">
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
		<div className="flex justify-between   bg-neutral">
			<div className="px-8 flex flex-col items-start justify-start  gap-y-4 py-4 max-w-[600px]">
				<h3 className="text-2xl text-white font-semibold">{title}</h3>
				<div className="flex justify-start flex-wrap gap-2 items-center">
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
				<p className="font-light text-white tracking-wide text-sm">{desc}</p>
				{WorkItemButton(isDemo, isSourceCode, demoLink, sourceCodeLink)}
			</div>
			<img
				src={img}
				className="aspect-square object-cover md:max-w-[17rem] border-2 border-neutral"
			/>
		</div>
	)
}
export default WorkItem
