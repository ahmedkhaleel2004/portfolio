import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { positions } from "@/lib/experience";
import Highlights from "./components/Highlights";
import FadeIn from "./components/FadeIn";

const Home: React.FC = () => {
  return (
    <main className="mx-auto max-w-3xl p-6 font-body">
      <FadeIn delay={0}>
        <header className="mb-8">
          <h1 className="mb-1 text-2xl font-bold">Ahmed Khaleel</h1>
          <p className="text-base">
            Software Engineer based in Toronto, ON, Canada
          </p>
          {/* <p className="mt-2 text-sm">
            Previously:{" "}
            <span className="text-gray-400">
              Meta, McMaster Engineering Society, Healthcare Systems R&A Inc.
            </span>
          </p> */}
          <p className="mt-4 text-sm">
            I build software that solves my problems. I care deeply about
            systems, design, ux, and especially speed. I also study at McMaster
            University.
          </p>
          <p className="mt-4 text-sm">
            If you are hiring, reach out via email!
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <a href="https://github.com/ahmedkhaleel2004" className="underline">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedkhaleel2004"
              className="underline"
            >
              LinkedIn
            </a>
            <a href="https://x.com/ahmedkhaleel04" className="underline">
              X/Twitter
            </a>
          </div>
          <p className="mt-4 text-sm">
            Email:{" "}
            <a
              href="mailto:ahmedkhaleel2004@gmail.com"
              className="text-gray-400 underline"
            >
              ahmedkhaleel2004@gmail.com
            </a>
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={100}>
        <Highlights />
      </FadeIn>

      <FadeIn delay={200}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Projects</h2>
          <div className="space-y-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex w-full items-baseline justify-between"
              >
                <div className="min-w-0 flex-1 pr-4">
                  <div className="flex items-baseline gap-2">
                    <a
                      href={project.link}
                      className="whitespace-nowrap text-sm font-semibold underline"
                    >
                      {project.title}
                    </a>
                    <span className="truncate text-sm text-neutral-400">
                      — {project.desc}
                    </span>
                  </div>
                </div>
                <a
                  href={project.code}
                  className="whitespace-nowrap text-xs text-gray-400 underline"
                >
                  code
                </a>
              </div>
            ))}
            <div className="mt-1 text-xs">
              <Link href="/old" className="text-gray-400 underline">
                view old version
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={300}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Experience</h2>
          <div className="space-y-3">
            {positions.map((position, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold">
                    {position.title}
                  </span>
                  <span className="text-xs text-gray-400">{position.date}</span>
                </div>
                <p className="text-xs text-gray-400">{position.company}</p>
                <p className="mt-0.5 text-sm">{position.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={400}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Awards</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>GDSC McMaster Solution Challenge Winner</li>
            <li>DeltaHacks X Winner</li>
            <li>McMaster Engineering Competition 2022 Winner</li>
            <li>USA Computing Olympiad, Gold Division</li>
          </ul>
        </section>
      </FadeIn>
      {/* 
      <section>
        <h2 className="mb-2 text-xl font-bold">Fun Facts</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Know every flag and country in the world 🍁</li>
          <li>Studied biomedical engineering 💉</li>
          <li>Memorized 100 digits of pi ⭕</li>
          <li>
            <a href="https://monkeytype.com/profile/zite" className="underline">
              185 WPM
            </a>{" "}
            and increasing ⌨️
          </li>
          <li>Born in Dubai 🌃</li>
          <li>
            <a
              href="https://tracker.gg/valorant/profile/riot/Zite%23zite/overview"
              className="underline"
            >
              Immortal
            </a>{" "}
            in Valorant 🔫
          </li>
        </ul>
      </section> */}
    </main>
  );
};

export default Home;
