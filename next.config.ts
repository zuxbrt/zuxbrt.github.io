import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/zuxbrt.github.io',
  assetPrefix: '/zuxbrt.github.io',
  reactStrictMode: true
};

export default nextConfig;
