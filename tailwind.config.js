/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export const content = [
	'./pages/**/*.{js,ts,jsx,tsx}',
	'./components/**/*.{js,ts,jsx,tsx}',
	'./app/**/*.{js,ts,jsx,tsx}',
];
export const plugins = [
	plugin(function ({ matchVariant }) {
		matchVariant('childClass', (value) => {
			return `& ${value}`;
		});
	}),
];
export const theme = {
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
};
