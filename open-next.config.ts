// Cloudflare Workers build of the site (OpenNext). Vercel ignores this file.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // Every page is prerendered at build time, so the pages ship with the
  // Worker's static files and no storage is needed.
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
