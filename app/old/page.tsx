import React from "react";
import {
  GITDIAGRAM_STARS,
  GITDIAGRAM_USERS,
} from "@/lib/gitdiagram";
import ClientWord from "../components/ClientWord";

const Home: React.FC = () => {
  const words = [
    "portfolio",
    "server",
    "node",
    "arena",
    "dungeon",
    "lobby",
    "environment",
    "home",
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
        I&apos;m a third year Software Engineering student at McMaster
        University 🎓 based in Hamilton, ON.
      </p>
      <p className="mb-6">
        Recently, I shipped{" "}
        <a
          href="https://gitdiagram.com"
          className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
        >
          GitDiagram
        </a>{" "}
        to {GITDIAGRAM_USERS} users and {GITDIAGRAM_STARS} stars ⭐.
      </p>
      <p className="mb-6">
        When I&apos;m not clicking on virtual heads 🎮 and improving myself 💪🏼,
        I dive into the engineering rabbit hole 🕳️.
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
