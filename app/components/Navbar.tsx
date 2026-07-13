import ClientNavButton from "./ClientNavButton";

const NAV_BUTTONS = [
  { name: "Home", path: "/old" },
  { name: "About", path: "/old/about" },
  { name: "Projects", path: "/old/projects" },
  { name: "Experience", path: "/old/experience" },
] as const;

function Navbar() {
  return (
    <div className="mb-4 flex justify-center sm:mt-32 sm:mb-0 sm:flex-col sm:justify-normal sm:space-y-4">
      {NAV_BUTTONS.map((button, index) => (
        <ClientNavButton
          key={button.path}
          text={button.name}
          path={button.path}
          index={index}
        />
      ))}
    </div>
  );
}

export default Navbar;
