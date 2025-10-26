import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 compiler: {
  emotion: true,
 },
 experimental: {
  optimizeCss: false,
 },
};

export default nextConfig;
