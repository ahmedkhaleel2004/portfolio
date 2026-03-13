import posthog from "posthog-js";
import posthogConfig from "./posthog.config";

const posthogToken =
  process.env.NEXT_PUBLIC_POSTHOG_TOKEN ?? process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (posthogToken) {
  posthog.init(posthogToken, {
    api_host: posthogConfig.POSTHOG_PROXY_PATH,
    ui_host: posthogConfig.getPostHogUiHost(
      process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ),
    defaults: "2026-01-30",
  });
}
