import ClientWord from "../components/ClientWord";

const WORDS = [
  "portfolio",
  "server",
  "node",
  "arena",
  "dungeon",
  "lobby",
  "environment",
  "home",
  "interface",
] as const;

function Home() {
  return (
    <main className="font-body p-8">
      <h1 className="mb-8 text-4xl">👋🏼 Hey, I&apos;m Ahmed.</h1>
      <p className="mb-6">
        Welcome to my{" "}
        <ClientWord
          initial="portfolio"
          words={WORDS}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
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
          className="hover:text-nice-blue underline transition-colors duration-200 ease-in-out"
        >
          GitDiagram
        </a>{" "}
        to 300,000+ users and 15,000+ stars ⭐.
      </p>
      <p className="mb-6">
        When I&apos;m not clicking on virtual heads 🎮 and improving myself 💪🏼,
        I dive into the engineering rabbit hole 🕳️.
      </p>

      <p>
        Contact me at{" "}
        <a
          href="mailto:ahmedkhaleel2004@gmail.com"
          className="hover:text-nice-blue underline transition-colors duration-200 ease-in-out"
        >
          ahmedkhaleel2004@gmail.com
        </a>
        .
      </p>
    </main>
  );
}

export default Home;
