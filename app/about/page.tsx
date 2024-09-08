import React from "react";
import ClientWord from "../components/ClientWord";
import ClientTechView from "../components/ClientTechView";

const About: React.FC = () => {
  const titlewords = [
    "Documentation",
    "Outline",
    "Summary",
    "Rundown",
    "Synopsis",
    "Overview",
  ];
  const computerwords = [
    "tech support",
    "digital guru",
    "computer expert",
    "IT guy",
    "sysadmin",
    "technician",
  ];
  const bucketlist = [
    "visit 195 countries 🌍",
    "go skydiving 🪂",
    "start a business 💼",
    "change the world 🌐",
    "create equality 🤝🏼",
    "learn languages 🔊",
    "increase discipline 😶",
    "run marathons 🏃🏼‍♂️",
    "climb mountains 🗻",
  ];
  const title2words = ["Presently", "Recently", "Nowadays", "Lately"];
  const techwords = ["Technology", "Stacks", "Services", "Tools"];
  const learningwords = [
    "software design",
    "data structures",
    "algorithims",
    "discrete math",
    "operating systems",
    "databases",
    "machine learning",
    "networking",
    "clocked circuits",
    "electrical circuits",
    "embedded programming",
    "microprocessors",
    "statistics",
  ];
  const title3words = [
    "Additionally",
    "Furthermore",
    "Moreover",
    "Finally",
    "Also",
    "In Conclusion",
  ];
  return (
    <main className="p-8 font-body">
      <span className="text-3xl">📝</span>{" "}
      <ClientWord
        initial="Documentation"
        words={titlewords}
        className="cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8">
        For as long as I can remember, I&apos;ve always been the{" "}
        <ClientWord
          initial="tech support"
          words={computerwords}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />{" "}
        in my family 💻. Honestly, I have to give credit to gaming for starting
        me off.
      </p>
      <p className="mb-8 mt-6">
        Of course, I exist outside of tech. I love doing more than watching,
        leading more than following. I learn through application and live off
        logic. In the future, I hope to{" "}
        <ClientWord
          initial="visit 195 countries 🌍"
          words={bucketlist}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />
        .
      </p>
      <span className="text-3xl">🔧</span>{" "}
      <ClientWord
        initial="Skills"
        words={techwords}
        className="p- cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8">
        I&apos;m quite the multi-disciplinary engineer having dabbled in all the
        fun stuff:
      </p>
      <div className="mb-8">
        <ClientTechView />
      </div>
      <span className="text-3xl">📌</span>{" "}
      <ClientWord
        initial="Currently"
        words={title2words}
        className="cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8">
        I&apos;m a Junior at McMaster University where I&apos;m actively
        learning all the incredible in&apos;s and out&apos;s of{" "}
        <ClientWord
          initial="software design"
          words={learningwords}
          className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        />{" "}
        💻.
      </p>
      <p className="mt-6">
        Whenever I manage to find time in my engineering schedule, I love
        joining and contributing in clubs like:
      </p>
      <ul className="mb-8 mt-4 list-inside list-disc space-y-1 pl-8">
        <li>Google Developer Student Clubs</li>
        <li>McMaster/Ontario Engineering Competition</li>
        <li>DeltaHacks</li>
        <li>McMaster AI Society</li>
        <li>McMaster Competitive Programming</li>
        <li>McMaster Engineering Society</li>
      </ul>
      <span className="text-3xl">✍🏼</span>{" "}
      <ClientWord
        initial="Additionally"
        words={title3words}
        className="cursor-pointer text-3xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      />
      <p className="mt-8">
        Still don&apos;t really know me? Here are some fun facts:
      </p>
      <ul className="mb-8 mt-4 list-inside list-disc space-y-1 pl-8">
        <li>Know every flag and country in the world 🍁</li>
        <li>Studied biomedical engineering 💉</li>
        <li>Memorized 100 digits of pi ⭕</li>
        <li>
          <span>
            <a
              className="cursor-pointer underline transition-all duration-200 ease-in-out hover:text-nice-blue"
              href="https://monkeytype.com/profile/zite"
            >
              185 WPM
            </a>
          </span>{" "}
          and increasing ⌨
        </li>
        <li>Born in Dubai 🌃</li>
        <li>INTJ Personality 🤔</li>
        <li>Immortal in Valorant 🔫</li>
      </ul>
    </main>
  );
};

export default About;
