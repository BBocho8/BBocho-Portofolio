import { ReactNode } from "react"

type SkillBoxProps = {
	text: string
	icon: ReactNode
}

const SkillBox = ({ text, icon }: SkillBoxProps) => {
	return (
		<div className="skill-card flex flex-col items-center justify-center gap-y-1 sm:gap-y-2 p-3 sm:p-4 group">
			<div className="transition-transform duration-300 group-hover:scale-110">
				{icon}
			</div>
			<p className="text-xs font-medium text-slate-300 text-center group-hover:text-white transition-colors duration-300 leading-tight">
				{text}
			</p>
		</div>
	)
}

export default SkillBox
