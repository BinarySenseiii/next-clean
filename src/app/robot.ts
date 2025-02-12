/** @format */

import { type MetadataRoute } from 'next'

import { appConfig } from '~/constant'

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/private/',
      },
      sitemap: `https://${appConfig.domainName}/sitemap.xml`,
   }
}
