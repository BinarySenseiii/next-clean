export const API_ENDPOINTS = {
   AUTH: {
      SIGN_UP: '/auth/sign-up',
      SIGN_IN: '/auth/sign-in',
   },
} as const

export type ApiRouteKeys =
   (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS][keyof (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS]]
