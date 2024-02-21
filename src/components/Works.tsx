import WorkItem from "./WorkItem"
import img from "../assets/rc-rouen.png"
import img2 from "../assets/wk-planner.png"
import img3 from "../assets/sge-replay.png"
import img4 from "../assets/portfolio.png"

const Works = () => {
	return (
		<section
			id="works"
			className="grid px-4 pt-16 gap-y-4 xl:gap-y-8 xl:grid-cols-2 xl:gap-x-8"
		>
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
				demoLink="https://rc-rouen-app.vercel.app/"
				sourceCodeLink="https://github.com/BBocho8/rc-rouen-app"
			/>
			<WorkItem
				title="My Workout Planner App"
				desc="Explore my workout planner website featuring a vast exercise library and intuitive planning tools. Empower your fitness journey with personalized workouts tailored to your goals."
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
				desc="Introducing SGE Replay: your go-to app for football team members and staff. Access all match results and relive game highlights with ease. Stay connected and informed on your team's performance effortlessly."
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
				desc="This personal portfolio, made with React."
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
