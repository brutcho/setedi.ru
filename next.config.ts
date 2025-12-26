import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},

  // Опционально: отключи Turbopack если нужно
  // experimental: {
  //   turbo: {
  //     // Конфигурация для Turbopack
  //   }
  // },

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
