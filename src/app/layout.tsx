import '~/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import AppProviders from '~/providers'
import getSeo from '~/lib/seo'

export const metadata = getSeo()

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
