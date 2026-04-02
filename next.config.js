/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {}, // Empty experimental object
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  async redirects() {
    return []
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
