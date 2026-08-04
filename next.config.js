/** @type {import('next').NextConfig} */
const { execSync } = require('child_process');
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages && repoName ? `/${repoName}` : '';
const assetPrefix = isGitHubPages && repoName ? `/${repoName}/` : '';

function getGitLastUpdated() {
  try {
    const isoDate = execSync('git log -1 --format=%cI', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();

    if (!isoDate) {
      return null;
    }

    return isoDate.slice(0, 10);
  } catch (error) {
    return null;
  }
}

const lastUpdated = getGitLastUpdated();

const nextConfig = {
  // Static HTML export -> outputs to the `out/` directory.
  // GitHub Pages and Netlify can both publish from this export.
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  assetPrefix,
  env: {
    BASE_PATH: basePath,
    NEXT_PUBLIC_LAST_UPDATED: lastUpdated,
  },
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
