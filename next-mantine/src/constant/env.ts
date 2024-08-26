import { createEnv } from '@t3-oss/env-nextjs'
import { z, type ZodError } from 'zod'

export const env = createEnv({
  onValidationError: (error: ZodError) => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    )
    throw new Error('Invalid environment variables')
  },
  onInvalidAccess: (_: string) => {
    throw new Error(
      '❌ Attempted to access a server-side environment variable on the client'
    )
  },

  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },

  client: {},

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
})
