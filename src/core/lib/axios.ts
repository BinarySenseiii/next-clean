/** @format */

import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  isAxiosError,
} from 'axios'

import config from '~/core/constant/config'

const BASE_URL = `https://${config.domainName}`

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

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

const handleError = (error: AxiosError): void => {
  if (isAxiosError(error)) {
    console.error(`API error on ${error.config?.url}: ${error.message}`)
  } else {
    console.error('Unexpected error:', error)
  }
}

/**
 * Generic request handler to handle all types of requests with a consistent pattern.
 * @param endpoint - API endpoint to request.
 * @param options - Axios configuration options, including method and data.
 * @returns A promise resolving with the response data.
 */
export const handleRequest = async <T>(
  endpoint: string,
  options: AxiosRequestConfig = {method: 'GET'},
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance(endpoint, options)

    return response.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        `API request failed: ${(error as AxiosError).message} on ${endpoint}`,
      )
    }
    throw error
  }
}

export default axiosInstance
