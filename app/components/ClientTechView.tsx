"use client";

import React, { useState } from "react";
import TechSection from "./TechSection";

const ClientTechView = () => {
  const [activeSection, setActiveSection] = useState<string>("front-end");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="mt-6 flex w-full overflow-hidden rounded-lg border-2 border-white">
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
            activeSection === "back-end" ? "bg-body-light-grey" : "bg-body-grey"
          } border-l-2 border-r-2 border-white text-center`}
          onClick={() => handleSectionClick("back-end")}
        >
          Back-End
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey ${
            activeSection === "ml-other" ? "bg-body-light-grey" : "bg-body-grey"
          } text-center`}
          onClick={() => handleSectionClick("ml-other")}
        >
          ML / Other
        </div>
      </div>
      <TechSection activeSection={activeSection} />
    </div>
  );
};

export default ClientTechView;
