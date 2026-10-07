import { ReactNode } from "react"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu"
import Contact from "./Contact"
import Navbar from "./Navbar"
import Reveal from "./ui/Reveal"

type Fact = { label: string; value: string }
type Detail = { title: string; body: string }

type CaseStudyProps = {
	name: string
	period: string
	summary: string
	facts: Fact[]
	href: string
	image: string
	imageAlt: string
	imageCaption?: string
	brief: string
	briefFacts: Fact[]
	features: Detail[]
	children: ReactNode
	decisions: Detail[]
	next: { href: string; name: string; summary: string }
}

const CaseStudy = ({ name, period, summary, facts, href, image, imageAlt, imageCaption, brief, briefFacts, features, children, decisions, next }: CaseStudyProps) => (
	<>
		<Navbar base="/" />
		<main>
			<section className="relative overflow-hidden bg-navy-deep text-white">
				<div className="glow -right-[300px] -top-[380px] h-[900px] w-[900px]" />
				<div className="container-page relative pt-[120px] lg:pt-[168px]">
					<div className="grid items-end gap-10 pb-12 lg:grid-cols-12 lg:gap-16 lg:pb-16">
						<Reveal className="flex flex-col gap-6 lg:col-span-7">
							<a href="/#work" className="inline-flex items-center gap-2 self-start text-[15px] text-fog hover:text-white">
								<LuArrowLeft size={16} aria-hidden="true" /> All work
							</a>
							<span className="mono text-mint">Case study · {period}</span>
							<h1 className="break-words font-display text-[48px] font-medium leading-none tracking-[-0.03em] sm:text-[64px] lg:text-[80px]">{name}</h1>
							<p className="max-w-[620px] text-lg leading-[1.55] text-fog sm:text-[21px]">{summary}</p>
						</Reveal>
						<Reveal className="grid grid-cols-2 gap-x-6 gap-y-5 lg:col-span-5" delay={0.06}>
							{facts.map((fact) => (
								<div key={fact.label} className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">{fact.label}</span>
									<span className="text-[15px]">{fact.value}</span>
								</div>
							))}
							<div className="flex flex-col gap-1">
								<span className="mono text-[11px] text-fog-faint">Link</span>
								<a href={href} target="_blank" rel="noreferrer" className="link-mint self-start text-[15px]">{new URL(href).hostname} ↗</a>
							</div>
						</Reveal>
					</div>
					<Reveal>
						<figure>
							<img src={image} alt={imageAlt} width={1600} height={1000} fetchpriority="high" className="block w-full rounded-t-xl shadow-lg" />
							{imageCaption && <figcaption className="py-4 text-sm leading-relaxed text-fog-faint">{imageCaption}</figcaption>}
						</figure>
					</Reveal>
				</div>
			</section>

			<section className="container-page grid gap-8 py-20 lg:grid-cols-12 lg:gap-16 lg:py-[120px]">
				<span className="mono text-ink-muted lg:col-span-4">The brief</span>
				<Reveal className="flex flex-col gap-10 lg:col-span-8">
					<p className="font-display text-2xl font-normal leading-[1.3] tracking-[-0.01em] sm:text-[34px]">{brief}</p>
					<dl className="grid gap-4 sm:grid-cols-3 sm:gap-6">
						{briefFacts.map((fact) => (
							<div key={fact.label} className="flex flex-col gap-2 rounded-lg bg-paper p-6">
								<dt className="mono text-[11px] text-ink-muted">{fact.label}</dt>
								<dd className="text-base leading-[1.5]">{fact.value}</dd>
							</div>
						))}
					</dl>
				</Reveal>
			</section>

			<section className="container-page flex flex-col gap-10 pb-20 lg:pb-[120px]">
				<h2 className="font-display text-[34px] font-medium tracking-[-0.02em] sm:text-[44px]">What I built.</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<Reveal key={feature.title} delay={(index % 3) * 0.05} className="flex">
							<div className="flex flex-1 flex-col gap-2.5 rounded-lg border border-line p-7">
								<span className="mono text-[11px] text-ink-muted">0{index + 1}</span>
								<h3 className="font-display text-[22px] font-medium">{feature.title}</h3>
								<p className="text-[15px] leading-[1.6] text-ink-body">{feature.body}</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{children}

			<section className="container-page grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-[120px]">
				<div className="flex flex-col gap-4 lg:col-span-4">
					<span className="mono text-ink-muted">Decisions</span>
					<h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">Trade-offs I'd make again.</h2>
				</div>
				<ol className="flex flex-col lg:col-span-8">
					{decisions.map((decision, index) => (
						<li key={decision.title} className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 border-t border-line py-7 last:border-b sm:grid-cols-[64px_minmax(0,1fr)]">
							<span className="font-display text-[28px] font-medium text-[#7A8292]">0{index + 1}</span>
							<div className="flex flex-col gap-2">
								<h3 className="font-display text-[22px] font-medium">{decision.title}</h3>
								<p className="text-base leading-[1.6] text-ink-body">{decision.body}</p>
							</div>
						</li>
					))}
				</ol>
			</section>

			<section className="container-page pb-20 lg:pb-[120px]">
				<a href={next.href} className="group flex items-center justify-between gap-6 rounded-xl bg-paper p-8 sm:px-14 sm:py-12">
					<div className="flex min-w-0 flex-col gap-2.5">
						<span className="mono text-ink-muted">Next case study</span>
						<span className="break-words font-display text-[32px] font-medium tracking-[-0.02em] sm:text-[44px]">{next.name}</span>
						<span className="text-base text-ink-body">{next.summary}</span>
					</div>
					<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mint text-navy-deep transition-transform duration-200 ease-brand group-hover:translate-x-1 sm:h-[72px] sm:w-[72px]">
						<LuArrowRight size={28} aria-hidden="true" />
					</span>
				</a>
			</section>
			<Contact />
		</main>
	</>
)

export default CaseStudy
