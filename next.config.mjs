/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/so-sham-hq',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
