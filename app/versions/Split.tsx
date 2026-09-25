"use client";

import Image from "next/image";
import { useState } from "react";
import { awards } from "@/lib/awards";
import { positions } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import CopyEmail from "../components/CopyEmail";
import FadeIn from "../components/FadeIn";

const BLUE = "var(--accent)";

const LINKS = [
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "X", href: siteConfig.socials.x },
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-3 text-[13px] font-medium text-(--subtle)">{children}</h2>
  );
}

export default function Split() {
  const [active, setActive] = useState(0);
  const activeProject = projects[active];

  return (
    <div className="theme-split min-h-screen bg-(--bg) font-[family-name:var(--font-geist)] text-[15px] text-(--fg-2) antialiased">
      <div className="mx-auto grid max-w-[1320px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <aside className="px-6 pt-16 sm:px-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-14 lg:pr-6 lg:pl-14">
          <FadeIn delay={0}>
            <div>
              <h1 className="text-[32px] leading-tight font-semibold tracking-[-0.025em] text-(--fg) lg:text-[36px]">
                Ahmed Khaleel
              </h1>
              <p className="mt-1 text-(--subtle)">
                Software engineer in Toronto
              </p>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-(--fg-2)">
                I build software that solves my problems. I care deeply about
                systems, design, UX, and especially speed. Founder of
                GitDiagram; previously Microsoft, ElevenLabs, and Meta.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-(--fg) underline decoration-(--faint) underline-offset-4 transition-colors hover:decoration-(--accent)"
                  >
                    {link.label}
                  </a>
                ))}
                <CopyEmail />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <figure className="mt-12 hidden lg:block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-(--surface) ring-1 ring-(--line)">
                {projects.map((project, index) =>
                  project.image ? (
                    <Image
                      key={project.title}
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1320px) 560px, 42vw"
                      priority={index === 0}
                      unoptimized={project.image.endsWith(".gif")}
                      className={`object-cover object-top transition-[opacity,transform] duration-500 ease-out ${
                        index === active
                          ? "scale-100 opacity-100"
                          : "scale-[1.03] opacity-0"
                      }`}
                    />
                  ) : null,
                )}
                {!activeProject.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-[64px] font-semibold tracking-tight text-(--fg)/10">
                    {activeProject.title}
                  </div>
                )}
              </div>
              <figcaption className="mt-4 text-[13px] leading-relaxed">
                <span className="font-medium text-(--fg)">
                  {activeProject.title}
                </span>
                <span className="text-(--subtle)"> — {activeProject.desc}</span>
              </figcaption>
            </figure>
          </FadeIn>
        </aside>

        <main className="px-6 pt-14 pb-40 sm:px-10 lg:py-14 lg:pr-14 lg:pl-10">
          <FadeIn delay={80}>
            <section>
              <SectionTitle>Projects</SectionTitle>
              <ul className="-mx-3">
                {projects.map((project, index) => (
                  <li key={project.title}>
                    <a
                      href={project.link}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className={`group flex items-center gap-4 rounded-lg px-3 py-3 transition-colors ${
                        index === active ? "lg:bg-(--hover)" : ""
                      } hover:bg-(--hover)`}
                    >
                      <span className="relative size-12 shrink-0 overflow-hidden rounded-md bg-(--surface) ring-1 ring-(--line) lg:hidden">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt=""
                            fill
                            sizes="48px"
                            unoptimized={project.image.endsWith(".gif")}
                            className="object-cover object-top"
                          />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-(--fg)">
                          {project.title}
                        </span>
                        <span className="block text-[14px] leading-snug text-(--subtle)">
                          {project.summary}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 transition ${
                          index === active
                            ? "lg:translate-x-0 lg:opacity-100"
                            : "lg:-translate-x-1 lg:opacity-0"
                        } text-(--faint) lg:text-(--accent)`}
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={140}>
            <section className="mt-16">
              <SectionTitle>Experience</SectionTitle>
              <ol className="relative ml-1 border-l border-(--line)">
                {positions.map((position, index) => (
                  <li
                    key={`${position.title}-${position.company}`}
                    className="relative pb-7 pl-6 last:pb-0"
                  >
                    <span
                      className="absolute top-[7px] -left-[5px] size-[9px] rounded-full border-2 border-(--bg)"
                      style={{
                        backgroundColor: index === 0 ? BLUE : "var(--faint)",
                      }}
                    />
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <p className="font-medium text-(--fg)">
                        {position.company}
                        <span className="font-normal text-(--subtle)">
                          {" "}
                          · {position.title}
                        </span>
                      </p>
                      <p className="shrink-0 text-[13px] text-(--subtle) tabular-nums">
                        {position.date}
                      </p>
                    </div>
                    <p className="mt-1 max-w-[60ch] text-[14px] leading-relaxed text-(--muted)">
                      {position.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </FadeIn>

          <FadeIn delay={200}>
            <section className="mt-16">
              <SectionTitle>Awards</SectionTitle>
              <ul className="space-y-2 text-(--fg-2)">
                {awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </section>
          </FadeIn>
        </main>
      </div>
    </div>
  );
}
