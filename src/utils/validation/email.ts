export const isValidEmail = (email: string): boolean => {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   return re.test(email)
}
