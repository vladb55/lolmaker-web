const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/lolmaker-web' : undefined;
const assetPrefix = isProduction ? '/lolmaker-web' : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix,
};

module.exports = nextConfig;
