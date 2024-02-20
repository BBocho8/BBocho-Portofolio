import WorkItem from "./WorkItem"
import img from "../assets/rc-rouen.png"
import img2 from "../assets/wk-planner.png"
import img3 from "../assets/sge-replay.png"

const Works = () => {
	return (
		<section id="works" className="px-4 flex flex-col gap-y-4">
			<WorkItem
				title="Racing Club de Rouen"
				desc="A Website for an ambitious football who wants to takeover. Thanks to
					the blog section and the functional shop they will now have an
					advantage over their regional competitors."
				isNext
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
				isStrapi
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
				isContentful
				isTailwind
				img={img3}
				isVite
				isDemo
				isSourceCode
				demoLink="https://sge-replay.netlify.app"
				sourceCodeLink="https://github.com/BBocho8/SGE-Replay"
			/>
		</section>
	)
}
export default Works
