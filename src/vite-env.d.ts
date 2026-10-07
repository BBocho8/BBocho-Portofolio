/// <reference types="vite/client" />

import "react"

// React 18 forwards the lowercase browser attribute; its older types omit it.
declare module "react" {
	interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
		fetchpriority?: "high" | "low" | "auto"
	}
}
