/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			height: {
				"screen-available": "calc(100vh - var(--header-offset))",
				header: "var(--header-offset)"
			},
			fontFamily: {
				"source-code-pro": ["Source Code Pro", "monospace"]
			},
			colors: {
				boulder: {
					50: "#f7f7f7",
					100: "#e3e3e3",
					200: "#c8c8c8",
					300: "#a4a4a4",
					400: "#818181",
					500: "#666666",
					600: "#515151",
					700: "#434343",
					800: "#383838",
					900: "#161616"
				},
				melrose: {
					50: "#edf4ff",
					100: "#dfe9ff",
					200: "#c5d7ff",
					DEFAULT: "#a2bbff",
					400: "#7d95fc",
					500: "#5e70f6",
					600: "#4148ea",
					700: "#3336cf",
					800: "#2c30a7",
					900: "#2b3184"
				},
				anakiwa: {
					50: "#f0fbff",
					100: "#dff5ff",
					DEFAULT: "#a2e9ff",
					300: "#79e2ff",
					400: "#32d5fe",
					500: "#07c0f0",
					600: "#009ccd",
					700: "#007ca6",
					800: "#036889",
					900: "#095671"
				}
			}
		}
	},
	plugins: []
};
