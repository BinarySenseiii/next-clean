/** @format */

export interface Social {
   github: string
   linkedin: string
   instagram: string
   discord: string
   email: string
}

export type Theme = 'light' | 'dark'

export interface Crisp {
   id?: string
   onlyShowOnRoutes?: string[]
}

export interface ConfigProps {
   author: string
   theme: Theme
   appName: string
   appDescription: string
   domainName: string
   social: Social
}
