import { LuArrowLeft, LuArrowRight } from "react-icons/lu"
import clipsImg from "../assets/highlights-clips.webp"
import exportImg from "../assets/highlights-export.webp"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import { Mark, MarkLayer, MarkNote, MarkText } from "../components/ui/Mark"
import Reveal from "../components/ui/Reveal"
import { highlightsBenchmark as bench, links } from "../content"

const brief = [
	{ label: "Input", value: "A two-hour match file and a Veo list" },
	{ label: "Output", value: "One MP4 in 16:9, 9:16 or 1:1" },
	{ label: "Rule", value: "No upload, no account, no backend" },
]

const benchFacts = [
	{ label: "Input", value: bench.input },
	{ label: "Output", value: bench.output },
	{ label: "Machine", value: bench.machine },
	{ label: "Uploaded", value: "0 bytes" },
]

const pipeline = [
	{
		title: "Read in place",
		body: "Mediabunny reads the MP4 index, then only the byte ranges each clip needs, straight from the picked file. The 4 GB file is never loaded whole.",
	},
	{
		title: "Decode in a worker",
		body: "A Web Worker decodes each clip with WebCodecs while the page stays responsive. Audio is trimmed to the sample, so every cut lands on the clip's edge.",
	},
	{
		title: "Reframe and encode",
		body: "Vertical and square reels are cropped, or fit with blurred bars, on an OffscreenCanvas. Encoded as H.264 and AAC, with other codecs as fallbacks.",
	},
	{
		title: "Stream to disk",
		body: "Positioned writes go straight into the file you picked, through the File System Access API. A long reel never fills memory, and a cancelled export is discarded.",
	},
]

const decisions = [
	{
		title: "Script first, browser second.",
		body: "It started as two Node scripts around ffmpeg on my Mac. Kickoff sync, padding and merging were proven on real footage before there was any interface.",
	},
	{
		title: "Tested the port against the original.",
		body: "A unit test feeds a real Veo list to the web parser and checks it produces the same 65 clips as the script's own dry run.",
	},
	{
		title: "No backend, on purpose.",
		body: "Static files on nginx. A 64 KB request limit and a strict Content Security Policy mean a video can't be uploaded, even by mistake.",
	},
	{
		title: "Exact cuts over instant ones.",
		body: "Copying untouched video between keyframes would export almost instantly, but cuts would snap to the nearest keyframe. This version re-encodes so every cut is exact. At about 7× real time, that trade is worth it.",
	},
]

