import { shadcnPreset } from './src/core/lib/shadcn-preset'
import type { Config } from 'tailwindcss'

const config = {
	presets: [shadcnPreset],
	content: ['./src/**/*.{ts,tsx}'],
} satisfies Config

export default config
