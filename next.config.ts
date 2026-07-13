import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

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
  }
};

export default nextConfig;
