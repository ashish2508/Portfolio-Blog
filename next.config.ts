// next.config.mjs
import type { NextConfig } from 'next'
import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const config = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'gravatar.com' }] },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  // Remove any 'turbopack' key if it's here and causing a warning
} satisfies NextConfig

export default withMDX(config)
