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
      {
        protocol: "https",
        hostname: "nrs.harvard.edu",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.artic.edu",
        pathname: "/iiif/2/**",
      },
    ],
  },
};

export default nextConfig;
