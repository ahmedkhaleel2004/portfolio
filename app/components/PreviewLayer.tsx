"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type PreviewMedia =
  | {
      type: "image";
      src: string;
      srcSet?: string;
      width: number;
      height: number;
    }
  | { type: "video"; src: string; width: number; height: number };

export interface PreviewItem {
  title: string;
  subtitle?: string;
  description: string;
  media?: PreviewMedia;
}

const PREVIEW_QUERY =
  "(min-width: 768px) and (hover: hover) and (pointer: fine)";
const TRIGGER_SELECTOR = "[data-preview]";
// Grace period so crossing the gap between two rows doesn't close the card.
const CLOSE_DELAY_MS = 90;
const CURSOR_OFFSET = 16;
const VIEWPORT_PADDING = 16;

/**
 * One shared hover card for every row with a `data-preview` id. Rows stay
 * server-rendered; this listens at the document level, swaps content in place
 * while moving between rows, and preloads the media once the page is idle.
 */
export default function PreviewLayer({
  items,
}: {
  items: Record<string, PreviewItem>;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);
  const activeIdRef = useRef<string | null>(null);
  const anchorRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0 });
  const frameRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const place = () => {
    frameRef.current = null;
    const node = positionRef.current;
    if (!node) return;

    const { width, height } = sizeRef.current;
    const x = Math.min(
      Math.max(VIEWPORT_PADDING, anchorRef.current.x + CURSOR_OFFSET),
      window.innerWidth - width - VIEWPORT_PADDING,
    );
    const y = Math.min(
      Math.max(VIEWPORT_PADDING, anchorRef.current.y - height - CURSOR_OFFSET),
      window.innerHeight - height - VIEWPORT_PADDING,
    );
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const schedulePlace = () => {
    if (frameRef.current === null) {
      frameRef.current = requestAnimationFrame(place);
    }
  };

  const show = (id: string) => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (activeIdRef.current !== id) {
      activeIdRef.current = id;
      setActiveId(id);
    }
    setOpen(true);
  };

  const close = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    activeIdRef.current = null;
    setOpen(false);
  };

  const hide = (immediate = false) => {
    if (activeIdRef.current === null) return;
    if (immediate) close();
    else if (closeTimerRef.current === null) {
      closeTimerRef.current = window.setTimeout(close, CLOSE_DELAY_MS);
    }
  };

  // Keep the cached size current as content swaps, then re-place.
  useLayoutEffect(() => {
    const node = positionRef.current;
    if (!node) return;
    const observer = new ResizeObserver(() => {
      sizeRef.current = { width: node.offsetWidth, height: node.offsetHeight };
      place();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = window.matchMedia(PREVIEW_QUERY);

    const triggerAt = (target: EventTarget | null) =>
      target instanceof Element
        ? target.closest<HTMLElement>(TRIGGER_SELECTOR)
        : null;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !media.matches) return;
      anchorRef.current = { x: event.clientX, y: event.clientY };
      const trigger = triggerAt(event.target);
      if (trigger) {
        show(trigger.dataset.preview!);
        schedulePlace();
      } else {
        hide();
      }
    };

    // Content scrolls under a still cursor without firing pointer events.
    const handleScroll = () => {
      if (activeIdRef.current === null) return;
      const { x, y } = anchorRef.current;
      const trigger = triggerAt(document.elementFromPoint(x, y));
      if (trigger) show(trigger.dataset.preview!);
      else hide(true);
    };

    const handleFocusIn = (event: FocusEvent) => {
      const trigger = triggerAt(event.target);
      if (!trigger || !trigger.hasAttribute("tabindex")) return;
      const rect = trigger.getBoundingClientRect();
      anchorRef.current = { x: rect.left, y: rect.top + rect.height / 2 };
      show(trigger.dataset.preview!);
      schedulePlace();
    };

    const handleFocusOut = () => hide(true);
    const handleLeaveWindow = (event: MouseEvent) => {
      if (!event.relatedTarget) hide(true);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide(true);
    };

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("mouseout", handleLeaveWindow);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseout", handleLeaveWindow);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
    // Handlers only touch refs and stable setters.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Warm the cache once the page is idle so the first hover is instant.
  useEffect(() => {
    if (!window.matchMedia(PREVIEW_QUERY).matches) return;
    const warmed: (HTMLImageElement | HTMLVideoElement)[] = [];

    const preload = () => {
      for (const { media } of Object.values(items)) {
        if (!media) continue;
        if (media.type === "image") {
          const image = new Image();
          image.decoding = "async";
          if (media.srcSet) image.srcset = media.srcSet;
          image.src = media.src;
          image.decode().catch(() => {});
          warmed.push(image);
        } else {
          const video = document.createElement("video");
          video.muted = true;
          video.preload = "auto";
          video.src = media.src;
          warmed.push(video);
        }
      }
    };

    const idle = window.requestIdleCallback ?? ((cb) => window.setTimeout(cb));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    let handle: number | undefined;
    const schedule = () => {
      handle = idle(preload, { timeout: 2000 });
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      if (handle !== undefined) cancelIdle(handle);
    };
  }, [items]);

  const item = activeId ? items[activeId] : undefined;

  return (
    <div
      ref={positionRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden w-96 md:block"
      style={{ transform: "translate3d(-9999px, 0, 0)" }}
    >
      <div
        role="tooltip"
        aria-hidden={!open}
        data-open={open || undefined}
        className="bg-card ring-card-ring invisible origin-bottom-left scale-[0.97] rounded-lg p-5 opacity-0 shadow-(--card-shadow) ring-1 transition-[opacity,scale,visibility] duration-100 ease-out ring-inset data-open:visible data-open:scale-100 data-open:opacity-100 data-open:duration-150 data-open:ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:scale-100 motion-reduce:transition-none"
      >
        {item && (
          <>
            <div className="mb-3">
              <h3 className="text-base font-semibold">{item.title}</h3>
              {item.subtitle && (
                <p className="text-card-subtitle text-sm">{item.subtitle}</p>
              )}
              <p className="text-card-body mt-2 text-sm">{item.description}</p>
            </div>

            {item.media && (
              <div
                className="bg-card-media overflow-hidden rounded-md shadow-md"
                style={{
                  aspectRatio: `${item.media.width} / ${item.media.height}`,
                }}
              >
                {item.media.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={activeId}
                    src={item.media.src}
                    srcSet={item.media.srcSet}
                    width={item.media.width}
                    height={item.media.height}
                    alt=""
                    decoding="async"
                    className="block h-full w-full"
                  />
                ) : (
                  <video
                    key={activeId}
                    src={item.media.src}
                    width={item.media.width}
                    height={item.media.height}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block h-full w-full"
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
