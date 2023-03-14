/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOCAL_API: `http://localhost:3000/api`
  }
}

module.exports = nextConfig
