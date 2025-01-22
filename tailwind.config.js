/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				appGreen: "#90ee90",
				appYellow: "#DDDD00",
				appRed: "#ff6868",
				appBlack: "#121213",
				appGrey: "#d3d3d3",
				appWhite: "#fff",
			},
		},
	},
	plugins: [],
};
