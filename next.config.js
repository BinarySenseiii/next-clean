import createJiti from 'jiti'
import { fileURLToPath } from 'node:url'

import withBundleAnalyzer from '@next/bundle-analyzer'

const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./src/constant/env.ts')

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import("next").NextConfig} */
const nextConfig = {}

export default bundleAnalyzer(nextConfig)
