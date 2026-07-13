import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Proxy section routes to QBurst (or BLOG_ORIGIN).
// qburst.com indexes require a trailing slash (/blog/ → 200, /blog → 302 → /blog/).
// Next.js strips trailing slashes (/blog/ → 308 → /blog), so the rewrite must be:
//   source: "/blog"  →  destination: ".../blog/"
// or you get an infinite redirect loop ("This page isn't working").
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
          destination: `${blogOrigin}/blog/:path*`,
        },
        {
          source: "/news-and-media",
          destination: `${blogOrigin}/news-and-media/`,
        },
        {
          source: "/news-and-media/:path*",
          destination: `${blogOrigin}/news-and-media/:path*`,
        },
        {
          source: "/csr",
          destination: `${blogOrigin}/csr/`,
        },
        {
          source: "/csr/:path*",
          destination: `${blogOrigin}/csr/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
