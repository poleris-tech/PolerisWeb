import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable experimental features that may cause permission issues on Windows
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Disable tracing to prevent EPERM errors on Windows
  outputFileTracingRoot: undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
    ],
  },
};

export default nextConfig;
