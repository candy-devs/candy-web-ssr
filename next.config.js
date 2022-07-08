/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: false,
  //     },
  //   ]
  // }
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
