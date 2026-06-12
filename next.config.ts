import type { NextConfig } from 'next';
 
import path from 'node:path';
 
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
 
  outputFileTracingRoot: __dirname,

  // Prevent nodemailer from being bundled (it needs native Node.js modules)
  serverExternalPackages: ['nodemailer'],
 
  images: {
 
    remotePatterns: [
 
      {
 
        protocol: 'https',
 
        hostname: 'images.unsplash.com',
 
      },
 
    ],
 
  },
 
};

export default nextConfig;
