import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

import config from '~/constant/config'

export const ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${config.domainName}`

export const fetchFunc = async <T>(
  endpoint: string,
  options?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await axios(`${ORIGIN}/api${endpoint}`, {
      ...options,
    })

    return res.data
  } catch (error) {
    throw axios.isAxiosError(error)
      ? new Error(`API request failed: ${(error as AxiosError).message}`)
      : error
  }
}
