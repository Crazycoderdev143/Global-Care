/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your other Next.js config options
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
  ],
};

module.exports = nextConfig;
