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

  async rewrites() {
    return [
      // A（mothervegetablemenu.vercel.app）を /achieve-howto 配下にプロキシ（既存）
      {
        source: "/achieve-howto",
        destination: "https://mothervegetablemenu.vercel.app/achieve-howto",
      },
      {
        source: "/achieve-howto/:path*",
        destination: "https://mothervegetablemenu.vercel.app/achieve-howto/:path*",
      },

      // ★ 新規追加：A（forever-htu.vercel.app）を /forever-howto 配下にプロキシ
      {
        source: "/forever-howto",
        destination: "https://forever-htu.vercel.app/forever-howto",
      },
      {
        source: "/forever-howto/:path*",
        destination: "https://forever-htu.vercel.app/forever-howto/:path*",
      },
    ];
  },
};

export default nextConfig;
