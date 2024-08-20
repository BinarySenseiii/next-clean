import { Roboto } from 'next/font/google'

export const fontSans = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '700', '900'],
})
