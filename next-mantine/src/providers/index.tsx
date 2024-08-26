'use client'
import React, { type ReactNode } from 'react'
import ReactQueryProvider from './react-query'
import MantineWrapper from './mantine-wrapper'

interface AppProvidersProps {
  children: ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <MantineWrapper>{children}</MantineWrapper>
    </ReactQueryProvider>
  )
}
export default AppProviders
