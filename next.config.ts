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
    // Remote image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    // Image optimization settings
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
