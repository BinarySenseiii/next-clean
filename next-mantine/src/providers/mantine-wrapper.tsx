import { MantineProvider } from '@mantine/core'
import React, { type ReactNode } from 'react'
import theme from './mantine-theme'

interface MantineWrapperProps {
  children: ReactNode
}

const MantineWrapper: React.FC<MantineWrapperProps> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
export default MantineWrapper
