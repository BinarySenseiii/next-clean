import type { Config } from 'tailwindcss'

import { shadcnPreset } from './src/core/lib/shadcn-preset'

const config = {
  presets: [shadcnPreset],
  content: ['./src/**/*.{ts,tsx}'],
} satisfies Config

export default config
