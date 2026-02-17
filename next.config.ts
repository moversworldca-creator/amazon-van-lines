// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // THIS IS REQUIRED
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;