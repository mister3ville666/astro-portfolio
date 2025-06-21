/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// This is your new, custom color palette
			colors: {
				'background': '#000000',      // Pure Black for the page background
				'surface': '#210000',       // Very Dark Red for card backgrounds
				'text_primary': '#ff0000',    // Red for main text, as requested
				'text_secondary': '#690000', // Dark Red for subtext
				'accent': '#ff0000',         // Red as the primary accent color
				'highlight': '#ffffff',      // White for high-contrast highlights
			},
			
			// This registers your fonts. Change 'Syne' and 'Inter'
			// if you chose different ones from Google Fonts.
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],      // Your Body Font
				'display': ['Syne', 'sans-serif'], // Your Heading Font
			}
		},
	},
	plugins: [],
}