/** @format */

import axios, {
   type AxiosError,
   type AxiosInstance,
   type AxiosRequestConfig,
   type AxiosResponse,
   isAxiosError,
   type Method,
} from 'axios'

import { appConfig } from '~/constant'

const BASE_URL = `https://${appConfig.domainName}`

const axiosInstance: AxiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

const handleError = (error: AxiosError): void => {
   if (isAxiosError(error)) {
      console.error(`API error on ${error.config?.url}: ${error.message}`)
   } else {
      console.error('Unexpected error:', error)
   }
}

axiosInstance.interceptors.response.use(
   (response: AxiosResponse) => {
      const authorization = response.headers['authorization']

      if (authorization) {
         console.log('have access to some headers')
      }

      return response
   },
   (error: AxiosError) => {
      handleError(error)

      return Promise.reject(error)
   },
)

/**
 * Generic request handler to handle all types of requests with a consistent pattern.
 * @param endpoint - API endpoint to request.
 * @param options - Axios configuration options, including method and data.
 * @returns A promise resolving with the response data.
 */
export const handleRequest = async <T>(
   endpoint: string,
   options: AxiosRequestConfig & { method: Method },
): Promise<T> => {
   try {
      const response: AxiosResponse<T> = await axiosInstance(endpoint, options)

      return response.data
   } catch (error) {
      if (isAxiosError(error)) {
         throw new Error(`API request failed: ${(error as AxiosError).message} on ${endpoint}`)
      }
      throw error
   }
}
