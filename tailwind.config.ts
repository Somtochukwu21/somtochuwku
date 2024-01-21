import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
			},
			backgroundColor: {
				primary: "#DAE9FD",
				secondary: "#2d3748",
				light: "#fffff",
			},
			colors: { blue: "#7371FC" },
		},
	},
	plugins: [],
};
export default config;
