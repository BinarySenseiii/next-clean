import React from 'react'
import { type Viewport } from 'next'

import '~/core/styles/globals.css'

import { fontSans } from '~/core/components/design-system/fonts'
import config from '~/core/constant/config'
import { getSEOTags } from '~/core/lib/seo'
import { cn } from '~/core/lib/utils'
import AppProviders from '~/core/providers'

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
      <body className={cn('min-h-dvh bg-background font-sans antialiased', fontSans.variable)}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
