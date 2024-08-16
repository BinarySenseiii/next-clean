export interface ConfigProps {
  appName: string
  appDescription: string
  domainName: string
  social: Social
}

export interface Social {
  github: string
  linkedin: string
  instagram: string
  discord: string
  email: string
}
