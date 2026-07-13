"use client";

import Image from "next/image";
import {
  type FocusEvent,
  type MouseEvent,
  type ReactNode,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const PREVIEW_QUERY =
  "(min-width: 768px) and (hover: hover) and (pointer: fine)";

interface PreviewTooltipProps {
  children: ReactNode;
  title: string;
  description: string;
  subtitle?: string;
  imageSrc?: string;
  focusable?: boolean;
}

export default function PreviewTooltip({
  children,
  title,
  description,
  subtitle,
  imageSrc,
  focusable = false,
}: PreviewTooltipProps) {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const updatePosition = () => {
    animationFrameRef.current = null;

    const tooltip = tooltipRef.current;
    if (!tooltip) return;

    const tooltipRect = tooltip.getBoundingClientRect();
    const padding = 16;
    const x = Math.min(
      Math.max(padding, pointerRef.current.x),
      window.innerWidth - tooltipRect.width - padding,
    );
    const y = Math.min(
      Math.max(padding, pointerRef.current.y - tooltipRect.height - 16),
      window.innerHeight - tooltipRect.height - padding,
    );

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  };

  const schedulePositionUpdate = () => {
    if (animationFrameRef.current !== null) return;
    animationFrameRef.current = requestAnimationFrame(updatePosition);
  };

  useLayoutEffect(() => {
    if (!isVisible) return;

    updatePosition();

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  const showTooltip = (
    event?: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>,
  ) => {
    if (!window.matchMedia(PREVIEW_QUERY).matches) return;

    if (event && "clientX" in event) {
      pointerRef.current = { x: event.clientX + 16, y: event.clientY };
    } else {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (rect) {
        pointerRef.current = {
          x: rect.left + 16,
          y: rect.top + rect.height / 2,
        };
      }
    }

    setIsVisible(true);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia(PREVIEW_QUERY).matches) return;

    pointerRef.current = { x: event.clientX + 16, y: event.clientY };
    schedulePositionUpdate();
  };

  const isAnimatedImage = imageSrc?.toLowerCase().endsWith(".gif") ?? false;

  return (
    <>
      <div
        ref={triggerRef}
        aria-describedby={isVisible ? tooltipId : undefined}
        aria-label={
          focusable ? `${title}, ${subtitle}. ${description}` : undefined
        }
        className="relative cursor-default select-none"
        tabIndex={focusable ? 0 : undefined}
        onBlur={() => setIsVisible(false)}
        onFocus={showTooltip}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setIsVisible(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {isVisible &&
        createPortal(
          <div
            id={tooltipId}
            ref={tooltipRef}
            role="tooltip"
            className="pointer-events-none fixed z-[9999] hidden w-72 rounded-lg bg-neutral-900 p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5),0_0_5px_rgba(0,0,0,0.2)] ring-1 ring-white/10 ring-inset sm:w-96 md:block"
            style={{ top: 16, left: 16 }}
          >
            <div className="mb-3">
              <h3 className="text-base font-semibold">{title}</h3>
              {subtitle && (
                <p className="text-sm text-neutral-400">{subtitle}</p>
              )}
              <p className="mt-2 text-sm text-neutral-300">{description}</p>
            </div>

            {imageSrc && (
              <div className="overflow-hidden rounded-md shadow-md">
                <Image
                  src={imageSrc}
                  alt=""
                  width={600}
                  height={300}
                  className="h-auto w-full"
                  loading="eager"
                  sizes="384px"
                  unoptimized={isAnimatedImage}
                />
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
