import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Turbopackを無効化 */
  experimental: {
    turbo: undefined,
  },

  async redirects() {
    return [
      // mothervegetables.org（apex）→ www.mothervegetable.org
      {
        source: "/:path*",
        has: [{ type: "host", value: "mothervegetables.org" }],
        destination: "https://www.mothervegetable.org/:path*",
        permanent: true, // 308
      },
      // www.mothervegetables.org → www.mothervegetable.org
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mothervegetables.org" }],
        destination: "https://www.mothervegetable.org/:path*",
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
