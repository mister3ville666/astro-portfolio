/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// This is your new, custom color palette
    colors: {
    'background': '#111111',      // A deep, dark charcoal instead of pure black
    'surface': '#1a1a1a',       // A slightly lighter surface for cards
    'accent': '#E50914',         // A strong, iconic crimson red (like Netflix)
    'text_primary': '#F5F5F1',    // A clean, off-white for main text
    'text_secondary': '#A3A3A3', // A soft gray for subtext
    'highlight': '#FFFFFF',      // Pure white for important highlights
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