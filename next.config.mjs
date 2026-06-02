/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages as a *project page* the site is served from
// https://<user>.github.io/<repo>/ so we need a basePath/assetPrefix in prod.
// Override the repo name via NEXT_PUBLIC_BASE_PATH if you fork/rename the repo,
// or set it to "" when deploying to a user page or a custom domain.
const isProd = process.env.NODE_ENV === 'production';
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/portfolio-website' : '');

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // Silence the multi-lockfile workspace-root inference warning.
  outputFileTracingRoot: import.meta.dirname,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
};

export default nextConfig;
