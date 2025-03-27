import axios, { type AxiosError, type AxiosInstance, type AxiosResponse, isAxiosError } from 'axios'

import { appConfig } from '~/config'

const BASE_URL = `https://${appConfig.domainName}`

interface ApiResponse<T> {
   data: T
   status: number
}

interface ApiError extends Error {
   code?: string
   response?: AxiosResponse
}

// Custom instance with strict typing
const axiosInstance: AxiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
   timeout: 10_000, // 10 seconds
})

// Request interceptor for adding auth headers
axiosInstance.interceptors.request.use(config => {
   const token = localStorage.getItem('authToken') // or cookie upto u ..
   if (token) {
      config.headers.Authorization = `Bearer ${token}`
   }

   return config
})

// Response interceptor with error handling
axiosInstance.interceptors.response.use(
   (response: AxiosResponse<ApiResponse<unknown>>) => {
      // Handle token refresh or other headers if needed
      return response
   },
   (error: AxiosError<ApiError>) => {
      if (!isAxiosError(error)) {
         return Promise.reject(new Error('Network error occurred'))
      }

      const { response } = error
      const errorMessage = response?.data?.message || error.message

      // Handle specific HTTP status codes
      switch (response?.status) {
         case 401:
            // Handle unauthorized access
            break
         case 403:
            // Handle forbidden access
            break
         case 404:
            // Handle not found
            break
         case 500:
            // Handle server errors
            break
      }

      return Promise.reject(new Error(errorMessage))
   },
)

export default axiosInstance
