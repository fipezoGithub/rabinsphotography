/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "https://rabinsphotography.com" : undefined,
  images: {
    remotePatterns: isProd
      ? [
          {
            protocol: "https",
            hostname: "rabinsphotography.com",
            pathname: "**",
          },
        ]
      : undefined,
  },
};

module.exports = nextConfig;
