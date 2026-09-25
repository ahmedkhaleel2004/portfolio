"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { type VersionId, versions } from "../versions/registry";

export default function VersionSwitcher({ current }: { current: VersionId }) {
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, [contenteditable]")) return;
      const version = versions[Number(event.key) - 1];
      if (version) router.push(`/?v=${version.id}`);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <nav
      aria-label="Design versions"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[10000] flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="pointer-events-auto flex max-w-full [scrollbar-width:none] gap-0.5 overflow-x-auto rounded-full border border-white/15 bg-neutral-950/85 p-1 font-[family-name:var(--font-geist)] text-[13px] shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {versions.map((version, index) => {
          const active = version.id === current;
          return (
            <Link
              key={version.id}
              href={`/?v=${version.id}`}
              aria-current={active ? "page" : undefined}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 whitespace-nowrap transition-colors ${
                active
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span
                className={`hidden font-[family-name:var(--font-geist-mono)] text-[11px] sm:inline ${
                  active ? "text-black/40" : "text-neutral-600"
                }`}
              >
                {index + 1}
              </span>
              {version.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
