import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Proxy section routes to QBurst.
// qburst.com is trailing-slash based: /path → 302 → /path/, while Next.js does
// the opposite (/path/ → 308 → /path). Always rewrite to the slashed upstream URL
// so nested pages like /csr/policy and /blog/:slug don't loop.
const blogOrigin = "https://www.qburst.com";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep the app root at forensis-demo even when a parent lockfile exists
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.qburst.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/blog",
          destination: `${blogOrigin}/blog/`,
        },
        {
          source: "/blog/:path*",
          destination: `${blogOrigin}/blog/:path*/`,
        },
        {
          source: "/news-and-media",
          destination: `${blogOrigin}/news-and-media/`,
        },
        {
          source: "/news-and-media/:path*",
          destination: `${blogOrigin}/news-and-media/:path*/`,
        },
        {
          source: "/csr",
          destination: `${blogOrigin}/csr/`,
        },
        {
          source: "/csr/:path*",
          destination: `${blogOrigin}/csr/:path*/`,
        },
      ],
    };
  },
};

export default nextConfig;
