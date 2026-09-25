import Link from "next/link";
import { projects } from "@/lib/projects";
import { positions } from "@/lib/experience";
import { awards } from "@/lib/awards";
import CopyEmail from "../components/CopyEmail";
import FadeIn from "../components/FadeIn";
import PreviewTooltip from "../components/PreviewTooltip";

export default function Original() {
  return (
    <div className="theme-original mx-auto mt-5 max-w-3xl text-(--fg) sm:mt-10 sm:flex">
      <main className="font-body mx-auto max-w-3xl p-6">
        <FadeIn delay={0}>
          <header className="mb-8">
            <h1 className="mb-1 text-2xl font-bold">Ahmed Khaleel</h1>
            <p className="text-sm tracking-wide text-(--subtle)">
              Software Engineer based in Toronto, ON, Canada
            </p>
            <p className="mt-4 text-sm">
              I build software that solves my problems. I care deeply about
              systems, design, ux, and especially speed. I also study at
              McMaster University.
            </p>
            <p className="mt-4 text-sm">
              If you are hiring, reach out via email!
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/ahmedkhaleel2004"
                className="underline"
              >
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
              {projects.map((project) => (
                <PreviewTooltip
                  key={project.title}
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
                            aria-label={`${project.title}: ${project.desc}`}
                            className="text-sm font-semibold underline"
                          >
                            {project.title}
                          </a>
                          {project.title === "Portfolio" && (
                            <Link
                              href="/old"
                              className="text-sm text-(--muted) underline"
                            >
                              [old]
                            </Link>
                          )}
                        </div>
                        <span className="min-w-0 text-sm text-(--muted) md:flex-1 md:truncate">
                          <span className="hidden md:inline">- </span>
                          {project.summary}
                        </span>
                      </div>
                    </div>
                  </div>
                </PreviewTooltip>
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
              {positions.map((position) => (
                <PreviewTooltip
                  key={`${position.title}-${position.company}`}
                  title={position.title}
                  subtitle={position.company}
                  description={position.desc}
                  focusable
                >
                  <div className="flex w-full flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div className="min-w-0 flex-1 md:pr-4">
                      <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                        <span className="text-base font-semibold md:text-sm">
                          {position.title}
                        </span>
                        <span className="min-w-0 text-sm text-(--muted) md:flex-1 md:truncate">
                          <span className="hidden md:inline">- </span>
                          {position.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm whitespace-nowrap text-(--muted) md:text-xs">
                      {position.date}
                    </span>
                  </div>
                </PreviewTooltip>
              ))}
            </div>
          </section>
        </FadeIn>
        <FadeIn delay={210}>
          <section
            className="mb-8"
            style={{ contentVisibility: "auto", containIntrinsicSize: "160px" }}
          >
            <h2 className="mb-2 text-xl font-bold">Awards &amp; Recognition</h2>
            <div className="space-y-1 text-sm">
              {awards.map((award) => (
                <p key={award}>{award}</p>
              ))}
            </div>
          </section>
        </FadeIn>
      </main>
    </div>
  );
}
