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
			backgroundColor: { primary: "#DAE9FD" ,secondary:'#1DA1F2'},
			colors: { blue: "#1DA1F2" },
		},
	},
	plugins: [],
};
export default config;
