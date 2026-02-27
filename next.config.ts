// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Standalone mode is required for the Docker multi-stage runner
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;