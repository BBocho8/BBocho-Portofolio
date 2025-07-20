import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import { MdEmail } from "react-icons/md"

const Contact = () => {
	return (
		<section
			id="contact"
			className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
		>
			{/* Section Header */}
			<div className="text-center mb-8 sm:mb-12 fade-in">
				<h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4 hero:text-4xl">
					Let's Work Together
				</h2>
				<p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
					Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
				</p>
			</div>

			{/* Contact Card */}
			<div className="glass-card p-6 sm:p-8 text-center fade-in">
				<div className="flex flex-col items-center gap-y-4 sm:gap-y-6">
					<div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
						<MdEmail size={24} className="sm:w-8 sm:h-8 text-white" />
					</div>
					
					<div>
						<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
							Get In Touch
						</h3>
						<p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">
							I'm currently available for freelance work and exciting opportunities.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
						<span className="text-sm sm:text-base text-slate-300 font-medium">
							Ready to start a project?
						</span>
						<MdOutlineKeyboardDoubleArrowRight size={20} className="sm:w-6 sm:h-6 text-primary" />
						<a href="mailto:bricebraquin@live.fr" className="w-full sm:w-auto">
							<button className="btn-modern btn btn-md sm:btn-lg rounded-full px-6 sm:px-8 py-2 sm:py-3 font-semibold text-sm sm:text-base w-full sm:w-auto">
								bricebraquin@live.fr
							</button>
						</a>
					</div>
				</div>
			</div>

			{/* Additional Info */}
			<div className="mt-6 sm:mt-8 text-center">
				<p className="text-xs sm:text-sm text-slate-400">
					I typically respond within 24 hours during business days.
				</p>
			</div>
		</section>
	)
}

export default Contact
