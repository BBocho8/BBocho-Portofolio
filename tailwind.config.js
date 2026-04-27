/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: "hsl(var(--bg) / <alpha-value>)",
				"bg-elevated": "hsl(var(--bg-elevated) / <alpha-value>)",
				panel: "hsl(var(--panel) / <alpha-value>)",
				"panel-strong": "hsl(var(--panel-strong) / <alpha-value>)",
				text: "hsl(var(--text) / <alpha-value>)",
				muted: "hsl(var(--muted) / <alpha-value>)",
				line: "hsl(var(--line) / <alpha-value>)",
				accent: "hsl(var(--accent) / <alpha-value>)",
				"accent-strong": "hsl(var(--accent-strong) / <alpha-value>)",
				"accent-soft": "hsl(var(--accent-soft) / <alpha-value>)",
			},
			fontFamily: {
				body: ["Manrope", "sans-serif"],
				display: ["Space Grotesk", "sans-serif"],
			},
			boxShadow: {
				card: "0 18px 54px -32px hsl(220 70% 5% / 0.28)",
				"card-strong": "0 24px 80px -38px hsl(220 70% 5% / 0.4)",
			},
		},
	},
	plugins: [],
};
