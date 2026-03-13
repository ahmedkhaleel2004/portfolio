const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";
const POSTHOG_PROXY_PATH = "/_atlas";

function getPostHogHost() {
  return process.env.NEXT_PUBLIC_POSTHOG_HOST || DEFAULT_POSTHOG_HOST;
}

function getPostHogRegion(host = getPostHogHost()) {
  const { hostname } = new URL(host);
  return hostname.startsWith("eu.") ? "eu" : "us";
}

function getPostHogUiHost(host = getPostHogHost()) {
  const { protocol } = new URL(host);
  return `${protocol}//${getPostHogRegion(host)}.posthog.com`;
}

function getPostHogAssetHost(host = getPostHogHost()) {
  const { protocol } = new URL(host);
  return `${protocol}//${getPostHogRegion(host)}-assets.i.posthog.com`;
}

module.exports = {
  POSTHOG_PROXY_PATH,
  getPostHogAssetHost,
  getPostHogHost,
  getPostHogUiHost,
};
