/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				contrail: "'Contrail One', sans-serif ",
				plex_mono: "'IBM Plex Mono', mono ",
				plex_sans: "'IBM Plex Sans', sans-serif ",
				plex_serif: "'IBM Plex Serif', serif ",
				caveat: "'Caveat Variable', sans-serif "
			},
			colors: {
				darkest: '#18181b',
				darker: '#27272a',
				dark: '#737373',
				light: '#d9d9d9',
				lighter: '#FFFBF5'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
