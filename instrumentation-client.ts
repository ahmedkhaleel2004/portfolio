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
    advanced_disable_flags: true,
    autocapture: true,
    capture_dead_clicks: false,
    capture_pageview: "history_change",
    capture_performance: false,
    disable_external_dependency_loading: true,
    disable_session_recording: true,
    disable_surveys: true,
    defaults: "2026-01-30",
  });
}
