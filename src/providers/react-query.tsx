/** @format */

import type React from 'react'
import { type ReactNode, useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { toast } from 'sonner'

interface ReactQueryProviderProps {
   children: ReactNode
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => {
   const [queryClient] = useState(
      () =>
         new QueryClient({
            queryCache: new QueryCache({
               onError: (error, query) => {
                  // 🎉 only show error toasts if we already have data in the cache
                  // which indicates a failed background update
                  if (query.state.data !== undefined) {
                     toast.error(`Something went wrong: ${error.message}`)
                  }
               },
            }),
         }),
   )

   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   )
}
export default ReactQueryProvider
