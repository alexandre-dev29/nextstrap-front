/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "devprojectbucket.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
