"use client";

import React, { useState, useRef, ReactNode, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMoveTime = useRef<number>(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Mount check for client-side rendering
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const updatePosition = (e: React.MouseEvent) => {
    const now = Date.now();
    // Throttle position updates to every 16ms (roughly 60fps)
    if (now - lastMoveTime.current > 16) {
      setPosition({
        x: e.clientX,
        y: e.clientY + 15,
      });
      lastMoveTime.current = now;
    }
  };

  const showTooltip = (e: React.MouseEvent) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    updatePosition(e);
    if (!isVisible) {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="relative cursor-default select-none"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onMouseMove={updatePosition}
      >
        {children}
      </div>

      {mounted &&
        isVisible &&
        createPortal(
          <div
            className="fixed z-[9999]"
            style={{
              top: `${position.y}px`,
              left: `${position.x}px`,
              pointerEvents: "none",
            }}
          >
            <div className="w-72 overflow-hidden rounded-lg bg-neutral-900 p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5),0_0_5px_rgba(0,0,0,0.2)] sm:w-96">
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
                    className="w-full"
                  />
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10"></div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectTooltip;
