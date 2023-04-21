/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "checkpoint.local",
      "localhost",
      "127.0.0.1",
      "assets.bigcartel.com",
    ],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "assets.bigcartel.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "checkpoint.local",
    //     port: "3001",
    //   },
    // ],
  },
};

module.exports = nextConfig;
