"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ClientNavButton: React.FC<{ text: string; path: string }> = ({
  text,
  path,
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`border-r bg-body-grey px-2 text-right font-body transition-all duration-200 ease-in-out sm:border-none sm:px-0 ${
        pathname === path ? "text-nice-blue" : "text-white hover:text-nice-blue"
      }`}
    >
      {text}
    </Link>
  );
};

export default ClientNavButton;
