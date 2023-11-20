import React from "react";
import ClientNavButton from "./ClientNavButton";

const Navbar = () => {
	const buttons = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Timeline", path: "/timeline" },
		{ name: "Resume", path: "/resume" },
	];

	return (
		<nav className="flex justify-between pl-2">
			<div className="flex flex-col space-y-4 mt-32">
				{buttons.map((button) => (
					<ClientNavButton
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
