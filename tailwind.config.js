/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary_navyBlue: '#023047',
				primary_yellow: '#ffb703',
				primary_orange: '#fb8500',
				primary_blue: '#219ebc',
				secondary_blue: '#8ecae6'
			}
		}
	},
	plugins: []
};
