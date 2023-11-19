import React from "react";
import NavButton from "./NavButton";

const Navbar = () => {
	const buttons = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Experience", path: "/experience" },
		{ name: "Timeline", path: "/timeline" },
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
