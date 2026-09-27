import { toolkit } from "../content"
import Reveal from "./ui/Reveal"

const Toolkit = () => {
	return (
		<section className="bg-paper py-20 lg:py-[120px]">
			<div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
				<Reveal className="flex flex-col gap-4 lg:col-span-4">
					<span className="mono text-ink-muted">04 — Toolkit</span>
					<h2 className="font-display text-[34px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
						From interface to infrastructure.
					</h2>
				</Reveal>
				<div className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:col-span-8">
					{toolkit.map((column, index) => (
						<Reveal key={column.group} delay={index * 0.05} className="flex flex-col gap-3.5">
							<span className="mono text-[11px] text-ink-muted">{column.group}</span>
							<ul className="flex flex-wrap gap-2">
								{column.items.map((item) => (
									<li
										key={item}
										className={`rounded-full px-3 py-[7px] text-sm ${
											column.highlight ? "bg-mint/30" : "border border-line bg-white"
										}`}
									>
										{item}
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}

export default Toolkit
