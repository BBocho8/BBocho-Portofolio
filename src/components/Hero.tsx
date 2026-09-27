import { motion } from "framer-motion"
import strikerImg from "../assets/hero-striker.webp"
import { stats } from "../content"
import { Mark, MarkText } from "./ui/Mark"

const ease = [0.2, 0.8, 0.2, 1] as const

const Hero = () => {
	return (
		<section id="top" className="relative overflow-hidden bg-navy-deep text-white">
			<div className="glow -right-64 -top-80 h-[900px] w-[900px] opacity-100" />
			<div
				className="pointer-events-none absolute -bottom-72 -left-72 h-[700px] w-[700px] rounded-full"
				style={{ background: "radial-gradient(closest-side, rgba(56,68,91,0.9), rgba(56,68,91,0) 70%)" }}
			/>

			<div className="container-page relative pt-[104px] lg:pt-[184px]">
				<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.32, ease }}
						className="flex flex-col gap-7 lg:col-span-7 lg:gap-8"
					>
						<span className="chip self-start bg-mint/[0.12] text-mint">
							<span className="h-[7px] w-[7px] rounded-full bg-mint" />
							Full-stack · design to deployment
						</span>
						<h1 className="font-display text-[38px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[56px] lg:text-[68px] lg:leading-[1.04]">
							I build clear interfaces <br className="hidden sm:block" />
							and whole products, <br className="hidden sm:block" />
							<span className="relative text-mint sm:inline-block">
								idea to production
								<svg
									viewBox="0 0 420 22"
									preserveAspectRatio="none"
									aria-hidden="true"
									className="absolute -bottom-3.5 -left-1 hidden h-[22px] w-full overflow-visible sm:block"
								>
									<path
										d="M4 14 C 90 4, 200 20, 300 9 S 400 6, 414 12"
										fill="none"
										stroke="#72FFC9"
										strokeWidth="3"
										strokeLinecap="round"
										vectorEffect="non-scaling-stroke"
									/>
								</svg>
							</span>
							.
						</h1>
						<p className="max-w-[580px] text-base leading-[1.6] text-fog-dim sm:text-[19px]">
							Full-stack engineer who cares most about the part people touch. At Bonn Consulting since 2024. On my own
							time I design, build and deploy complete products, from a telestrator for football coaches to an
							evidence-led assistant for second-hand buyers.
						</p>
						<div className="flex flex-col gap-3 sm:flex-row">
							<a href="#work" className="btn-primary shadow-mint-glow">
								See the work →
							</a>
							<a href="#about" className="btn-outline-dark">
								The story
							</a>
						</div>
					</motion.div>

					<motion.figure
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.32, ease, delay: 0.08 }}
						className="relative order-first w-full lg:order-none lg:col-span-5 lg:max-w-[440px] lg:justify-self-end"
					>
						<div className="relative aspect-[7/6] overflow-hidden rounded-xl lg:aspect-[440/540]">
							<img
								src={strikerImg}
								alt="Brice Braquin, number 11 for SVE Mendig, dribbling toward the goalkeeper"
								width={1086}
								height={724}
								className="h-full w-full object-cover object-[54%_center] [filter:saturate(0.8)_contrast(1.05)]"
							/>
							<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,39,57,0.35)_0%,rgba(31,39,57,0)_30%,rgba(31,39,57,0)_60%,rgba(31,39,57,0.8)_100%)]" />
						</div>
						<Mark className="left-3 top-3 lg:-left-9 lg:top-6 lg:px-3 lg:py-2">
							<MarkText>No. 11 · SVE Mendig</MarkText>
							<span className="hidden font-display text-[15px] font-medium text-white lg:block">Brice · striker</span>
						</Mark>
						<figcaption className="absolute bottom-4 right-5 text-sm text-white">Based in Koblenz, Germany</figcaption>
					</motion.figure>
				</div>

				<dl className="mt-14 grid grid-cols-2 border-t border-white/10 lg:mt-[88px] lg:grid-cols-4">
					{stats.map((stat, index) => (
						<div
							key={stat.value}
							className={`flex flex-col gap-1.5 py-6 lg:pb-9 lg:pt-7 ${index % 2 === 0 ? "pr-4" : "border-l border-white/10 pl-4"} ${
								index > 1 ? "border-t border-white/10 lg:border-t-0" : ""
							} lg:px-6 lg:first:pl-0 lg:[&:nth-child(3)]:border-l`}
						>
							<dt className="order-2 text-[13px] leading-[1.5] text-fog-dim sm:text-sm">{stat.label}</dt>
							<dd className="order-1 font-display text-[32px] font-medium tracking-[-0.02em] text-mint sm:text-[44px]">{stat.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}

export default Hero
