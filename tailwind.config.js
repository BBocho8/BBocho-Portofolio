/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./work/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Bonn Systems design system: mint accent over deep navy, cool neutrals in between
				mint: "#72FFC9",
				navy: {
					DEFAULT: "#272F3F",
					deep: "#1F2739",
					soft: "#38445B",
				},
				paper: "#F4F4F4",
				line: {
					DEFAULT: "#E9E9E9",
					strong: "#D6D9DF",
				},
				ink: {
					DEFAULT: "#272F3F",
					body: "#3E4757",
					muted: "#5B6474",
				},
				// Text on navy surfaces
				fog: {
					DEFAULT: "#C9D0DC",
					dim: "#B4BCCB",
					faint: "#97A0B3",
				},
			},
			fontFamily: {
				display: ["Outfit", "system-ui", "sans-serif"],
				sans: ["Inter", "system-ui", "sans-serif"],
				mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
			},
			borderRadius: {
				sm: "6px",
				md: "10px",
				lg: "14px",
				xl: "20px",
			},
			boxShadow: {
				sm: "0 1px 2px rgba(39, 47, 63, 0.06), 0 4px 16px rgba(39, 47, 63, 0.05)",
				md: "0 8px 28px rgba(39, 47, 63, 0.12)",
				lg: "0 24px 64px rgba(15, 20, 32, 0.38)",
				"mint-glow": "0 8px 32px rgba(114, 255, 201, 0.25)",
			},
			maxWidth: {
				content: "1200px",
			},
			transitionTimingFunction: {
				brand: "cubic-bezier(0.2, 0.8, 0.2, 1)",
			},
			transitionDuration: {
				120: "120ms",
				320: "320ms",
			},
		},
	},
	plugins: [],
}
