/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'decicqog4ulhy.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'd3aj4itat0hxro.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'imajodhpur.com',
      },
    ],
  },
}

module.exports = nextConfig
