import { createContext, useContext, useEffect, useState } from "react"

export const RenderDateContext = createContext<string | undefined>(undefined)

// Hydrate with the build's date first, then refresh against the visitor's clock.
// Month counters and the copyright year stay current without hydration mismatches.
export const useCurrentDate = () => {
	const renderedAt = useContext(RenderDateContext)
	const [date, setDate] = useState(() => new Date(renderedAt ?? Date.now()))

	useEffect(() => {
		setDate(new Date())
	}, [])

	return date
}
