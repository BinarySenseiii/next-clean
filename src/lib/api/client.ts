import { type AxiosRequestConfig, isAxiosError, type Method } from 'axios'

import axiosInstance from './interceptor'

import { type ApiRouteKeys } from '~/constants'

// Type-safe request handler
export const apiRequest = async <T>(
   method: Method,
   endpoint: ApiRouteKeys,
   data?: unknown,
   config?: AxiosRequestConfig,
): Promise<T> => {
   try {
      const response = await axiosInstance.request<T>({
         url: endpoint,
         method,
         data,
         ...config,
      })

      return response.data
   } catch (error) {
      if (isAxiosError(error)) {
         const errorMessage = error.response?.data?.message || 'Request failed'
         throw new Error(errorMessage)
      }
      throw error
   }
}
