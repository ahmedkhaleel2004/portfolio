import React from "react";
import ClientWord from "./components/ClientWord";

const Home: React.FC = () => {
  const words = [
    "portfolio",
    "lobby",
    "home",
    "arena",
    "dungeon",
    "server",
    "environment",
    "node",
    "interface",
  ];

  return (
    <main className="p-8 font-body">
      <h1 className="mb-8 text-4xl">👋🏼 Hey, I&apos;m Ahmed.</h1>
      <p className="mb-6">
        Welcome to my{" "}
        <ClientWord
          initial="portfolio"
          words={words}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />
        !
      </p>
      <p className="mb-6">
        I&apos;m a second year Computer Engineering student at McMaster
        University 🎓 based in Hamilton, ON.
      </p>
      <p className="mb-6">
        When I&apos;m not clicking on virtual heads 🎮 and improving myself 💪🏼,
        I dive into the <span className="">Software Engineering</span> rabbit
        hole 🕳️.
      </p>

      <p>
        Contact me at{" "}
        <a
          href="mailto:ahmedkhaleel2004@gmail.com"
          className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
        >
          ahmedkhaleel2004@gmail.com
        </a>
        .
      </p>
    </main>
  );
};

export default Home;
