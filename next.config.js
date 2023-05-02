const {resolve} = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      // [resolve('target/wasm32-wasi/release/next_12_swc_plugin_fail.wasm')]
    ]
  },
};

module.exports = nextConfig;
