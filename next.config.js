/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.plugins.push(new Dotenv({ silent: true }));
  },
};

module.exports = nextConfig;
