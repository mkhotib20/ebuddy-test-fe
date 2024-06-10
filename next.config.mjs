/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: 'http://localhost:3001/:path*',
    },
  ],
  images: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
};

export default nextConfig;
