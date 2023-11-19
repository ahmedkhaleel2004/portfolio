import React from "react";
import Link from "next/link";

const NavButton: React.FC<{ text: string; path: string }> = ({
	text,
	path,
}) => {
	return (
		<Link
			href={path}
			//style={activeStyle}
			className={
				"bg-body-grey text-white font-body text-right transition-all duration-200 ease-in-out hover:text-nice-blue"
			} // Apply hover effect only if not active
		>
			{text}
		</Link>
	);
};

const Navbar = () => {
	const buttons = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Experience", path: "/experience" },
		{ name: "Resume", path: "/resume" },
	];

	return (
		<nav className="flex justify-between p-4">
			<div className="flex flex-col space-y-4 mt-32">
				{buttons.map((button) => (
					<NavButton
						key={button.name}
						text={button.name}
						path={button.path}
					/>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
