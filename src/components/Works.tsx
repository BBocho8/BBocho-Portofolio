import WorkItem from "./WorkItem"
import img from "../assets/rc-rouen.png"
import img2 from "../assets/wk-planner.png"
import img3 from "../assets/sge-replay.png"
import img4 from "../assets/portfolio.png"

const Works = () => {
	return (
		<section id="works" className="px-4 flex flex-col gap-y-4 pt-16">
			<WorkItem
				title="Racing Club de Rouen"
				desc="A Website for an ambitious football who wants to takeover. Thanks to
					the blog section and the functional shop they will now have an
					advantage over their regional competitors."
				isNext
				isResponsive
				isSanity
				isStripe
				isTailwind
				isMUI
				img={img}
				isDemo
				isSourceCode
				demoLink="https://google.com"
				sourceCodeLink="https://google.com"
			/>
			<WorkItem
				title="My Workout Planner App"
				desc="A Website for an ambitious football who wants to takeover. Thanks to
					the blog section and the functional shop they will now have an
					advantage over their regional competitors."
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
				title="SGE Mendig Bell Replay App "
				desc="A Website for an ambitious football who wants to takeover. Thanks to
					the blog section and the functional shop they will now have an
					advantage over their regional competitors."
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
				title="Brice Braquin - Web Developer Portfolio "
				desc="A Website for an ambitious football who wants to takeover. Thanks to
					the blog section and the functional shop they will now have an
					advantage over their regional competitors."
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
		</section>
	)
}
export default Works
