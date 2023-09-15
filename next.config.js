/** @type {import('next').NextConfig} */
const nextConfig = {
  // target: "serverless",
  // experimental: { nftTracing: true },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.stockx.com",
        pathname: "images/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "random/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "penfed.org",
        pathname: "/**",
      },
    ],
    domains: [
      "images.stockx.com",
      "source.unsplash.com",
      "i.ibb.co",
      "penfed.org",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
