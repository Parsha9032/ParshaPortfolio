/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages && repoName ? `/${repoName}` : '';
const assetPrefix = isGitHubPages && repoName ? `/${repoName}/` : '';

const nextConfig = {
  // Static HTML export -> outputs to the `out/` directory.
  // GitHub Pages and Netlify can both publish from this export.
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  assetPrefix,
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
