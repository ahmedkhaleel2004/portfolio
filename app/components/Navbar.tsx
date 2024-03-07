import React from "react";
import ClientNavButton from "./ClientNavButton";

const Navbar = () => {
  const buttons = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    // { name: "Timeline", path: "/timeline" },
    { name: "Resume", path: "/resume" },
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
