"use client";

import { useRef, useState } from "react";

const EMAIL_ADDRESS = "ahmedkhaleel2004@gmail.com";

const CopyEmail = () => {
  const timeoutRef = useRef<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
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
        {EMAIL_ADDRESS}
      </button>
      {copied && <span className="ml-2 text-xs text-neutral-500">copied</span>}
    </span>
  );
};

export default CopyEmail;
