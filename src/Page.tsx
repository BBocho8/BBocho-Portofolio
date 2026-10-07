import { StrictMode, type ReactNode } from "react"
import { MotionConfig } from "framer-motion"
import { RenderDateContext } from "./hooks/useCurrentDate"

const Page = ({ children, renderedAt }: { children: ReactNode; renderedAt?: string }) => (
	<StrictMode>
		<RenderDateContext.Provider value={renderedAt}>
			<MotionConfig reducedMotion="user">{children}</MotionConfig>
		</RenderDateContext.Provider>
	</StrictMode>
)

export default Page
