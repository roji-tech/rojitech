import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Archived snapshot of the pre-redesign site (static CRA build in public/previous).
      // Its own client-side router only ever produces these two paths.
      { source: "/previous", destination: "/previous/index.html" },
      { source: "/previous/projects", destination: "/previous/index.html" },
    ];
  },
};

export default nextConfig;
