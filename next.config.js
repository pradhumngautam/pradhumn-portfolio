/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production builds from replacing chunks used by the local dev server.
  distDir: process.env.NODE_ENV === "development" ? ".next" : ".next-build",
};

module.exports = nextConfig;
