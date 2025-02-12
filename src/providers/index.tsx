/** @format */

'use client'
import { type ReactNode } from 'react'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster, type ToasterProps } from 'sonner'

import ReactQueryProvider from './react-query'

const providers = [ReactQueryProvider, NuqsAdapter]
const globalComponents = [
   {
      Component: Toaster,
      props: { position: 'top-right', richColors: true } as ToasterProps,
   },
]

const RootProviders = ({ children }: { children: ReactNode }) => {
   return providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      <>
         {globalComponents.map(({ Component, props }, index) => (
            <Component key={index} {...props} />
         ))}
         {children}
      </>,
   )
}

export default RootProviders
