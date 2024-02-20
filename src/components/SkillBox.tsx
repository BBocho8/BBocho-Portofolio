type SkillBoxProps = {
	text: string
	icon: React.ReactNode
}

const SkillBox = ({ text, icon }: SkillBoxProps) => {
	return (
		<div className=" flex flex-col items-center justify-center gap-y-2 px-16 py-8 bg-neutral">
			{icon}
			<span className="font-medium text-white text-nowrap">{text}</span>
		</div>
	)
}
export default SkillBox
