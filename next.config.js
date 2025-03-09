const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*"
      },
     
    ],
  },
  reactStrictMode: true,
  output: "export"
};

export default nextConfig;
