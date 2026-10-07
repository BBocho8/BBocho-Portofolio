import { ReactNode } from "react"
import { LuArrowUpRight } from "react-icons/lu"
import annotatorVideoImg from "../assets/annotator-video.webp"
import clubSiteKitImg from "../assets/clubsitekit.webp"
import highlightsImg from "../assets/highlights.webp"
import qivoaImg from "../assets/qivoa.webp"
import sveImg from "../assets/sve.webp"
import { archive, contact, links } from "../content"
import { Mark, MarkLayer, MarkNote, MarkText } from "./ui/Mark"
import Reveal from "./ui/Reveal"

const Meta = ({ label, value }: { label: string; value: string }) => (
	<div className="flex flex-col gap-1">
		<span className="mono text-[11px] text-ink-muted">{label}</span>
		<span className="text-[15px]">{value}</span>
	</div>
)

type ProductCardProps = {
	name: string
	status: string
	statusTone: "mint" | "quiet"
	summary: string
	stack: string
	href: string
	image: string
	imageAlt: string
	imageSurface: string
	// Marks drawn in the 0 0 1600 900 space: the top 90% of a 1600 × 1000 screenshot
	annotation?: ReactNode
	caseHref?: string
}

const ProductCard = ({ name, status, statusTone, summary, stack, href, image, imageAlt, imageSurface, annotation, caseHref }: ProductCardProps) => (
	<article className="card flex flex-col overflow-hidden">
		<div className={`px-5 pt-5 sm:px-8 sm:pt-8 ${imageSurface}`}>
			{/* A fixed 16:9 crop of a 16:10 screenshot, so marks land on the same pixels at every width */}
			<div className="relative aspect-[16/9]">
				<img
					src={image}
					alt={imageAlt}
					width={1600}
					height={1000}
					loading="lazy"
					className="h-full w-full rounded-t-lg object-cover object-left-top shadow-md"
				/>
				{annotation}
			</div>
		</div>
		<div className="flex flex-1 flex-col gap-3.5 p-6 sm:px-9 sm:pb-9 sm:pt-8">
			<div className="flex items-center justify-between gap-4">
				<h3 className="font-display text-[26px] font-medium tracking-[-0.02em] sm:text-[30px]">{name}</h3>
				<span className={`chip ${statusTone === "mint" ? "bg-mint text-navy-deep" : "bg-paper text-ink-muted"}`}>{status}</span>
			</div>
			<p className="text-base leading-[1.6] text-ink-body">{summary}</p>
			<p className="mono text-[11px] leading-[1.8] text-ink-muted">{stack}</p>
			<div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
				{caseHref && (
					<a href={caseHref} className="link-mint">
						Read the case study →
					</a>
				)}
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className={caseHref ? "border-b-[1.5px] border-line-strong pb-0.5 font-medium hover:opacity-80" : "link-mint"}
				>
					{href.replace("https://", "")} ↗
				</a>
			</div>
		</div>
	</article>
)

