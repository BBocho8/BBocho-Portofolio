import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

const Contact = () => {
	return (
		<section
			id="contact"
			className="flex justify-center items-center px-4 gap-x-2 py-8"
		>
			<p className="text-xs nav:text-lg font-medium text-white uppercase">
				Contact Me
			</p>
			<MdOutlineKeyboardDoubleArrowRight size={20} />
			<a href="mailto:bricebraquin@live.fr">
				<button className="btn btn-xs nav:btn-sm btn-outline">
					bricebraquin@live.fr
				</button>
			</a>
		</section>
	)
}
export default Contact
