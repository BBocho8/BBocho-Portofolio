import { type ReactNode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import Page from "./Page"

export const mount = (children: ReactNode) => {
	const root = document.getElementById("root")!
	const page = <Page renderedAt={root.dataset.renderedAt}>{children}</Page>

	if (root.hasChildNodes()) {
		hydrateRoot(root, page)
	} else {
		createRoot(root).render(page)
	}
}
