"use client";

import { useState } from "react";
import TechSection, { type TechSectionId } from "./TechSection";

const TECH_SECTIONS = [
  {
    id: "languages",
    label: "Languages",
    className:
      "flex-1 cursor-pointer p-4 text-center duration-200 ease-in-out hover:bg-body-light-grey",
  },
  {
    id: "web",
    label: "Web",
    className:
      "flex flex-1 cursor-pointer items-center justify-center border-l-2 border-r-2 border-white p-4 text-center duration-200 ease-in-out hover:bg-body-light-grey",
  },
  {
    id: "ml",
    label: "ML",
    className:
      "flex flex-1 cursor-pointer items-center justify-center border-l-2 border-r-2 border-white p-4 text-center duration-200 ease-in-out hover:bg-body-light-grey",
  },
  {
    id: "tools",
    label: "Tools",
    className:
      "flex-1 cursor-pointer p-4 text-center duration-200 ease-in-out hover:bg-body-light-grey",
  },
] as const satisfies ReadonlyArray<{
  id: TechSectionId;
  label: string;
  className: string;
}>;

function ClientTechView() {
  const [activeSection, setActiveSection] = useState<TechSectionId>("web");

  return (
    <div>
      <div className="mt-6 flex w-full items-stretch overflow-hidden rounded-lg border-2 border-white">
        {TECH_SECTIONS.map(({ id, label, className }) => (
          <button
            key={id}
            type="button"
            aria-pressed={activeSection === id}
            className={`${className} appearance-none font-[inherit] ${
              activeSection === id ? "bg-body-light-grey" : "bg-body-grey"
            }`}
            onClick={() => setActiveSection(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <TechSection activeSection={activeSection} />
    </div>
  );
}

export default ClientTechView;
