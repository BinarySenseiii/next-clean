import { type AxiosError, type AxiosInstance, type AxiosResponse, create, isAxiosError } from 'axios'

import { appConfig } from '~/config'

const BASE_URL = `https://${appConfig.domainName}`

/**
 * The single error type crossing the API seam. Every rejected request resolves
 * to an `ApiError`, so callers can branch on `status` instead of re-parsing Axios.
 */
export class ApiError extends Error {
   status?: number
   code?: string

   constructor(message: string, status?: number, code?: string) {
      super(message)
      this.name = 'ApiError'
      this.status = status
      this.code = code
   }
}

// Custom instance with strict typing
const axiosInstance: AxiosInstance = create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
   timeout: 10_000, // 10 seconds
})

// Request interceptor for adding auth headers
axiosInstance.interceptors.request.use(config => {
   // Guard against non-browser execution (SSR / middleware) where there is no localStorage.
   const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }

   return config
})

// Response interceptor — owns error normalization for the whole app.
axiosInstance.interceptors.response.use(
   (response: AxiosResponse) => response,
   (error: AxiosError<{ message?: string }>) => {
      if (!isAxiosError(error)) {
         return Promise.reject(new ApiError('Network error occurred'))
      }

      const status = error.response?.status
      const message = error.response?.data?.message || error.message

      return Promise.reject(new ApiError(message, status, error.code))
   },
)

export default axiosInstance
