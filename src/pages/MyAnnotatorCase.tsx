import { LuArrowLeft, LuArrowRight } from "react-icons/lu"
import annotatorImg from "../assets/annotator.webp"
import extensionImg from "../assets/annotator-extension.webp"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import { Mark, MarkLayer, MarkNote, MarkText } from "../components/ui/Mark"
import Reveal from "../components/ui/Reveal"
import { links, myAnnotatorMonths } from "../content"

const brief = [
	{ label: "Who", value: "A coach preparing alone at a desk" },
	{ label: "Volume", value: "A 90-minute match, 20 to 40 marks" },
	{ label: "Goal", value: "Play it back live with the player" },
]

const features = [
	{ title: "Draw on the video", body: "Arrows, rings, zones and freehand over YouTube or your own files, with undo and shortcuts." },
	{ title: "Replay links", body: "Share a session that deep-links to the exact moment and mark." },
	{ title: "Teams and roles", body: "Owner, coach, staff and viewer roles, collaborators and comments per video." },
	{ title: "Exports", body: "PNG frames, JSON and a printable review sheet for the dressing room." },
	{ title: "Plans and billing", body: "Free, Coach, Team and Club tiers on Stripe, with referral tracking." },
	{ title: "Promo videos in code", body: "Landscape, vertical and short promos rendered with Remotion." },
]

const extensionFacts = [
	{ label: "Permissions", value: "storage, activeTab. Nothing else." },
	{ label: "Sign-in", value: "Not required since 2.2" },
	{ label: "Build", value: "TypeScript + esbuild" },
]

const decisions = [
	{
		title: "Removed the sign-in wall.",
		body: "Since August 2026, guests draw right away and their work saves in the browser. They make an account once it's worth it.",
	},
	{
		title: "Pivoted to one audience.",
		body: "It started as a tool for teachers, students and creators. Narrowing to football coaches made the product, the copy and the look sharper. Even the plans are named for who pays: Coach, Team and Club.",
	},
	{
		title: "Audited the copy against the code.",
		body: "Unshipped features came off the landing page, and shipped ones that were never announced went on.",
	},
	{
		title: "Prototyped ball tracking.",
		body: "A separate Python prototype detects players and the ball with YOLO and RF-DETR, and only accepts ball tracks that move plausibly across the pitch. It stays out of the app until a coach can confirm what it finds. Human in the loop, not auto-magic.",
	},
]

