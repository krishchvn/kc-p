// craco.config.js
module.exports = {
	style: {
		postcss: {
			plugins: [
				require('tailwindcss'),
				require('autoprefixer'),
				/* require('tw-elements-react/dist/plugin.cjs') */
			],
		},
	},
};
