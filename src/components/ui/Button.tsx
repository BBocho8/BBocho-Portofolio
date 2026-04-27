import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"

type SharedProps = {
	children: ReactNode
	className?: string
	variant?: ButtonVariant
}

type LinkProps = SharedProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & {
		href: string
		external?: boolean
	}

type NativeButtonProps = SharedProps &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		href?: undefined
		external?: never
	}

type ButtonProps = LinkProps | NativeButtonProps

const variantClasses: Record<ButtonVariant, string> = {
	primary: "button-primary",
	secondary: "button-secondary",
	ghost: "button-ghost",
}

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ")

const Button = ({ children, className, variant = "primary", ...props }: ButtonProps) => {
	const classes = cn(variantClasses[variant], className)

	if ("href" in props && typeof props.href === "string") {
		const { href, external, ...linkProps } = props

		return (
			<a
				href={href}
				className={classes}
				target={external ? "_blank" : undefined}
				rel={external ? "noreferrer" : undefined}
				{...linkProps}
			>
				{children}
			</a>
		)
	}

	return (
		<button type="button" className={classes} {...props}>
			{children}
		</button>
	)
}

export default Button
