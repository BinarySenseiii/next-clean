import { REGEX } from '~/constants'

export const isValidEmail = (email: string): boolean => {
   if (!email) throw new Error('Email is required')

   return REGEX.EMAIL_VALIDATION.test(email)
}
