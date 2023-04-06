/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_LOCAL_API: 'https://server-its-d1a.onrender.com',
  }

}

module.exports = nextConfig;
