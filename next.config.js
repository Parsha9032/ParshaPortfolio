/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> outputs to the `out/` directory.
  // Netlify publish directory should be set to "out".
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // next/image's default optimizer requires a server; disable it for
    // static export and rely on properly-sized source assets instead.
    unoptimized: true,
  },
  eslint: {
    dirs: ['src', 'scripts', '__tests__'],
  },
};

module.exports = nextConfig;
