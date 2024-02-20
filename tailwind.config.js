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
			screens: {
				nav: "400px",
				nav2: "550px",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				lato: ["Lato", "sans-serif"],
			},
		},
	},
}
