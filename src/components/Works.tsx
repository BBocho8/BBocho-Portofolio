import WorkItem from "./WorkItem"
import img from "../assets/rc-rouen.png"
import img2 from "../assets/wk-planner.png"
import img3 from "../assets/sge-replay.png"
import img4 from "../assets/portfolio.png"

const Works = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
			{/* Section Header */}
			<div className="text-center mb-12 sm:mb-16 fade-in">
				<h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4 hero:text-4xl">
					Featured Projects
				</h2>
				<p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0">
					Here are some of my recent projects that showcase my skills and passion for web development
				</p>
			</div>

			{/* Projects Grid */}
			<div className="grid gap-6 sm:gap-8 lg:gap-12">
				<WorkItem
					title="Racing Club de Rouen"
					desc="A comprehensive website for an ambitious football club looking to expand their reach. Features include a dynamic blog section and a fully functional e-commerce shop, giving them a competitive edge over regional competitors."
					isNext
					isResponsive
					isSanity
					isStripe
					isTailwind
					isMUI
					img={img}
					isDemo
					isSourceCode
					demoLink="https://rc-rouen-app.vercel.app/"
					sourceCodeLink="https://github.com/BBocho8/rc-rouen-app"
				/>
				<WorkItem
					title="My Workout Planner App"
					desc="A comprehensive fitness platform featuring an extensive exercise library and intuitive workout planning tools. Empowers users to create personalized fitness routines tailored to their specific goals and preferences."
					isReact
					isResponsive
					isFirebase
					isTailwind
					isMUI
					img={img2}
					isVite
					isDemo
					isSourceCode
					demoLink="https://wk-planner.netlify.app"
					sourceCodeLink="https://github.com/BBocho8/WK-Planner-App"
				/>
				<WorkItem
					title="SGE Mendig Bell Replay App"
					desc="A specialized mobile-first application designed for football team members and staff. Provides easy access to match results and game highlights, keeping everyone connected and informed about team performance."
					isReact
					isResponsive
					isMobileRecommended
					isPCRecommended={false}
					isContentful
					isTailwind
					img={img3}
					isVite
					isDemo
					isSourceCode
					demoLink="https://sge-replay.netlify.app"
					sourceCodeLink="https://github.com/BBocho8/SGE-Replay"
				/>
				<WorkItem
					title="Brice Braquin - Web Developer Portfolio"
					desc="This personal portfolio showcases my journey as a web developer, built with modern React technologies and featuring a clean, professional design that reflects my passion for creating exceptional digital experiences."
					isReact
					isPCRecommended={false}
					isResponsive
					isTailwind
					img={img4}
					isVite
					isDemo
					isSourceCode
					demoLink="https://bbocho.com"
					sourceCodeLink="https://github.com/BBocho8/BBocho-Portofolio"
				/>
			</div>
		</section>
	)
}

export default Works
