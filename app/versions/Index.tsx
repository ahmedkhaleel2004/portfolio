import { awards } from "@/lib/awards";
import { positions } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import CopyEmail from "../components/CopyEmail";
import FadeIn from "../components/FadeIn";
import LocalTime from "../components/LocalTime";
import PreviewTooltip from "../components/PreviewTooltip";

const LINKS = [
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "X", href: siteConfig.socials.x },
];

function SectionLabel({
  children,
  count,
}: {
  children: string;
  count?: number;
}) {
  return (
    <h2 className="mb-4 flex items-baseline gap-2 text-[11px] tracking-[0.16em] text-(--subtle) uppercase md:mb-0 md:pt-3">
      {children}
      {count !== undefined && (
        <span className="text-(--faint)">{String(count).padStart(2, "0")}</span>
      )}
    </h2>
  );
}

export default function Index() {
  return (
    <main className="theme-index mx-auto max-w-[920px] px-6 pt-16 pb-40 font-[family-name:var(--font-geist-mono)] text-[13px] leading-relaxed text-(--fg-2) sm:px-10 md:pt-28">
      <FadeIn delay={0}>
        <header className="grid gap-x-10 md:grid-cols-[140px_1fr]">
          <div className="mb-8 md:mb-0 md:pt-2">
            <span className="inline-flex size-9 items-center justify-center rounded-md border border-(--line) text-[12px] text-(--fg)">
              AK
            </span>
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-geist)] text-[34px] leading-none font-semibold tracking-[-0.03em] text-(--fg) sm:text-[44px]">
              Ahmed Khaleel
            </h1>
            <p className="mt-3 text-(--subtle)">
              Software engineer · Toronto, Canada ·{" "}
              <LocalTime className="text-(--muted)" />
            </p>
            <p className="mt-8 max-w-[56ch] text-[14px] text-(--fg-2)">
              I build software that solves my problems. I care deeply about
              systems, design, UX, and especially speed. I also study at
              McMaster University.
            </p>
            <p className="mt-6 flex items-center gap-2.5 text-(--muted)">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-(--accent) opacity-50 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-(--accent)" />
              </span>
              Founder of GitDiagram · prev. Microsoft, ElevenLabs, Meta
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-1 text-(--fg) transition-colors hover:text-(--accent)"
                >
                  {link.label}
                  <span className="text-(--faint) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--accent)">
                    ↗
                  </span>
                </a>
              ))}
              <span className="hidden text-(--faint) sm:inline">/</span>
              <CopyEmail />
            </div>
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={110}>
        <section className="mt-24 grid gap-x-10 md:grid-cols-[140px_1fr]">
          <SectionLabel count={projects.length}>Projects</SectionLabel>
          <ol>
            {projects.map((project, index) => (
              <li key={project.title}>
                <PreviewTooltip
                  title={project.title}
                  description={project.desc}
                  imageSrc={project.image}
                >
                  <a
                    href={project.link}
                    aria-label={`${project.title}: ${project.desc}`}
                    className="group -mx-3 flex items-baseline gap-4 rounded-md border-t border-(--line-soft) px-3 py-3 transition-colors hover:border-transparent hover:bg-(--hover)"
                  >
                    <span className="w-6 shrink-0 text-[11px] text-(--faint) tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                      <span className="shrink-0 font-medium text-(--fg) transition-colors group-hover:text-(--accent) sm:w-36">
                        {project.title}
                      </span>
                      <span className="min-w-0 text-(--subtle) sm:truncate">
                        {project.summary}
                      </span>
                    </span>
                    <span className="shrink-0 text-(--faint) transition group-hover:text-(--accent)">
                      ↗
                    </span>
                  </a>
                </PreviewTooltip>
              </li>
            ))}
          </ol>
        </section>
      </FadeIn>

      <FadeIn delay={160}>
        <section className="mt-20 grid gap-x-10 md:grid-cols-[140px_1fr]">
          <SectionLabel>Experience</SectionLabel>
          <ol>
            {positions.map((position) => (
              <li key={`${position.title}-${position.company}`}>
                <PreviewTooltip
                  title={position.title}
                  subtitle={position.company}
                  description={position.desc}
                  focusable
                >
                  <div className="-mx-3 flex flex-col gap-1 rounded-md border-t border-(--line-soft) px-3 py-3 transition-colors hover:border-transparent hover:bg-(--hover) sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="shrink-0 text-[11px] text-(--subtle) tabular-nums sm:w-40">
                      {position.date}
                    </span>
                    <span className="min-w-0 text-(--fg)">
                      {position.company}
                      <span className="text-(--subtle)">
                        {" "}
                        — {position.title}
                      </span>
                    </span>
                  </div>
                </PreviewTooltip>
              </li>
            ))}
          </ol>
        </section>
      </FadeIn>

      <FadeIn delay={210}>
        <section className="mt-20 grid gap-x-10 md:grid-cols-[140px_1fr]">
          <SectionLabel>Recognition</SectionLabel>
          <ul>
            {awards.map((award) => (
              <li
                key={award}
                className="-mx-3 flex gap-4 border-t border-(--line-soft) px-3 py-3 text-(--fg-2)"
              >
                <span className="w-6 shrink-0 text-(--faint)">✦</span>
                {award}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <footer className="mt-24 grid gap-x-10 text-(--faint) md:grid-cols-[140px_1fr]">
        <span />
        <p>© 2026 Ahmed Khaleel · Toronto</p>
      </footer>
    </main>
  );
}
