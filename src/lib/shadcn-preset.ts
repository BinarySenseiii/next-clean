import { type Config } from 'tailwindcss'
import { shadcnPlugin } from './shadcn-plugin'
import animatePlugin from 'tailwindcss-animate'

export const shadcnPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config
