import type React from 'react'
import { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface ReactQueryProviderProps {
	children: ReactNode
}

const queryClient = new QueryClient()

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
	children,
}) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
export default ReactQueryProvider
