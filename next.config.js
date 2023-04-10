/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LOCAL_API: 'http://localhost:3001',
    // https://server-its-d1a.onrender.com
  }

}

module.exports = nextConfig;