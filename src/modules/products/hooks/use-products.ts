import { useQuery } from '@tanstack/react-query'

import { getProduct, getProducts, productQueryKeys } from '../api'
import { type ProductFilters } from '../types'

export const useProducts = (filters: ProductFilters = {}) =>
   useQuery({
      queryKey: productQueryKeys.list(filters),
      queryFn: () => getProducts(filters),
   })

export const useProduct = (id: string | number) =>
   useQuery({
      queryKey: productQueryKeys.detail(id),
      queryFn: () => getProduct(id),
      enabled: id != null && id !== '',
   })
