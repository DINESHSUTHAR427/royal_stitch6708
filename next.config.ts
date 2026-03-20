import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Turbopack/Next.js not to bundle Prisma
  serverExternalPackages: ["@prisma/client"], 
   experimental: {
    
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
