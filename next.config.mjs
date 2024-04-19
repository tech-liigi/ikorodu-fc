/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "hir1t678",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skqRBInWUD1aasuDpF0W010hEaKyTKunFqkJifzJ6gAs8q7GbzerNVg56gE7c80ZCps4gfXEvp8a4GzDddV6Apl7jAMFKyIeRu0yZqwSNM0Icee1lDiePiRhFJulGuDaK6jEVyLu9MEqiNqdafa5Q0p5Khr13GSAnCmEz0gtal33Ie6WQO7T",
  },
};

export default nextConfig;
