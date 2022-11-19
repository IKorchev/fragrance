/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    allowMiddlewareResponseBody: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
