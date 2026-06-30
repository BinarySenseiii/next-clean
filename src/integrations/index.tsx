/** @format */

'use client'

import type { ReactNode } from 'react'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster, type ToasterProps } from 'sonner'

import ReactQueryProvider from './react-query'

// Define providers as an array of components which have children
const providers = [ReactQueryProvider, NuqsAdapter] as const

// Define global components with their props
const globalComponents = [
   {
      Component: Toaster,
      props: { position: 'top-right', richColors: true } as ToasterProps,
   },
]

/**
 * RootProviders component to compose multiple providers and render global components.
 * Ensures proper nesting of providers and avoids deeply nested JSX.
 */
const RootProviders = ({ children }: { children: ReactNode }) => {
   // Render global components alongside the main content
   const renderGlobalComponents = () => (
      <>
         {globalComponents.map(({ Component, props }, index) => (
            <Component key={index} {...props} />
         ))}
         {children}
      </>
   )

   // Compose providers using reduceRight to ensure correct nesting order
   return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, renderGlobalComponents())
}

export default RootProviders
