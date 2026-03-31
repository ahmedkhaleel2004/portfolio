"use client";

import {
  ReactNode,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ProjectTooltipProps {
  children: ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
}

const ProjectTooltip = ({
  children,
  title,
  description,
  imageSrc,
}: ProjectTooltipProps) => {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [canPreview, setCanPreview] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (hover: hover) and (pointer: fine)",
    );

    const syncPreviewCapability = () => {
      setCanPreview(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsVisible(false);
      }
    };

    syncPreviewCapability();
    mediaQuery.addEventListener("change", syncPreviewCapability);

    return () => {
      mediaQuery.removeEventListener("change", syncPreviewCapability);
    };
  }, []);

  function updateTooltipPosition() {
    rafRef.current = null;

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
  }

  function schedulePositionUpdate() {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(updateTooltipPosition);
  }

  useLayoutEffect(() => {
    if (!isVisible || !canPreview) return;

    updateTooltipPosition();

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [canPreview, isVisible]);

  const showTooltip = (
    event?: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>,
  ) => {
    if (!canPreview) return;

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

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canPreview) return;

    pointerRef.current = { x: event.clientX + 16, y: event.clientY };
    schedulePositionUpdate();
  };

  return (
    <>
      <div
        ref={triggerRef}
        aria-describedby={isVisible ? tooltipId : undefined}
        className="relative cursor-default select-none"
        onFocus={showTooltip}
        onBlur={hideTooltip}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {canPreview &&
        isVisible &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            id={tooltipId}
            ref={tooltipRef}
            className="pointer-events-none fixed z-[9999] hidden w-72 rounded-lg bg-neutral-900 p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5),0_0_5px_rgba(0,0,0,0.2)] ring-1 ring-inset ring-white/10 sm:w-96 md:block"
            style={{ top: 16, left: 16 }}
          >
            <div className="mb-3">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{description}</p>
            </div>

            {imageSrc && (
              <div className="overflow-hidden rounded-md shadow-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={600}
                  height={300}
                  className="h-auto w-full"
                  loading="eager"
                  sizes="384px"
                />
              </div>
            )}
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectTooltip;
