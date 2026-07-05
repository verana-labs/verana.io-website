import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal standalone server for the Docker runtime image.
  output: "standalone",
  reactStrictMode: true,

  // sharp is a native module used by next/image optimization; keep it external
  // so the standalone tracer ships its prebuilt binaries instead of bundling.
  serverExternalPackages: ["sharp"],

  // Lint and type-check run separately in CI; do not fail the container build.
  eslint: { ignoreDuringBuilds: true },

  // Old v1 routes: permanent redirects to their spec-v2 homes.
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/ecosystems", permanent: true },
      { source: "/playground", destination: "/identity", permanent: true },
      { source: "/build", destination: "https://docs.verana.io", permanent: true },
      { source: "/software", destination: "/infrastructure", permanent: true },
      { source: "/network", destination: "/", permanent: true },
      { source: "/integrators", destination: "/contact", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        // Brand assets, icons, og-image: bounded freshness with SWR.
        source: "/(images|logo.svg|favicon.ico)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
