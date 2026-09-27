import sprintImg from "../assets/about-sprint.webp"
import { about } from "../content"
import { Mark, MarkLayer, MarkText } from "./ui/Mark"
import Reveal from "./ui/Reveal"

const About = () => {
	return (
		<section id="about" className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-[120px]">
			<div className="glow -left-[300px] -top-[300px] h-[800px] w-[800px] opacity-70" />
			<div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-[72px]">
				<Reveal className="lg:col-span-7">
					<figure className="relative aspect-[658/520] overflow-hidden rounded-xl">
						<img
							src={sprintImg}
							alt="Brice Braquin sprinting with the ball for SVE Mendig, a defender chasing"
							width={1086}
							height={724}
							loading="lazy"
							className="h-full w-full object-cover object-right [filter:saturate(0.85)_contrast(1.04)]"
						/>
						<MarkLayer viewBox="0 0 658 520" d="M 270 474 C 210 478, 150 462, 70 420">
							<ellipse cx="312" cy="470" rx="46" ry="15" fill="none" stroke="#72FFC9" strokeWidth="3" />
						</MarkLayer>
						<Mark className="left-[5%] top-[69%] hidden sm:block">
							<MarkText>Beat the press</MarkText>
						</Mark>
						<figcaption className="mono absolute right-5 top-4 text-[11px] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">Photo · Horst Wengenroth</figcaption>
					</figure>
				</Reveal>

				<Reveal className="flex flex-col gap-6 lg:col-span-5" delay={0.06}>
					<span className="mono text-mint">03 — Off the clock</span>
					<h2 className="font-display text-[34px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
						Most of my ideas start on the pitch.
					</h2>
					<p className="text-[17px] leading-[1.65] text-fog">
						I play up front for SVE Mendig. Match videos, tactics boards, a club website run by volunteers: when something
						around the club is slow or clumsy, it usually turns into a side project.
					</p>
					<dl className="flex flex-col">
						{about.map((row) => (
							<div key={row.label} className="flex justify-between gap-4 border-t border-white/10 py-3.5 last:border-b">
								<dt className="mono text-[11px] text-fog-faint">{row.label}</dt>
								<dd className="text-right text-[15px]">{row.value}</dd>
							</div>
						))}
					</dl>
				</Reveal>
			</div>
		</section>
	)
}

export default About
