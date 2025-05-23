import React from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { positions } from "@/lib/experience";
import Highlights from "./components/Highlights";
import FadeIn from "./components/FadeIn";
import ProjectTooltip from "./components/ProjectTooltip";
import ExperienceTooltip from "./components/ExperienceTooltip";

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
              className="text-gray-400 hover:underline"
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
          <h2 className="mb-2 text-xl font-bold">
            Projects
            <span className="ml-2 text-xs text-gray-400">- hover!</span>
          </h2>
          <div className="space-y-4 md:space-y-2">
            {projects.map((project, index) => (
              <ProjectTooltip
                key={index}
                title={project.title}
                description={project.desc}
                imageSrc={project.image}
              >
                <div className="flex w-full flex-col items-baseline justify-between md:flex-row">
                  {/* Mobile layout */}
                  <div className="flex w-full justify-between md:hidden">
                    <div className="flex flex-col">
                      <a
                        href={project.link}
                        className="text-sm font-semibold underline md:whitespace-nowrap"
                      >
                        {project.title}
                      </a>
                      <span className="block cursor-default text-base text-neutral-400">
                        {project.title === "Portfolio" && (
                          <>
                            <Link
                              href="/old"
                              className="mr-1 text-gray-400 underline"
                            >
                              [old]
                            </Link>
                          </>
                        )}
                        {project.summary || project.desc}
                      </span>
                    </div>
                    <a
                      href={project.code}
                      className="ml-2 flex-shrink-0 self-start whitespace-nowrap text-sm font-medium text-gray-400 underline"
                    >
                      code
                    </a>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden min-w-0 flex-1 pr-4 md:block">
                    <div className="flex items-baseline">
                      <a
                        href={project.link}
                        className="text-sm font-semibold underline md:whitespace-nowrap"
                      >
                        {project.title}
                      </a>
                      <div className="w-0 min-w-0 flex-1 overflow-hidden">
                        <span className="block max-w-full cursor-default truncate text-sm text-neutral-400">
                          {project.title === "Portfolio" && (
                            <>
                              &nbsp;
                              <Link
                                href="/old"
                                className="mr-1 text-gray-400 underline"
                              >
                                [old]
                              </Link>
                            </>
                          )}
                          &nbsp;— {project.summary || project.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={project.code}
                    className="hidden whitespace-nowrap text-sm font-medium text-gray-400 underline md:ml-2 md:block"
                  >
                    code
                  </a>
                </div>
              </ProjectTooltip>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={300}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Experience</h2>
          <div className="space-y-4 md:space-y-2">
            {positions.map((position, index) => (
              <ExperienceTooltip
                key={index}
                title={position.title}
                company={position.company}
                description={position.desc}
              >
                <div className="flex w-full flex-col items-baseline justify-between md:flex-row">
                  <div className="min-w-0 flex-1 pr-4">
                    <div className="flex flex-col items-baseline md:flex-row">
                      <span className="mr-0 text-base font-semibold md:mr-2 md:whitespace-nowrap md:text-sm">
                        {position.title}
                      </span>
                      <div className="hidden w-0 min-w-0 flex-1 overflow-hidden md:block">
                        <span className="block max-w-full cursor-default truncate text-sm text-neutral-400">
                          — {position.company}
                        </span>
                      </div>
                      <div className="block min-w-0 flex-1 md:hidden">
                        <span className="block cursor-default text-base text-neutral-400">
                          {position.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="ml-0 mt-1 whitespace-nowrap text-sm text-gray-400 md:ml-2 md:mt-0 md:text-xs">
                    {position.date}
                  </span>
                </div>
              </ExperienceTooltip>
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={400}>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold">Awards</h2>
          <div className="space-y-1 text-sm">
            <p>DeltaHacks X Prize Winner</p>
            <p>Engineering Award of Excellence</p>
            <p>First Place @ Google Solution Challenge McMaster</p>
            <p>First Place @ McMaster Engineering Competition 2022</p>
          </div>
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
