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

// The second line of a mark: what the label means, in plain words
export const MarkNote = ({ children }: { children: ReactNode }) => (
	<span className="mt-0.5 block text-[13px] font-medium leading-snug text-white">{children}</span>
)

type ArrowProps = {
	d?: string
	viewBox: string
	dashed?: boolean
	// Stroke width in viewBox units: raise it for large viewBoxes so the line still renders around 3px
	weight?: number
	className?: string
	children?: ReactNode
}

// Drawn over an image whose container shares the viewBox's aspect ratio, so marks stay put at any width
export const MarkLayer = ({ d, viewBox, dashed = true, weight = 3, className, children }: ArrowProps) => {
	const markerId = useId()

	return (
		<svg
			viewBox={viewBox}
			aria-hidden="true"
			className={cn("pointer-events-none absolute inset-0 h-full w-full overflow-visible", className)}
		>
			<defs>
				<marker id={markerId} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
					<path d="M0 0 L10 5 L0 10 z" fill="#72FFC9" />
				</marker>
			</defs>
			{children}
			{d && (
				<path
					d={d}
					fill="none"
					stroke="#72FFC9"
					strokeWidth={weight}
					strokeLinecap="round"
					strokeDasharray={dashed ? `${weight * 4} ${weight * 3}` : undefined}
					markerEnd={`url(#${markerId})`}
				/>
			)}
		</svg>
	)
}
