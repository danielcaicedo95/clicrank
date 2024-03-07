/** @type {import('next').NextConfig} */

module.exports = {
  // Use the prefix in the assetPrefix to serve the correct static files
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{https://github.com/danielcaicedo95/clicrank.git}' : '',
}

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ]
  },
}

export default nextConfig
