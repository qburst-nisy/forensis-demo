import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Proxy /forensis-expert-witness to BLOG_ORIGIN (default: local forensis-fe).
// Production: BLOG_ORIGIN=https://www.forensisgroup.com
const blogOrigin = "https://www.forensisgroup.com";
  //process.env.BLOG_ORIGIN?.replace(/\/$/, "") || "http://localhost:3001";

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
        pathname: "/images/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        // forensisgroup.com uses trailingSlash: false — /path/ 308s to /path.
        // Proxy without a trailing slash so the rewrite gets a 200, not a loop.
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
      },
      {
        // forensisgroup.com uses trailingSlash: false — /path/ 308s to /path.
        // Proxy without a trailing slash so the rewrite gets a 200, not a loop.
        source: "/blog",
        destination: `${blogOrigin}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${blogOrigin}/blog/:path*`,
      },
      {
        // forensisgroup.com uses trailingSlash: false — /path/ 308s to /path.
        // Proxy without a trailing slash so the rewrite gets a 200, not a loop.
        source: "/news-and-media",
        destination: `${blogOrigin}/news-and-media`,
      },
      {
        source: "/news-and-media/:path*",
        destination: `${blogOrigin}/news-and-media/:path*`,
      },
       {
        // forensisgroup.com uses trailingSlash: false — /path/ 308s to /path.
        // Proxy without a trailing slash so the rewrite gets a 200, not a loop.
        source: "/csr",
        destination: `${blogOrigin}/csr`,
      },
      {
        source: "/csr/:path*",
        destination: `${blogOrigin}/csr/:path*`,
      }
    ]
  },
};

export default nextConfig;
