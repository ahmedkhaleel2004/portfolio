/* eslint-disable @typescript-eslint/no-require-imports */
const {
  POSTHOG_PROXY_PATH,
  getPostHogAssetHost,
  getPostHogHost,
} = require("./posthog.config");

const posthogHost = getPostHogHost();
const posthogAssetHost = getPostHogAssetHost(posthogHost);

/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: `${POSTHOG_PROXY_PATH}/static/:path*`,
        destination: `${posthogAssetHost}/static/:path*`,
      },
      {
        source: `${POSTHOG_PROXY_PATH}/:path*`,
        destination: `${posthogHost}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
