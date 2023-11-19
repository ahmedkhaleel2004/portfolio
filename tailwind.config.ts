import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			spacing: {
				customNav: "7.25rem", // Add custom spacing
			},
			colors: {
				"body-grey": "#171717",
				"body-light-grey": "#454545",
				"nice-blue": "#6088f0",
			},
			fontFamily: {
				body: ["var(--font-roboto-mono)"],
			},
		},
	},
	plugins: [],
};
export default config;
