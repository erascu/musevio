import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ids.lib.harvard.edu",
        pathname: "/ids/view/**",
      },
    ],
  },
};

export default nextConfig;
