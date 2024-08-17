export interface Social {
  github: string
  linkedin: string
  instagram: string
  discord: string
  email: string
}

export type Theme = 'light' | 'dark'

export type Crisp = {
  id?: string
  onlyShowOnRoutes?: string[]
}

export interface Mailgun {
  subdomain: string
  fromNoReply: string
  fromAdmin: string
  supportEmail?: string
  forwardRepliesTo?: string
}

export interface Plan {
  isFeatured?: boolean
  priceId: string
  name: string
  description?: string
  price: number
  priceAnchor?: number
  features: Array<{
    name: string
  }>
}
export interface ConfigProps {
  theme: Theme
  appName: string
  appDescription: string
  domainName: string
  social: Social
  mailgun: Mailgun
  stripe: {
    plans: Plan[]
  }
}
