/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.collegedunia.com", // Allow images from pinimg
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // Allow images from GitHub avatars
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**", // Allow images from any hostname (use with caution)
        port: "",
        pathname: "/**",
      },
    ],
    // domains: ["placehold.co"],
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
