import { toolkit } from "../content"
import Reveal from "./ui/Reveal"

// A compact strip that closes the Work section: the stack is context for the work, not a section of its own
const Toolkit = () => {
	return (
		<section aria-labelledby="toolkit-title" className="bg-paper pb-20 lg:pb-[120px]">
			<Reveal className="container-page">
				<div className="grid gap-6 border-t border-line-strong pt-8 lg:grid-cols-12 lg:gap-12 lg:pt-10">
					<h2 id="toolkit-title" className="mono text-ink-muted lg:col-span-3">
						Toolkit
					</h2>
					<dl className="grid gap-6 sm:grid-cols-3 lg:col-span-9">
						{toolkit.map((column) => (
							<div key={column.group} className="flex flex-col gap-2">
								<dt className={`mono text-[11px] ${column.highlight ? "text-ink" : "text-ink-muted"}`}>
									{column.highlight && <span className="mr-1.5 inline-block h-[7px] w-[7px] rounded-full bg-mint align-middle" />}
									{column.group}
								</dt>
								<dd className="text-[15px] leading-[1.7] text-ink-body">{column.items.join(", ")}</dd>
							</div>
						))}
					</dl>
				</div>
			</Reveal>
		</section>
	)
}

export default Toolkit
