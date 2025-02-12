/** @format */

import initializeBundleAnalyzer from '@next/bundle-analyzer'
import { type NextConfig } from 'next'
import { fileURLToPath } from 'node:url'

const withBundleAnalyzer = initializeBundleAnalyzer({
   enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true',
})

async function createNextConfig(): Promise<NextConfig> {
   const { createJiti } = await import('jiti')
   const jiti = createJiti(fileURLToPath(import.meta.url))

   // Import env or other files here, within the async function
   await jiti.import('./src/constant/env.ts')

   return {
      experimental: {
         optimizePackageImports: ['lucide-react', 'react-use', 'lodash'],
         typedRoutes: true, // make sure to run build command to generate route types
      },
   }
}

export default (async () => withBundleAnalyzer(await createNextConfig()))()
