import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { positions } from "@/lib/experience";

const Home: React.FC = () => {
  return (
    <main className="mx-auto max-w-2xl p-6 font-body">
      <header className="mb-8">
        <h1 className="mb-1 text-2xl font-bold">Ahmed Khaleel</h1>
        <p className="text-base">
          Tinkering full-time on personal projects.{" "}
          <Link href="/old" className="text-sm text-nice-blue underline">
            Old Portfolio
          </Link>
          .
        </p>
        <p className="mt-1 text-sm">
          Previously:{" "}
          <span className="text-gray-400">
            Meta, McMaster Engineering Society, Healthcare Systems R&A Inc.
          </span>
        </p>
        <p className="mt-2 text-sm">
          I try to create useful software using AI. On the side, I&apos;m also
          an amateur photographer, gamer, and competitive typist.
        </p>
        <div className="mt-2 flex gap-4 text-sm">
          <a
            href="https://github.com/ahmedkhaleel2004"
            className="text-nice-blue underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedkhaleel2004"
            className="text-nice-blue underline"
          >
            LinkedIn
          </a>
          <a href="/resume" className="text-nice-blue underline">
            Resume
          </a>
        </div>
        <p className="mt-2 text-sm">
          Email:{" "}
          <a href="mailto:ahmedkhaleel2004@gmail.com" className="text-gray-400">
            ahmedkhaleel2004@gmail.com
          </a>
        </p>
      </header>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Projects</h2>
        <div className="space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-start justify-between">
                <a
                  href={project.link}
                  className="text-sm font-semibold text-nice-blue underline"
                >
                  {project.title}
                </a>
                <a
                  href={project.code}
                  className="text-xs text-gray-400 underline"
                >
                  code
                </a>
              </div>
              <p className="text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Experience</h2>
        <div className="space-y-3">
          {positions.map((position, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold">{position.title}</span>
                <span className="text-xs text-gray-400">{position.date}</span>
              </div>
              <p className="text-xs text-gray-400">{position.company}</p>
              <p className="mt-0.5 text-sm">{position.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-bold">Awards</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>GDSC McMaster Solution Challenge Winner</li>
          <li>DeltaHacks X Winner</li>
          <li>McMaster Engineering Competition 2022 Winner</li>
          <li>USA Computing Olympiad, Gold Division</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold">Fun Facts</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Know every flag and country in the world 🍁</li>
          <li>Studied biomedical engineering 💉</li>
          <li>Memorized 100 digits of pi ⭕</li>
          <li>
            <a
              href="https://monkeytype.com/profile/zite"
              className="text-nice-blue underline"
            >
              185 WPM
            </a>{" "}
            and increasing ⌨️
          </li>
          <li>Born in Dubai 🌃</li>
          <li>
            <a
              href="https://tracker.gg/valorant/profile/riot/Zite%23zite/overview"
              className="text-nice-blue underline"
            >
              Immortal
            </a>{" "}
            in Valorant 🔫
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
