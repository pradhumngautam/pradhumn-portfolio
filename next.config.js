/** @type {import('next').NextConfig} */
const nextConfig =
  process.env.NEXT_ISOLATED_BUILD === "1"
    ? { distDir: ".next-build" }
    : {};

module.exports = nextConfig;
