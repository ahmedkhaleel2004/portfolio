// Entry of the Cloudflare Worker. It wraps the Worker OpenNext builds
// (.open-next/worker.js) to keep three things Vercel's platform did:
// the www redirect, the HSTS header, and pages that browsers always recheck.
import openNext from "./.open-next/worker.js";

const SITE_HOST = "ahmedkhaleel.com";
const HSTS = "max-age=63072000";
const PAGE_CACHE_CONTROL = "public, max-age=0, must-revalidate";

const worker = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname === `www.${SITE_HOST}`) {
      url.hostname = SITE_HOST;
      url.protocol = "https:";
      return new Response(null, {
        status: 307,
        headers: {
          Location: url.toString(),
          "Cache-Control": PAGE_CACHE_CONTROL,
          "Strict-Transport-Security": HSTS,
        },
      });
    }

    const response = await openNext.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    headers.set("Strict-Transport-Security", HSTS);
    if (headers.get("Content-Type")?.startsWith("text/html")) {
      headers.set("Cache-Control", PAGE_CACHE_CONTROL);
    }
    // Copies of the site at other addresses (workers.dev) stay out of search.
    if (url.hostname !== SITE_HOST) headers.set("X-Robots-Tag", "noindex");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
