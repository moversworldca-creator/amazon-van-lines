// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // THIS IS REQUIRED
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;