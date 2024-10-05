/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'canoladigest.ca',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  