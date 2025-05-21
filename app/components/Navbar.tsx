import React from "react";
import ClientNavButton from "./ClientNavButton";

const Navbar = () => {
  const buttons = [
    { name: "Home", path: "/old" },
    { name: "About", path: "/old/about" },
    { name: "Projects", path: "/old/projects" },
    { name: "Experience", path: "/old/experience" },
    // { name: "Resume", path: "/resume" },
  ];

  return (
    <div className="mb-4 flex justify-center sm:mb-0 sm:mt-32 sm:flex-col sm:justify-normal sm:space-y-4">
      {buttons.map((button, index) => (
        <ClientNavButton
          key={index}
          text={button.name}
          path={button.path}
          index={index}
        />
      ))}
    </div>
  );
};

export default Navbar;
