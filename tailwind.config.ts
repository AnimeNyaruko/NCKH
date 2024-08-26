import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
	plugins: [],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0% 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-3deg)' },
					'75%': { transform: 'rotate(3deg)' },
				},
			},
			animation: {
				wiggle: 'wiggle 0.25s linear 0s 2',
			},
		},
	},
};
export default config;
