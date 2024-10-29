import { type ConfigProps } from '~/core/types/_config'

const config: ConfigProps = {
  author: 'faisal tariq',
  theme: 'light',
  appName: 'Clean Starter',
  appDescription: `An open-source starter template for building applications using Next.js with best practices and features.`,

  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: 'next-clean-beryl.vercel.app',

  social: {
    github: 'https://github.com/BinarySenseiii',
    linkedin: 'https://www.linkedin.com/in/faisal-tariq1/',
    instagram: 'https://www.instagram.com/faisal_griz/',
    discord: 'https://discord.gg/cAbzWNQw',
    email: 'faisaltariq1812@gmail.com',
  },
}

export default config
