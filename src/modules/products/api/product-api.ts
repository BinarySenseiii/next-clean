import { type Product, type ProductFilters } from '../types'

import { API_ENDPOINTS } from '~/constants'
import { apiRequest } from '~/lib/api'

const { LIST } = API_ENDPOINTS.PRODUCTS

export const getProducts = (filters: ProductFilters = {}) =>
   apiRequest<Product[]>('GET', LIST, undefined, { params: filters })

export const getProduct = (id: string | number) => apiRequest<Product>('GET', `${LIST}/${id}`)

export const createProduct = (payload: Omit<Product, 'id'>) => apiRequest<Product>('POST', LIST, payload)

export const updateProduct = ({ id, ...payload }: Product) => apiRequest<Product>('PATCH', `${LIST}/${id}`, payload)

export const deleteProduct = (id: string | number) => apiRequest<void>('DELETE', `${LIST}/${id}`)
