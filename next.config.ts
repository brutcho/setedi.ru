import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},

  output: "export",
  distDir: "build",
  trailingSlash: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

export default nextConfig;
