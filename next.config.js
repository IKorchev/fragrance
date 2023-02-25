/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    allowMiddlewareResponseBody: true,
    typedRoutes: true,
  },
  images: {
    domains: ['pimages.parfumo.de'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
