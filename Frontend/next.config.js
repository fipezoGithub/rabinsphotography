/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "https://rabinsphotography.com" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
