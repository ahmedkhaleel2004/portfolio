import posthogConfig from "./posthog.config";

const posthogToken =
  process.env.NEXT_PUBLIC_POSTHOG_TOKEN ?? process.env.NEXT_PUBLIC_POSTHOG_KEY;

// Load analytics after the page is interactive so it stays off the critical path.
const initPostHog = async () => {
  const { default: posthog } = await import("posthog-js");
  posthog.init(posthogToken!, {
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
};

if (posthogToken) {
  // Safari has no requestIdleCallback.
  const idle =
    window.requestIdleCallback ??
    ((callback: () => void) => window.setTimeout(callback, 1));
  const schedule = () => idle(() => void initPostHog(), { timeout: 2000 });

  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
}
