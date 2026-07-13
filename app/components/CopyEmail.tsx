"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const CopyEmail = () => {
  const timeoutRef = useRef<number | null>(null);
  const [copied, setCopied] = useState(false);

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
      setCopied(true);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span>
      <button
        type="button"
        onClick={handleCopy}
        className="cursor-pointer text-gray-400 hover:underline"
      >
        {siteConfig.email}
      </button>
      {copied && (
        <span role="status" className="ml-2 text-xs text-neutral-500">
          copied
        </span>
      )}
    </span>
  );
};

export default CopyEmail;
