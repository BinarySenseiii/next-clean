'use client'

import { type ReactNode, useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { toast } from 'sonner'

// https://tkdodo.eu/blog/react-query-error-handling
interface ReactQueryProviderProps {
   children: ReactNode
}

const RETRY_COUNT = 2

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
   const [queryClient] = useState(() => {
      return new QueryClient({
         defaultOptions: {
            queries: {
               staleTime: 1000 * 60 * 5, // 5 minutes
               gcTime: 1000 * 60 * 15, // 15 minutes
               retry: (failureCount, error) => {
                  if (error instanceof Error && error.message === '404') return false

                  return failureCount < RETRY_COUNT
               },
            },
            mutations: {
               retry: failureCount => failureCount < RETRY_COUNT,
               onError: error => {
                  toast.error(`Mutation failed: ${error.message}`)
               },
            },
         },
         queryCache: new QueryCache({
            onError: (error, query) => {
               // 🎉 only show error toasts if we already have data in the cache
               // which indicates a failed background update
               query.state.data !== undefined
                  ? toast.error(`Background update failed: ${error.message}`)
                  : toast.error(`Failed to load data: ${error.message}`, {
                       action: {
                          label: 'Reload',
                          onClick: () => window.location.reload(),
                       },
                    })
            },
         }),
      })
   })

   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
   )
}

export default ReactQueryProvider
