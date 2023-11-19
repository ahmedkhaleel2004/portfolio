"use client";

import React, { useState } from "react";

const ClientTechView = () => {
	const [activeSection, setActiveSection] = useState<string>("front-end");

	const handleSectionClick = (section: string) => {
		// Perform any action on section click
		setActiveSection(section);
	};

	return (
		<div className="mt-4 flex w-full border-white border-2 rounded-lg overflow-hidden">
			<div
				className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey  ${
					activeSection === "front-end"
						? "bg-body-light-grey"
						: "bg-body-grey"
				} text-center`}
				onClick={() => handleSectionClick("front-end")}
			>
				Front-End
			</div>
			<div
				className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey ${
					activeSection === "back-end"
						? "bg-body-light-grey"
						: "bg-body-grey"
				} text-center border-l border-r border-white`}
				onClick={() => handleSectionClick("back-end")}
			>
				Back-End
			</div>
			<div
				className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey ${
					activeSection === "ai-data"
						? "bg-body-light-grey"
						: "bg-body-grey"
				} text-center`}
				onClick={() => handleSectionClick("ai-data")}
			>
				AI / Data
			</div>
		</div>
	);
};

export default ClientTechView;
