import { type ProductFilters } from '../types'

/**
 * Hierarchical query-key factory. Every key descends from `all`, so a broad
 * `invalidateQueries({ queryKey: productQueryKeys.all })` cascades to every
 * list and detail entry, while narrower keys invalidate just their slice.
 */
export const productQueryKeys = {
   all: ['products'] as const,
   lists: () => [...productQueryKeys.all, 'list'] as const,
   list: (filters: ProductFilters = {}) => [...productQueryKeys.lists(), filters] as const,
   details: () => [...productQueryKeys.all, 'detail'] as const,
   detail: (id: string | number) => [...productQueryKeys.details(), id] as const,
} as const
