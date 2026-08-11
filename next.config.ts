import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Manuel-Donna" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/Manuel-Donna/" : undefined,
};

export default nextConfig;
