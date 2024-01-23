module.exports = {
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html',
		// /* './node_modules/tw-elements-react/dist/js/**.js',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				graydark: '#1a202c',
			},
			fontFamily: {
				oswald: ['oswald'],
			},

			inset: {
				'1/1.8': '60%',
				'1/2.2': '47%',
				'1/2.5': '40%',
				'1/2.7': '30%',
				'1/5': '20%',
				'1/5.5': '18%',
				'1/6': '16%',
				'1/7': '14%',
				'1/8': '12.5%',
				'1/9': '11%',
				'1/10': '10%',
			},

			animation: {
				fadeIn: 'fadeIn 1s ease-in',
				animate_left: 'slideInLeft 0.5s ease-out will-change-transform',
				animate_right: 'slideInRight 0.5s ease-out will-change-transform',
			},

			keyframes: theme => ({
				fadeIn: {
					'0%': { backgroundColor: theme('colors.transparent') },
					'100%': { backgroundColor: theme('colors.red.600') },
				},
				/* slideInLeft: {
					'0%': { transform: 'translateX(0) opacity-0' },
					'100%': { transform: 'translateX(100%) opacity-1' },
				},
				slideInRight: {
					'0%': { transform: 'translateX(0) opacity-0' },
					'100%': { transform: 'translateX(-100%) opacity-1' },
				}, */
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		/* require('tw-elements-react/dist/plugin.cjs') */
	],
};

/* @keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
*/

/* Animation classes */
// .animate-left {
//   animation: slideInLeft 0.5s ease-out;
// }

// .animate-right {
//   animation: slideInRight 0.5s ease-out;
// }
