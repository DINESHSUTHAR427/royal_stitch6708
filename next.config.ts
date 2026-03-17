import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Turbopack/Next.js not to bundle Prisma
  serverExternalPackages: ["@prisma/client"], 
   experimental: {
    
  },
};

export default nextConfig;
