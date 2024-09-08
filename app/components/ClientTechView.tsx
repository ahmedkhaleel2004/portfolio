"use client";

import React, { useState } from "react";
import TechSection from "./TechSection";

const ClientTechView = () => {
  const [activeSection, setActiveSection] = useState<string>("web");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="mt-6 flex w-full items-stretch overflow-hidden rounded-lg border-2 border-white">
        <div
          className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey  ${
            activeSection === "languages"
              ? "bg-body-light-grey"
              : "bg-body-grey"
          } text-center`}
          onClick={() => handleSectionClick("languages")}
        >
          Languages
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey ${
            activeSection === "web" ? "bg-body-light-grey" : "bg-body-grey"
          } flex items-center justify-center border-l-2 border-r-2 border-white text-center`}
          onClick={() => handleSectionClick("web")}
        >
          Web
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey ${
            activeSection === "ml" ? "bg-body-light-grey" : "bg-body-grey"
          } flex items-center justify-center border-l-2 border-r-2 border-white text-center`}
          onClick={() => handleSectionClick("ml")}
        >
          ML
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 duration-200 ease-in-out hover:bg-body-light-grey ${
            activeSection === "tools" ? "bg-body-light-grey" : "bg-body-grey"
          } text-center`}
          onClick={() => handleSectionClick("tools")}
        >
          Tools
        </div>
      </div>
      <TechSection activeSection={activeSection} />
    </div>
  );
};

export default ClientTechView;
