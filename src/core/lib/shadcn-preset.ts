import animatePlugin from 'tailwindcss-animate'

import { shadcnPlugin } from './shadcn-plugin'

import { type Config } from 'tailwindcss'

export const shadcnPreset = {
	darkMode: ['class'],
	content: [],
	plugins: [animatePlugin, shadcnPlugin],
} satisfies Config
