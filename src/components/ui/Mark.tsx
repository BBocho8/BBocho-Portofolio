import { ReactNode, useId } from "react"

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ")

type MarkProps = {
	children: ReactNode
	className?: string
	surface?: "deep" | "navy"
}

// Telestrator label: sharp corners on purpose, like the brand's pixel brackets
export const Mark = ({ children, className, surface = "deep" }: MarkProps) => (
	<div
		className={cn(
			"absolute border-[1.5px] border-mint px-2.5 py-1.5",
			surface === "deep" ? "bg-navy-deep" : "bg-navy",
			className,
		)}
	>
		{children}
	</div>
)

export const MarkText = ({ children }: { children: ReactNode }) => (
	<span className="mono block text-[11px] text-mint">{children}</span>
)

type ArrowProps = {
	d: string
	viewBox: string
	dashed?: boolean
	children?: ReactNode
}

// Drawn over an image whose container shares the viewBox's aspect ratio, so marks stay put at any width
export const MarkLayer = ({ d, viewBox, dashed = true, children }: ArrowProps) => {
	const markerId = useId()

	return (
		<svg viewBox={viewBox} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
			<defs>
				<marker id={markerId} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
					<path d="M0 0 L10 5 L0 10 z" fill="#72FFC9" />
				</marker>
			</defs>
			{children}
			<path
				d={d}
				fill="none"
				stroke="#72FFC9"
				strokeWidth="3"
				strokeLinecap="round"
				strokeDasharray={dashed ? "12 9" : undefined}
				markerEnd={`url(#${markerId})`}
			/>
		</svg>
	)
}