const HighlightsCase = () => {
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
								<span className="mono text-mint">Case study · 2026</span>
								<h1 className="font-display text-[48px] font-medium leading-none tracking-[-0.03em] sm:text-[64px] lg:text-[80px]">
									Highlights
								</h1>
								<p className="max-w-[620px] text-lg leading-[1.55] text-fog sm:text-[21px]">
									A full match in, a highlight reel out. Cut and encoded in the browser, so the video never leaves the computer.
								</p>
							</Reveal>
							<Reveal className="grid grid-cols-2 gap-x-6 gap-y-5 lg:col-span-5" delay={0.06}>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Role</span>
									<span className="text-[15px]">Everything: product, design, code, ops</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Status</span>
									<span className="text-[15px]">Live, free, no account</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Stack</span>
									<span className="text-[15px]">React, Mediabunny, WebCodecs</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="mono text-[11px] text-fog-faint">Link</span>
									<a href={links.highlights} target="_blank" rel="noreferrer" className="link-mint self-start text-[15px]">
										highlights.qivoa.app ↗
									</a>
								</div>
							</Reveal>
						</div>
						<Reveal className="relative">
							<img
								src={clipsImg}
								alt="Highlights clip review: 65 clips from a real match with thumbnails, start and end controls and a timeline"
								width={1600}
								height={1000}
								fetchpriority="high"
								className="block w-full rounded-t-xl shadow-lg"
							/>
							<MarkLayer viewBox="0 0 1600 1000" weight={4} d="M 696 628 C 640 620, 584 566, 556 506" className="hidden md:block">
								<rect x="62" y="430" width="480" height="70" rx="6" fill="none" stroke="#72FFC9" strokeWidth="4" />
							</MarkLayer>
							<Mark className="left-[44%] top-[61%] hidden md:block">
								<MarkText>65 clips · same as the script</MarkText>
								<MarkNote>Kickoffs mapped from match clock to video time</MarkNote>
							</Mark>
						</Reveal>
					</div>
				</section>

				<section className="container-page grid gap-8 py-20 lg:grid-cols-12 lg:gap-16 lg:py-[120px]">
					<span className="mono text-ink-muted lg:col-span-4">The brief</span>
					<Reveal className="flex flex-col gap-10 lg:col-span-8">
						<p className="font-display text-2xl font-normal leading-[1.3] tracking-[-0.01em] sm:text-[34px]">
							Veo films the match and lists every highlight with a timestamp. Turning that list into a reel you can send
							shouldn't need an editor, an upload or an account.
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

				<section className="bg-navy-deep py-20 text-white lg:py-[120px]">
					<div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
						<Reveal className="flex flex-col gap-6 lg:col-span-5">
							<span className="mono text-mint">Measured on my own match</span>
							<p className="font-display text-[64px] font-medium leading-none tracking-[-0.03em] text-mint sm:text-[88px]">
								{bench.time}
							</p>
							<p className="text-[19px] leading-[1.55] text-fog">
								to cut {bench.clips} clips from a {bench.inputSize}, two-hour match into a {bench.reel} reel. About 7× faster
								than real time.
							</p>
							<dl className="flex flex-col">
								{benchFacts.map((fact) => (
									<div key={fact.label} className="flex justify-between gap-4 border-t border-white/10 py-3 last:border-b">
										<dt className="mono text-[11px] text-fog-faint">{fact.label}</dt>
										<dd className="text-right text-[15px]">{fact.value}</dd>
									</div>
								))}
							</dl>
							<p className="text-sm leading-[1.6] text-fog-faint">
								Run through the app's own export at original quality, written straight to disk.
							</p>
						</Reveal>
						<Reveal className="relative lg:col-span-7" delay={0.06}>
							<img
								src={exportImg}
								alt="Highlights exporting the reel: progress, time left and each clip's status"
								width={1200}
								height={975}
								loading="lazy"
								className="block w-full rounded-xl shadow-lg"
							/>
							<MarkLayer viewBox="0 0 1200 975" weight={5} d="M 620 852 C 610 848, 600 850, 590 855" className="hidden sm:block">
								<ellipse cx="368" cy="856" rx="216" ry="46" fill="none" stroke="#72FFC9" strokeWidth="5" />
							</MarkLayer>
							<Mark className="left-[52%] top-[83%] hidden sm:block">
								<MarkText>Streamed to disk</MarkText>
								<MarkNote>Never held whole in memory</MarkNote>
							</Mark>
						</Reveal>
					</div>
				</section>

				<section className="container-page flex flex-col gap-10 py-20 lg:py-[120px]">
					<div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
						<h2 className="font-display text-[34px] font-medium tracking-[-0.02em] sm:text-[44px]">How it works.</h2>
						<span className="mono text-ink-muted">All in the browser tab</span>
					</div>
					<ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{pipeline.map((step, index) => (
							<Reveal as="li" key={step.title} delay={index * 0.05} className="relative flex flex-col gap-2.5 rounded-lg border border-line p-7">
								<span className="mono text-[11px] text-ink-muted">0{index + 1}</span>
								<h3 className="font-display text-[22px] font-medium">{step.title}</h3>
								<p className="text-[15px] leading-[1.6] text-ink-body">{step.body}</p>
								{index < pipeline.length - 1 && (
									<LuArrowRight
										size={20}
										aria-hidden="true"
										className="absolute -right-[19px] top-1/2 hidden -translate-y-1/2 rounded-full bg-mint p-0.5 text-navy-deep lg:block"
									/>
								)}
							</Reveal>
						))}
					</ol>
				</section>

				<section className="container-page grid gap-10 pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-[120px]">
					<div className="flex flex-col gap-4 lg:col-span-4">
						<span className="mono text-ink-muted">Decisions</span>
						<h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
							Trade-offs I'd make again.
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
					<a href={links.myAnnotatorCase} className="group flex items-center justify-between gap-6 rounded-xl bg-paper p-8 sm:px-14 sm:py-12">
						<div className="flex flex-col gap-2.5">
							<span className="mono text-ink-muted">Next case study</span>
							<span className="font-display text-[32px] font-medium tracking-[-0.02em] sm:text-[44px]">My Annotator</span>
							<span className="text-base text-ink-body">A telestrator for coaches, from side project to paid product.</span>
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

export default HighlightsCase
