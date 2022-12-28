/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["picsum.photos", "s3-chainsawman-bucket.s3.us-west-1.amazonaws.com"] }
}

module.exports = nextConfig
