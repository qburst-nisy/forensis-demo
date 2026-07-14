import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Proxy section routes to QBurst.
// qburst.com is trailing-slash based: /path → 302 → /path/, while Next.js does
// the opposite (/path/ → 308 → /path). Always rewrite to the slashed upstream URL
// so nested pages like /csr/policy and /blog/:slug don't loop.
const blogOrigin = "https://www.forensisgroup.com";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep the app root at forensis-demo even when a parent lockfile exists
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.forensisgroup.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return {
      fallback: [
      {
        source: "/forensis-expert-witness",
        destination: `${blogOrigin}/forensis-expert-witness`,
      },
      {
        source: "/forensis-expert-witness/:path*",
        destination: `${blogOrigin}/forensis-expert-witness/:path*`,
      },
      {
        source: "/resources/:path*",
        destination: `${blogOrigin}/resources/:path*`,
      },
      {
        source: "/resources/:path*/:path*",
        destination: `${blogOrigin}/resources/:path*/:path*`,
      },
      {
        source: "/about-us/:path*",
        destination: `${blogOrigin}/about-us/:path*`,
      }
      ],
    };
  }
};

export default nextConfig;
