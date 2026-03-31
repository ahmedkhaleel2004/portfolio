import React from "react";
import { projects } from "@/lib/projects";
import { positions } from "@/lib/experience";
import CopyEmail from "./components/CopyEmail";
import FadeIn from "./components/FadeIn";
import ProjectTooltip from "./components/ProjectTooltip";
import ExperienceTooltip from "./components/ExperienceTooltip";

const Home: React.FC = () => {
  return (
    <main className="mx-auto max-w-3xl p-6 font-body">
      <FadeIn delay={0}>
        <header className="mb-8">
          <h1 className="mb-1 text-2xl font-bold">Ahmed Khaleel</h1>
          <p className="text-sm tracking-wide text-neutral-500">Software Engineer based in Toronto, ON, Canada</p>
          <p className="mt-4 text-sm">
            I build software that solves my problems. I care deeply about
            systems, design, ux, and especially speed. I also study at McMaster
            University.
          </p>
          <p className="mt-4 text-sm">If you are hiring, reach out via email!</p>
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
            Email: <CopyEmail />
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={110}>
        <section
          className="mb-8"
          style={{ contentVisibility: "auto", containIntrinsicSize: "720px" }}
        >
          <h2 className="mb-2 text-xl font-bold">Projects</h2>
          <div className="space-y-4 md:space-y-2">
            {projects.map((project, index) => (
              <ProjectTooltip
                key={index}
                title={project.title}
                description={project.desc}
                imageSrc={project.image}
              >
                <div className="flex w-full flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                      <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                        <a
                          href={project.link}
                          className="text-sm font-semibold underline"
                        >
                          {project.title}
                        </a>
                        {project.title === "Portfolio" && (
                          <a href="/old" className="text-sm text-gray-400 underline">
                            [old]
                          </a>
                        )}
                      </div>
                      <span className="min-w-0 text-sm text-neutral-400 md:flex-1 md:truncate">
                        <span className="hidden md:inline">- </span>
                        {project.summary || project.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </ProjectTooltip>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={160}>
        <section
          className="mb-8"
          style={{ contentVisibility: "auto", containIntrinsicSize: "520px" }}
        >
          <h2 className="mb-2 text-xl font-bold">Experience</h2>
          <div className="space-y-4 md:space-y-2">
            {positions.map((position, index) => (
              <ExperienceTooltip
                key={index}
                title={position.title}
                company={position.company}
                description={position.desc}
              >
                <div className="flex w-full flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <div className="min-w-0 flex-1 md:pr-4">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                      <span className="text-base font-semibold md:text-sm">
                        {position.title}
                      </span>
                      <span className="min-w-0 text-sm text-neutral-400 md:flex-1 md:truncate">
                        <span className="hidden md:inline">- </span>
                        {position.company}
                      </span>
                    </div>
                  </div>
                  <span className="whitespace-nowrap text-sm text-gray-400 md:text-xs">
                    {position.date}
                  </span>
                </div>
              </ExperienceTooltip>
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={210}>
        <section
          className="mb-8"
          style={{ contentVisibility: "auto", containIntrinsicSize: "160px" }}
        >
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
