import { contact } from "../content"
import Reveal from "./ui/Reveal"

const Contact = () => {
	return (
		<section id="contact" className="relative overflow-hidden bg-navy pt-20 text-white lg:pt-[120px]">
			<div className="glow -top-[200px] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2" />
			<Reveal className="container-page relative flex flex-col items-center gap-7 text-center">
				<span className="mono text-mint">05 — Contact</span>
				<h2 className="max-w-[900px] font-display text-[40px] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[56px] lg:text-[64px]">
					Have a product in mind? <br className="hidden sm:block" />
					Let’s ship it.
				</h2>
				<p className="max-w-[560px] text-base leading-[1.6] text-fog sm:text-lg">
					A role, a product to build from scratch or a club that needs a website. I reply within a day or two.
				</p>
				<a
					href={`mailto:${contact.email}`}
					className="mt-2 inline-flex h-14 max-w-full items-center rounded-lg bg-mint px-6 font-display text-lg font-medium text-navy-deep shadow-mint-glow transition duration-200 ease-brand hover:bg-[#62f0bb] active:translate-y-px sm:h-16 sm:px-8 sm:text-[22px]"
				>
					{contact.email}
				</a>
				<div className="flex gap-7 text-[15px] text-fog">
					<a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
						LinkedIn ↗
					</a>
					<a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-white">
						GitHub ↗
					</a>
				</div>
			</Reveal>
			<footer className="container-page relative mt-[72px] flex h-20 items-center justify-between border-t border-white/10">
				<span className="mono text-[11px] text-fog-faint">© {new Date().getFullYear()} Brice Braquin</span>
				<span className="mono text-[11px] text-fog-faint">Made in Koblenz</span>
			</footer>
		</section>
	)
}

export default Contact
