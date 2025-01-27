/** @format */

import type React from 'react'
import {type Viewport} from 'next'

import '~/core/styles/index.css'

import {fontInter} from '~/core/components/ui/fonts'
import config from '~/core/constant/config'
import {getSEOTags, renderJsonLd} from '~/core/lib/seo'
import {cn} from '~/core/lib/utils'
import RootProviders from '~/core/providers'

export const viewport: Viewport = {
  themeColor: config.theme,
  width: 'device-width',
  initialScale: 1,
}

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-dvh bg-dark-charcoal font-sans antialiased', fontInter.variable)}>
        {renderJsonLd()}
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}
