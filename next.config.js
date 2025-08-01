/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  images: { unoptimized: true },
  // Remove the cache property as it's not a valid Next.js config option
};

module.exports = nextConfig;