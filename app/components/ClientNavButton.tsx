"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ClientNavButtonProps {
  text: string;
  path: string;
  index: number;
}

function ClientNavButton({ text, path, index }: ClientNavButtonProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      aria-current={pathname === path ? "page" : undefined}
      className={`${index !== 3 ? "border-r" : ""} bg-body-grey font-body px-2 text-right transition-all duration-200 ease-in-out sm:border-none sm:px-0 ${
        pathname === path ? "text-nice-blue" : "hover:text-nice-blue text-white"
      }`}
    >
      {text}
    </Link>
  );
}

export default ClientNavButton;
