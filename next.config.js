/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_ISOLATED_BUILD === "1"
    ? { distDir: ".next-build" }
    : {}),
  async headers() {
    return process.env.VERCEL_ENV === "preview"
      ? [
          {
            source: "/:path*",
            headers: [{ key: "X-Robots-Tag", value: "noindex" }],
          },
        ]
      : [];
  },
};

module.exports = nextConfig;
