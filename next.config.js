/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tvkhzvbzwmpnaoxcaqdo.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/project-images/**",
      },
    ],
    domains: ["tvkhzvbzwmpnaoxcaqdo.supabase.co"],
  },
};

module.exports = nextConfig;
