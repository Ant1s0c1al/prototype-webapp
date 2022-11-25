/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /*
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['prisma'],
    transpilePackages: ['@acme/ui', 'lodash-es'],
  },
  */
}

module.exports = nextConfig;