const MyAnnotatorCase = () => {
	return (
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
								<span className="mono text-mint">Case study · Feb 2025 – now</span>
								<h1 className="font-display text-[48px] font-medium leading-none tracking-[-0.03em] sm:text-[64px] lg:text-[80px]">
									My Annotator
								</h1>
								<p className="max-w-[620px] text-lg leading-[1.55] text-fog sm:text-[21px]">
									A telestrator for football coaches, from a side project to a paid product with a Chrome extension.
								</p>
							</Reveal>
							<Reveal className="grid grid-cols-2 gap-x-6 gap-y-5 lg:col-span-5" delay={0.06}>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Role</span>
									<span className="text-[15px]">Everything: product, design, code, ops</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Status</span>
									<span className="text-[15px]">Live, Stripe billing</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Stack</span>
									<span className="text-[15px]">Next.js 16, React 19, Prisma 7</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Link</span>
									<a href={links.myAnnotator} target="_blank" rel="noreferrer" className="link-mint self-start text-[15px]">
										my-annotator.com ↗
									</a>
								</div>
							</Reveal>
						</div>
						<Reveal>
							<img
								src={annotatorImg}
								alt="My Annotator landing page with annotated amateur match footage"
								width={1600}
								height={1000}
								className="block w-full rounded-t-xl shadow-lg"
							/>
						</Reveal>
					</div>
				</section>

				<section className="container-page grid gap-8 py-20 lg:grid-cols-12 lg:gap-16 lg:py-[120px]">
					<span className="mono text-ink-muted lg:col-span-4">The brief</span>
					<Reveal className="flex flex-col gap-10 lg:col-span-8">
						<p className="font-display text-2xl font-normal leading-[1.3] tracking-[-0.01em] sm:text-[34px]">
							Coaches want to show a player exactly what went wrong, on the frame where it happened, without analysis
							software or an analyst.
						</p>
						<dl className="grid gap-4 sm:grid-cols-3 sm:gap-6">
							{brief.map((item) => (
								<div key={item.label} className="flex flex-col gap-2 rounded-lg bg-paper p-6">
									<dt className="mono text-[11px] text-ink-muted">{item.label}</dt>
									<dd className="text-base leading-[1.5]">{item.value}</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</section>

				<section className="container-page flex flex-col gap-10 pb-20 lg:pb-[120px]">
					<div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
						<h2 className="font-display text-[34px] font-medium tracking-[-0.02em] sm:text-[44px]">What I built.</h2>
						<span className="mono text-ink-muted">Built and run solo · {myAnnotatorMonths} months</span>
					</div>
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

				<section className="bg-navy-deep py-20 text-white lg:py-[120px]">
					<div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
						<Reveal className="flex flex-col gap-5 lg:col-span-5">
							<span className="mono text-mint">The extension · v2.3</span>
							<h2 className="font-display text-[34px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
								One click from the match to the board.
							</h2>
							<p className="text-[17px] leading-[1.65] text-fog">
								A Manifest V3 extension adds an Annotate button to YouTube, Vimeo and Wistia pages and opens the clip in
								the app. The button lives in a shadow root so it never fights the host page's styles.
							</p>
							<dl className="flex flex-col">
								{extensionFacts.map((fact) => (
									<div key={fact.label} className="flex justify-between gap-4 border-t border-white/10 py-3 last:border-b">
										<dt className="mono text-[11px] text-fog-faint">{fact.label}</dt>
										<dd className="text-right text-[15px]">{fact.value}</dd>
									</div>
								))}
							</dl>
							<a href={links.myAnnotatorExtension} target="_blank" rel="noreferrer" className="btn-primary h-11 self-start px-[18px]">
								Chrome Web Store ↗
							</a>
						</Reveal>
						<Reveal className="relative lg:col-span-7" delay={0.06}>
							<img
								src={extensionImg}
								alt="Store screenshot: the Annotate this video button on a YouTube match page"
								width={1280}
								height={800}
								loading="lazy"
								className="block w-full rounded-xl shadow-lg"
							/>
							<MarkLayer viewBox="0 0 1280 800" weight={5} d="M 494 716 C 516 711, 538 711, 556 715" className="hidden sm:block">
								<rect x="566" y="682" width="308" height="68" rx="14" fill="none" stroke="#72FFC9" strokeWidth="5" />
							</MarkLayer>
							<Mark className="right-[62%] top-[84%] hidden sm:block">
								<MarkText>Shadow root</MarkText>
								<MarkNote>The host page's CSS can't touch it</MarkNote>
							</Mark>
						</Reveal>
					</div>
				</section>

				<section className="container-page grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-[120px]">
					<div className="flex flex-col gap-4 lg:col-span-4">
						<span className="mono text-ink-muted">Decisions</span>
						<h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
							What I'd tell another solo founder.
						</h2>
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
					<a href={links.highlightsCase} className="group flex items-center justify-between gap-6 rounded-xl bg-paper p-8 sm:px-14 sm:py-12">
						<div className="flex flex-col gap-2.5">
							<span className="mono text-ink-muted">Next case study</span>
							<span className="font-display text-[32px] font-medium tracking-[-0.02em] sm:text-[44px]">Highlights</span>
							<span className="text-base text-ink-body">A 4.3 GB match cut into a reel in about two minutes, in the browser.</span>
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
}

export default MyAnnotatorCase
