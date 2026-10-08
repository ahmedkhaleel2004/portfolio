# Portfolio

Personal portfolio website built with Next.js and Tailwind CSS.

## Run

```bash
bun install
bun run dev
```

## Hosting

The site (ahmedkhaleel.com) runs on Cloudflare Workers, built with
[OpenNext](https://opennext.js.org/cloudflare). Every page is prerendered at
build time and ships with the Worker's static files.

- **Deploys:** a push to `main` deploys by itself through
  `.github/workflows/deploy.yml` (about two minutes). Pushes that only change
  Markdown files do not deploy.
- **By hand:** `bun run cf:deploy`, with `CLOUDFLARE_API_TOKEN` and the two
  `NEXT_PUBLIC_POSTHOG_*` values set. `bun run cf:preview` runs the Worker
  locally.
- **Settings:** `wrangler.jsonc` (Worker `portfolio`, its addresses, the image
  resizer), `open-next.config.ts`, and `cloudflare-worker.mjs`, which adds the
  `www` redirect and a few response headers. `public/_headers` sets headers
  for static files.
- **Analytics:** the PostHog token and host are compiled in at build time.
  GitHub Actions reads them from the repository variables
  `NEXT_PUBLIC_POSTHOG_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- **Domain:** registered at Vercel, with Cloudflare's nameservers. DNS is
  managed in the Cloudflare zone `ahmedkhaleel.com`.
- **Roll back a deploy:** `bunx wrangler rollback`.

The Vercel project `portfolio` still builds every push and is the fallback.
To go back to it, set the domain's nameservers at Vercel back to
`ns1.vercel-dns.com` and `ns2.vercel-dns.com`.
