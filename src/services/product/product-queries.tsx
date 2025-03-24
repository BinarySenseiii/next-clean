import { useQuery } from '@tanstack/react-query'

import { productQueryKeys } from './product-query-keys'

export const useAllProducts = () =>
   useQuery({
      queryKey: productQueryKeys.all(),
      queryFn: async () => {
         const response = await fetch('/api/products')
         if (!response.ok) {
            throw new Error('Network response was not ok')
         }

         return response.json()
      },
   })
