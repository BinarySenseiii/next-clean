import { type AxiosRequestConfig, type Method } from 'axios'

import axiosInstance, { ApiError } from './interceptor'

import { type ApiEndpoint } from '~/constants'

export { ApiError }

// Type-safe request handler. Errors are normalized to `ApiError` by the
// response interceptor, so this wrapper only has to unwrap the payload.
export const apiRequest = async <T>(
   method: Method,
   endpoint: ApiEndpoint,
   data?: unknown,
   config?: AxiosRequestConfig,
): Promise<T> => {
   const response = await axiosInstance.request<T>({
      url: endpoint,
      method,
      data,
      ...config,
   })

   return response.data
}
