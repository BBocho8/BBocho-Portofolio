import clubSiteKitImg from "../assets/clubsitekit.webp"
import sveImg from "../assets/sve.webp"
import CaseStudy from "../components/CaseStudy"
import Reveal from "../components/ui/Reveal"
import { links } from "../content"

const features = [
	{ title: "The weekly club work", body: "News, teams, players, fixtures, standings and sponsors are structured CMS records. Volunteers update the content instead of editing page layouts or code." },
	{ title: "Roles that fit the club", body: "Editors publish news, football managers maintain sporting information, and shop managers handle products and orders. Payload enforces these permissions on the server." },
	{ title: "Two club templates", body: "Two complete designs use the same kind of club content and operating workflows. Real demo sites let a club try the layout before choosing a website." },
	{ title: "An editable identity", body: "Club content, media and design settings live in Payload. German and English content share one CMS, with a consistent public navigation and mobile layout." },
	{ title: "A working club shop", body: "Products and coupons sync with Stripe. Paid orders reserve stock once; shop managers handle pickup, delivery and tracking from the CMS." },
	{ title: "A product storefront", body: "ClubSiteKit has its own CMS for templates, service packages and FAQs, plus lead capture and Stripe Checkout for website packages." },
]

const decisions = [
	{ title: "Start with the club I know.", body: "I play for SVE Mendig. Building around its news, teams, fixtures and shop gave the templates concrete workflows before I packaged them for other amateur clubs." },
	{ title: "Make the CMS part of the product.", body: "A good public page still fails if nobody can keep it current. Content models and permissions follow the jobs people do at the club, with separate responsibility for editorial, football and shop work." },
	{ title: "Reuse the workflow, vary the design.", body: "The two templates offer different presentations while carrying forward the CMS, commerce and deployment setup. The storefront makes the designs and service packages understandable before an enquiry." },
	{ title: "Keep fulfilment with the club.", body: "Stripe handles payments; Payload holds the operational order. A paid checkout becomes a stock reservation and an order volunteers can move through pickup or shipping, with a private status link for the customer." },
]

const ClubSiteKitCase = () => (
	<CaseStudy
		name="ClubSiteKit"
		period="2026"
		summary="From my club's website to a product: ready-made websites for amateur football clubs, with a CMS for volunteers and a shop they can run."
		facts={[
			{ label: "Role", value: "Everything: product, design, code, ops" },
			{ label: "Scope", value: "Club templates + product storefront" },
			{ label: "Stack", value: "Next.js, Payload CMS, Postgres, Stripe" },
		]}
		href={links.clubSiteKit}
		image={clubSiteKitImg}
		imageAlt="ClubSiteKit website introducing its amateur football club website system and an SVE Mendig template preview"
		brief="A club website has to survive the week after launch: someone needs to publish the match report, update the next fixture and hand over a shop order. Those people are volunteers."
		briefFacts={[
			{ label: "Starting point", value: "My own club, SVE Mendig" },
			{ label: "Users", value: "Editors, football and shop managers" },
			{ label: "Result", value: "Club templates and a sales site" },
		]}
		features={features}
		decisions={decisions}
		next={{ href: links.myAnnotatorCase, name: "My Annotator", summary: "A telestrator for coaches, from side project to paid product." }}
	>
		<section className="bg-navy-deep py-20 text-white lg:py-[120px]">
			<div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
				<Reveal className="flex flex-col gap-5 lg:col-span-5">
					<span className="mono text-mint">The starting point · SVE Mendig</span>
					<h2 className="font-display text-[34px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">Built around a real club's week.</h2>
					<p className="text-[17px] leading-[1.65] text-fog">The next match, recent results, news and teams give supporters a reason to return. Behind those pages, the CMS gives each volunteer the records they need to maintain.</p>
					<dl className="flex flex-col">
						{[
							{ label: "Editorial", value: "News, media, pages and sponsors" },
							{ label: "Football", value: "Teams, players, matches and standings" },
							{ label: "Shop", value: "Products, stock, orders and fulfilment" },
						].map((fact) => (
							<div key={fact.label} className="flex justify-between gap-4 border-t border-white/10 py-3 last:border-b">
								<dt className="mono text-[11px] text-fog-faint">{fact.label}</dt>
								<dd className="text-right text-[15px]">{fact.value}</dd>
							</div>
						))}
					</dl>
					<a href={links.sveTemplate} target="_blank" rel="noreferrer" className="btn-primary h-11 self-start px-[18px]">Explore the club template ↗</a>
				</Reveal>
				<Reveal className="lg:col-span-7" delay={0.06}>
					<img src={sveImg} alt="SVE Mendig club template showing the next match, news, team navigation and club shop" width={1600} height={1000} loading="lazy" className="block w-full rounded-xl shadow-lg" />
				</Reveal>
			</div>
		</section>
	</CaseStudy>
)

export default ClubSiteKitCase
