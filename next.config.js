/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*.hdslb.com',
        pathname: '/bfs/archive/**',
      },
    ]
  }
}

module.exports = nextConfig
