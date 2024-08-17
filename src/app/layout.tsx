import '~/styles/globals.css'

import AppProviders from '~/providers'
import getSeo from '~/lib/seo'
import { fontSans } from '~/components/ui/fonts'
import { cn } from '~/lib/utils'

export const metadata = getSeo()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
