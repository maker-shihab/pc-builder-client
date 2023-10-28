/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "a507022cb9292b410949f7867cc2b71a",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.startech.com.bd",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
