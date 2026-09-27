import { LuCheckCircle, LuLock, LuPenLine, LuServer } from "react-icons/lu"
import { principles } from "../content"
import Reveal from "./ui/Reveal"

const icons = [LuPenLine, LuLock, LuCheckCircle, LuServer]

const Principles = () => {
	return (
		<section className="bg-white py-20 lg:py-[120px]">
			<div className="container-page flex flex-col gap-12 lg:gap-14">
				<Reveal className="flex flex-col gap-4">
					<span className="mono text-ink-muted">02 — How I work</span>
					<h2 className="section-title">
						Four habits from shipping <br className="hidden sm:block" />
						my own products.
					</h2>
				</Reveal>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{principles.map((principle, index) => {
						const Icon = icons[index]
						return (
							<Reveal key={principle.title} delay={index * 0.05} className="flex">
								<div className="flex flex-1 flex-col gap-4 rounded-lg border border-line p-7">
									<div className="flex h-14 w-14 items-center justify-center rounded-md bg-mint/[0.28]">
										<Icon size={28} strokeWidth={1.75} className="text-navy" aria-hidden="true" />
									</div>
									<span className="mono text-[11px] text-ink-muted">0{index + 1}</span>
									<h3 className="font-display text-[22px] font-medium">{principle.title}</h3>
									<p className="text-[15px] leading-[1.6] text-ink-body">{principle.body}</p>
								</div>
							</Reveal>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Principles
