'use client'
import React, { type ReactNode } from 'react'

import ReactQueryProvider from './react-query'
import SoonerToaster from './sooner-toaster'

type AppProvidersProps = {
  children: ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      {children}
      <SoonerToaster />
    </ReactQueryProvider>
  )
}
export default AppProviders
