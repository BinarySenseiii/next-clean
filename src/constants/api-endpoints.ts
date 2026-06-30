export const API_ENDPOINTS = {
   AUTH: {
      SIGN_UP: '/auth/sign-up',
      SIGN_IN: '/auth/sign-in',
   },
   PRODUCTS: {
      LIST: '/products',
   },
} as const

// Recursively collects every string-leaf value, so adding groups of any shape
// keeps `ApiRouteKeys` correct (the old flat derivation broke past one group).
type EndpointValues<T> = T extends string ? T : T extends Record<string, unknown> ? EndpointValues<T[keyof T]> : never

export type ApiRouteKeys = EndpointValues<typeof API_ENDPOINTS>

// A known root, optionally followed by path segments (e.g. `/products/42`).
// Keeps requests anchored to a declared resource while allowing dynamic ids.
export type ApiEndpoint = ApiRouteKeys | `${ApiRouteKeys}/${string}`
