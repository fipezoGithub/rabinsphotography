/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "https://rabinsphotography.com" : undefined,
};

module.exports = nextConfig;
