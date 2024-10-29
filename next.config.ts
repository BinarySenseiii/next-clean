import initializeBundleAnalyzer from '@next/bundle-analyzer'
import createJiti from 'jiti'
import { type NextConfig } from 'next'
import { fileURLToPath } from 'node:url'

const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./src/core/constant/env.ts')

const withBundleAnalyzer = initializeBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true',
})

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default withBundleAnalyzer(nextConfig)
