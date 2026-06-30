// Public interface of the products module: the hooks and the contract types.
// `api/` (raw request functions + query-key factory) is an internal seam used
// by the hooks and their tests — callers go through the hooks so they can't
// bypass the query cache or invalidation.
export * from './hooks'
export * from './types'
