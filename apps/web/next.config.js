/**** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:4000',
    DEMO_MODE: process.env.DEMO_MODE || 'true'
  }
};

module.exports = nextConfig;
