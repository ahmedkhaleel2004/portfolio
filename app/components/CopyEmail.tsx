"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

type CopyStatus = "idle" | "copied" | "failed";

const CopyEmail = () => {
  const timeoutRef = useRef<number | null>(null);
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setStatus("idle");
      timeoutRef.current = null;
    }, 1500);
  };

  return (
    <span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="cursor-pointer text-gray-400 hover:underline"
      >
        {siteConfig.email}
      </button>
      {status !== "idle" && (
        <span role="status" className="ml-2 text-xs text-neutral-500">
          {status === "copied" ? "copied" : "copy failed"}
        </span>
      )}
    </span>
  );
};

export default CopyEmail;
