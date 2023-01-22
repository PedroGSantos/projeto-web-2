/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{html,js}"],
	theme: {
		screens: {
			pq: "375px",
			sm: "640px",
			md: "870px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			colors: {
				primaryRed: "#FF0707",
				white: "#FFF",
				positive: "#26C90B",
			},
		},
	},
	plugins: [],
};
