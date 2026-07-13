import ClientWord from "../../components/ClientWord";
import ClientTechView from "../../components/ClientTechView";

const TITLE_WORDS = [
  "Documentation",
  "Outline",
  "Summary",
  "Rundown",
  "Synopsis",
  "Overview",
] as const;

const COMPUTER_WORDS = [
  "tech support",
  "digital guru",
  "computer expert",
  "IT guy",
  "sysadmin",
  "technician",
] as const;

const BUCKET_LIST = [
  "visit 195 countries 🌍",
  "go skydiving 🪂",
  "start a business 💼",
  "change the world 🌐",
  "create equality 🤝🏼",
  "learn languages 🔊",
  "increase discipline 😶",
  "run marathons 🏃🏼‍♂️",
  "climb mountains 🗻",
] as const;

const CURRENT_TITLE_WORDS = [
  "Presently",
  "Recently",
  "Nowadays",
  "Lately",
] as const;

const TECH_WORDS = ["Technology", "Stacks", "Services", "Tools"] as const;

const LEARNING_WORDS = [
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
] as const;

const CONCLUSION_TITLE_WORDS = [
  "Additionally",
  "Furthermore",
  "Moreover",
  "Finally",
  "Also",
  "In Conclusion",
] as const;

function About() {
  return (
    <main className="font-body p-8">
      <span className="text-3xl">📝</span>{" "}
      <ClientWord
        initial="Documentation"
        words={TITLE_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
      />
      <p className="mt-8">
        For as long as I can remember, I&apos;ve always been the{" "}
        <ClientWord
          initial="tech support"
          words={COMPUTER_WORDS}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
        />{" "}
        in my family 💻. Honestly, I have to give credit to gaming for starting
        me off.
      </p>
      <p className="mt-6 mb-8">
        Of course, I exist outside of tech. I love doing more than watching,
        leading more than following. I learn through application and live off
        logic. In the future, I hope to{" "}
        <ClientWord
          initial="visit 195 countries 🌍"
          words={BUCKET_LIST}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
        />
        .
      </p>
      <span className="text-3xl">🔧</span>{" "}
      <ClientWord
        initial="Skills"
        words={TECH_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
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
        words={CURRENT_TITLE_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
      />
      <p className="mt-8">
        I&apos;m a Junior at McMaster University where I&apos;m actively
        learning all the incredible in&apos;s and out&apos;s of{" "}
        <ClientWord
          initial="software design"
          words={LEARNING_WORDS}
          className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
        />{" "}
        💻.
      </p>
      <p className="mt-6">
        Whenever I manage to find time in my engineering schedule, I love
        joining and contributing in clubs like:
      </p>
      <ul className="mt-4 mb-8 list-inside list-disc space-y-1 pl-8">
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
        words={CONCLUSION_TITLE_WORDS}
        className="hover:text-nice-blue cursor-pointer text-3xl underline transition-all duration-200 ease-in-out"
      />
      <p className="mt-8">
        Still don&apos;t really know me? Here are some fun facts:
      </p>
      <ul className="mt-4 mb-8 list-inside list-disc space-y-1 pl-8">
        <li>Know every flag and country in the world 🍁</li>
        <li>Studied biomedical engineering 💉</li>
        <li>Memorized 100 digits of pi ⭕</li>
        <li>
          <span>
            <a
              className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
              href="https://monkeytype.com/profile/zite"
            >
              185 WPM
            </a>
          </span>{" "}
          and increasing ⌨
        </li>
        <li>Born in Dubai 🌃</li>
        <li>INTJ Personality 🤔</li>
        <li>
          <span>
            <a
              className="hover:text-nice-blue cursor-pointer underline transition-all duration-200 ease-in-out"
              href="https://tracker.gg/valorant/profile/riot/Zite%23zite/overview"
            >
              Immortal
            </a>
          </span>{" "}
          in Valorant 🔫
        </li>
      </ul>
    </main>
  );
}

export default About;