const Work = () => {
	return (
		<section id="work" className="bg-paper pb-12 pt-20 lg:pb-16 lg:pt-[120px]">
			<div className="container-page flex flex-col gap-8">
				<Reveal className="flex flex-col justify-between gap-6 pb-2 lg:flex-row lg:items-end lg:gap-12 lg:pb-6">
					<div className="flex flex-col gap-4">
						<span className="mono text-ink-muted">01 — Selected work</span>
						<h2 className="section-title">
							Things I built, <br className="hidden sm:block" />
							and still run.
						</h2>
					</div>
					<p className="max-w-[420px] text-[17px] leading-[1.6] text-ink-muted">
						My own products, end to end: product, design, frontend, API, payments and the server they run on.
					</p>
				</Reveal>

				<Reveal>
					<article className="card grid overflow-hidden lg:grid-cols-12">
						<div className="flex flex-col gap-6 p-6 sm:p-10 lg:col-span-5 lg:p-12">
							<div className="flex gap-2">
								<span className="chip bg-mint text-navy-deep">Flagship</span>
								<span className="chip bg-paper text-ink-muted">Live since 2025</span>
							</div>
							<div className="flex flex-col gap-3">
								<h3 className="font-display text-[32px] font-medium tracking-[-0.02em] sm:text-[40px]">My Annotator</h3>
								<p className="text-[17px] leading-[1.6] text-ink-body">
									A telestrator for football coaches. Paste a match video and draw on it like a TV analyst, no account
									needed. Share a replay that opens on the exact moment, so players can act on it next session.
								</p>
							</div>
							<div className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-5">
								<Meta label="Role" value="Solo founder, design to deploy" />
								<Meta label="Surfaces" value="Web app + Chrome extension" />
								<Meta label="Stack" value="Next.js 16, Prisma, Stripe" />
								<Meta label="Traction" value="300+ active users, paid plans" />
							</div>
							<div className="mt-auto flex flex-col gap-3 sm:flex-row">
								<a href={links.myAnnotatorCase} className="btn-dark h-11 px-[18px]">
									Read the case study
								</a>
								<a href={links.myAnnotator} target="_blank" rel="noreferrer" className="btn-outline-light h-11 px-[18px]">
									my-annotator.com ↗
								</a>
							</div>
						</div>
						<figure className="flex flex-col justify-center gap-3 bg-navy-deep p-5 sm:p-10 lg:col-span-7">
							<div className="relative">
								<img
									src={annotatorVideoImg}
									alt="My Annotator drawing arrows, zones and labels over footage of an amateur match"
									width={1386}
									height={778}
									loading="lazy"
									className="block w-full rounded-lg shadow-lg"
								/>
								<MarkLayer viewBox="0 0 1386 778" weight={6} d="M 120 148 C 112 128, 118 112, 132 102" className="hidden md:block">
									<rect x="24" y="28" width="324" height="70" rx="35" fill="none" stroke="#72FFC9" strokeWidth="6" />
								</MarkLayer>
								<Mark className="left-[5%] top-[19%] hidden md:block">
									<MarkText>Deep-linked replays</MarkText>
									<MarkNote>Open on the exact second and note</MarkNote>
								</Mark>
							</div>
							<figcaption className="mono text-[11px] text-fog-faint">Own footage · Rubenach vs Mendig</figcaption>
						</figure>
					</article>
				</Reveal>

				<div className="grid gap-8 md:grid-cols-2">
					<Reveal className="flex">
						<ProductCard
							name="Qivoa"
							status="Live"
							statusTone="mint"
							summary="Know before you buy. Paste a second-hand listing and get an evidence-led deal dossier: facts, risks, a market price range and what to ask the seller."
							stack="Expo · React 19 · Hono · Postgres · LLM structured outputs"
							href={links.qivoa}
							image={qivoaImg}
							imageAlt="Qivoa homepage with a deal recommendation for a used console"
							imageSurface="bg-[#E9EDEA]"
							annotation={
								<>
									<MarkLayer viewBox="0 0 1600 900" weight={7} d="M 1000 760 C 1004 738, 1016 720, 1034 708" className="hidden lg:block">
										<ellipse cx="1069" cy="673" rx="98" ry="30" fill="none" stroke="#72FFC9" strokeWidth="7" />
									</MarkLayer>
									<Mark className="right-[2%] top-[85%] hidden whitespace-nowrap lg:block">
										<MarkText>Priced by code, not the LLM</MarkText>
									</Mark>
								</>
							}
						/>
					</Reveal>
					<Reveal className="flex" delay={0.06}>
						<ProductCard
							name="Highlights"
							status="New"
							statusTone="mint"
							summary="Turn a full match into a highlight reel without uploading a byte. Multi-GB video is cut and encoded right in the browser, from a Veo list or marks you set live."
							stack="React · WebCodecs · Web Workers · File System Access"
							href={links.highlights}
							caseHref={links.highlightsCase}
							image={highlightsImg}
							imageAlt="Highlights start screen with the match video drop zone"
							imageSurface="bg-navy"
							annotation={
								<>
									<MarkLayer viewBox="0 0 1600 900" weight={7} d="M 96 734 C 88 700, 94 664, 110 642" className="hidden lg:block">
										<rect x="24" y="584" width="526" height="44" rx="8" fill="none" stroke="#72FFC9" strokeWidth="7" />
									</MarkLayer>
									<Mark className="left-[2%] top-[81%] hidden lg:block">
										<MarkText>0 bytes uploaded</MarkText>
										<MarkNote>Decoded and encoded in a Web Worker</MarkNote>
									</Mark>
								</>
							}
						/>
					</Reveal>
				</div>

				<Reveal>
					<article className="relative grid gap-10 overflow-hidden rounded-xl bg-navy p-6 text-white sm:p-10 lg:grid-cols-12 lg:p-14">
						<div className="glow -bottom-[340px] -right-40 h-[640px] w-[640px] opacity-90" />
						<div className="relative flex flex-col gap-5 lg:col-span-5">
							<span className="mono text-mint">ClubSiteKit + SVE Mendig</span>
							<h3 className="font-display text-[30px] font-medium leading-[1.12] tracking-[-0.02em] sm:text-[38px]">
								From my club's website to a product.
							</h3>
							<p className="text-base leading-[1.65] text-fog">
								I rebuilt the SVE Mendig site with a CMS volunteers can actually use: news, teams, fixtures and a Stripe
								shop. Then I turned it into ClubSiteKit, ready-made websites for amateur football clubs.
							</p>
							<ol className="mt-1 flex flex-col">
								{[
									["Jul 26", "SVE site on Payload CMS"],
									["Jul 26", "Templates 01 Starter and 02 Matchday"],
									["Now", "clubsitekit.com takes club orders"],
								].map(([when, what]) => (
									<li key={what} className="flex items-center gap-4 border-t border-white/10 py-2.5 last:border-b">
										<span className={`mono w-[72px] shrink-0 text-[11px] ${when === "Now" ? "text-mint" : "text-fog-faint"}`}>{when}</span>
										<span className="text-[15px]">{what}</span>
									</li>
								))}
							</ol>
							<div className="flex gap-5 text-[15px]">
								<a href={links.clubSiteKit} target="_blank" rel="noreferrer" className="link-mint">
									clubsitekit.com ↗
								</a>
								<a
									href={links.sveTemplate}
									target="_blank"
									rel="noreferrer"
									className="border-b-[1.5px] border-white/30 pb-0.5 font-medium hover:opacity-80"
								>
									Live template ↗
								</a>
							</div>
						</div>
						<div className="relative aspect-[600/470] lg:col-span-7">
							<img
								src={clubSiteKitImg}
								alt="ClubSiteKit homepage"
								width={1600}
								height={1000}
								loading="lazy"
								className="absolute right-0 top-0 aspect-[16/10] w-[93%] rounded-lg object-cover object-left-top shadow-lg"
							/>
							<img
								src={sveImg}
								alt="SVE Mendig club website, built on the ClubSiteKit template"
								width={1600}
								height={1000}
								loading="lazy"
								className="absolute bottom-0 left-0 aspect-[16/10] w-[80%] rounded-lg border-4 border-navy object-cover object-left-top shadow-lg"
							/>
							<MarkLayer viewBox="0 0 600 470" d="M 258 118 C 282 84, 320 72, 372 86" className="hidden sm:block" />
							<Mark surface="navy" className="left-[5%] top-[21%] hidden sm:block">
								<MarkText>Club site → Template 01</MarkText>
								<MarkNote>Roles for news, fixtures and shop</MarkNote>
							</Mark>
						</div>
					</article>
				</Reveal>

				<Reveal>
					<div className="rounded-xl border border-line bg-white px-6 py-7 sm:px-10 sm:py-8">
						<div className="flex items-center justify-between pb-4">
							<span className="mono text-ink-muted">Earlier</span>
							<a href={contact.github} target="_blank" rel="noreferrer" className="text-sm font-medium hover:opacity-80">
								All on GitHub ↗
							</a>
						</div>
						{archive.map((item) => (
							<a
								key={item.name}
								href={item.href}
								target="_blank"
								rel="noreferrer"
								className="group grid grid-cols-[56px_minmax(0,1fr)_24px] items-center gap-x-4 gap-y-1 border-t border-line py-4 lg:grid-cols-[90px_240px_minmax(0,1fr)_260px_40px]"
							>
								<span className="mono text-[11px] text-ink-muted">{item.year}</span>
								<span className="font-display text-lg font-medium">{item.name}</span>
								<LuArrowUpRight className="justify-self-end text-ink-muted transition-colors group-hover:text-ink lg:order-last" size={18} aria-hidden="true" />
								<span className="col-start-2 text-[15px] text-ink-body lg:col-start-auto">{item.summary}</span>
								<span className="mono col-start-2 text-[11px] text-ink-muted lg:col-start-auto">{item.stack}</span>
							</a>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	)
}

export default Work
