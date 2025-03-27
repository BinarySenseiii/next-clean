/** @format */

import type React from 'react'
import { type Viewport } from 'next'
import Script from 'next/script'

import '~/styles/index.css'

import { fontInter } from '~/components/ui'
import { appConfig, generateSeoMetadata, jsonLd } from '~/config'
import { cn } from '~/lib'
import RootProviders from '~/providers'

export const viewport: Viewport = {
   themeColor: appConfig.theme,
   width: 'device-width',
   initialScale: 1,
}

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = generateSeoMetadata()

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={cn('min-h-dvh bg-dark-charcoal font-sans antialiased', fontInter.variable)}>
            <Script
               id="jsonLd-data"
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RootProviders>{children}</RootProviders>
         </body>
      </html>
   )
}
