"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButton: React.FC<{ text: string; path: string }> = ({
	text,
	path,
}) => {
	const pathname = usePathname();

	return (
		<Link
			href={path}
			className={`bg-body-grey font-body text-right transition-all duration-200 ease-in-out ${
				pathname === path
					? "text-nice-blue"
					: "text-white hover:text-nice-blue"
			}`}
		>
			{text}
		</Link>
	);
};

export default NavButton;
