/* global require */

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["business"],
	},
	theme: {
		extend: {
			animation: {
				bounce: "bounce 0.75s  infinite",
			},
			screens: {
				nav: "400px",
				nav2: "550px",
				hero: "600px",
			},
			height: {
				hero0: "calc(100vh - 74px)",
				hero1: "calc(100vh - 90px)",
				hero2: "calc(100vh - 62px)",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				lato: ["Lato", "sans-serif"],
			},
		},
	},
}
