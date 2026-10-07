import qivoaImg from "../assets/qivoa.webp"
import CaseStudy from "../components/CaseStudy"
import Reveal from "../components/ui/Reveal"
import { links } from "../content"

const features = [
	{ title: "A living Deal dossier", body: "A listing starts the dossier. Seller replies, photos, receipts and inspection results add evidence, then update the facts, risks and recommendation." },
	{ title: "Several ways in", body: "Paste a link or text, add photos, or share a listing from the phone. A Chrome extension hands supported listing URLs to the web app." },
	{ title: "Facts with provenance", body: "Seller claims, detected details, user corrections and inspection evidence keep their sources. Conflicting information stays recorded instead of disappearing." },
	{ title: "Product-specific checks", body: "Reusable product knowledge defines what matters for a console, phone or laptop. Each applicable risk stays present, cleared or unknown as evidence changes." },
	{ title: "A market-backed range", body: "Comparable active listings inform the range. Exact and adjusted near matches carry separate weights, original prices and explanations of their adjustments." },
	{ title: "The next useful action", body: "Unresolved facts become seller questions and inspection checks. Negotiation drafts are editable and copied by the buyer; the app sends nothing to the seller." },
]

const pipeline = [
	{ title: "Capture the source", body: "Keep the listing, reply or image attached as evidence." },
	{ title: "Extract candidates", body: "Validate structured facts against the product's attribute definitions." },
	{ title: "Resolve the evidence", body: "Apply corrections and inspection results without losing prior claims." },
	{ title: "Recompute the dossier", body: "Derive risks, confidence, valuation and the next action in domain code." },
]

const decisions = [
	{ title: "Give AI a narrow job.", body: "AI extracts and classifies information behind typed, validated contracts. It doesn't calculate the price range or clear risks. Interactive updates let the buyer review proposed facts before applying them." },
	{ title: "Put product knowledge in one place.", body: "The ontology defines attributes, risks and inspection bindings. Adding a product means extending those definitions, rather than scattering special cases through the API and screens." },
	{ title: "Show where the evidence stops.", body: "Active asking prices are not completed sales. When comparable evidence is missing, Qivoa omits the price component rather than pretending to know whether the deal is cheap. An unchecked risk remains unknown." },
	{ title: "Treat a guest's dossier as private.", body: "Guests receive real authenticated sessions. The Hono API checks ownership on Deal requests, so the same boundary protects saved evidence before and after account creation." },
]

const QivoaCase = () => (
	<CaseStudy
		name="Qivoa"
		period="2026"
		summary="Know before you buy. A second-hand listing becomes a living dossier of facts, risks, market evidence and questions worth asking."
		facts={[
			{ label: "Role", value: "Everything: product, design, code, ops" },
			{ label: "Surfaces", value: "Web, Expo mobile client, Chrome extension" },
			{ label: "Stack", value: "React 19, Expo, Hono, Prisma, Postgres" },
		]}
		href={links.qivoa}
		image={qivoaImg}
		imageAlt="Qivoa marketing page with an illustrative console listing, separate seller claims, market observations and a next action"
		imageCaption="Marketing page · the console listing and price example are illustrative."
		brief="Buying second-hand means deciding from incomplete information. I wanted a tool that shows what is known, what is still a claim, and what to check before paying."
		briefFacts={[
			{ label: "Input", value: "A listing and the evidence that follows" },
			{ label: "Output", value: "A dossier that evolves with the deal" },
			{ label: "Principle", value: "Every conclusion has an evidence trail" },
		]}
		features={features}
		decisions={decisions}
		next={{ href: links.clubSiteKitCase, name: "ClubSiteKit", summary: "From my club's website to a system other clubs can use." }}
	>
		<section className="bg-navy-deep py-20 text-white lg:py-[120px]">
			<div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
				<Reveal className="flex flex-col gap-5 lg:col-span-5">
					<span className="mono text-mint">Inside the product</span>
					<h2 className="font-display text-[34px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">Evidence in. A reasoned next move out.</h2>
					<p className="text-[17px] leading-[1.65] text-fog">The interface is a dossier, with facts, risks, valuation and inspection. The buyer can see why the recommendation changed after a seller reply or a check in person.</p>
					<p className="text-[17px] leading-[1.65] text-fog">Web and mobile consume the same API contracts. The API persists evidence and revisions; deterministic domain code owns the decision rules.</p>
					<a href={links.qivoa} target="_blank" rel="noreferrer" className="btn-primary h-11 self-start px-[18px]">Explore Qivoa ↗</a>
				</Reveal>
				<Reveal className="lg:col-span-7" delay={0.06}>
					<ol className="flex flex-col rounded-xl border border-white/15 px-6 sm:px-8">
						{pipeline.map((step, index) => (
							<li key={step.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-4 border-b border-white/10 py-6 last:border-0">
								<span className="mono pt-1 text-mint">0{index + 1}</span>
								<div className="flex flex-col gap-2">
									<h3 className="font-display text-[22px] font-medium">{step.title}</h3>
									<p className="text-[15px] leading-[1.6] text-fog">{step.body}</p>
								</div>
							</li>
						))}
					</ol>
				</Reveal>
			</div>
		</section>
	</CaseStudy>
)

export default QivoaCase
