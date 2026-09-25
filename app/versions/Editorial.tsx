import Image from "next/image";
import { awards } from "@/lib/awards";
import { positions } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import FadeIn from "../components/FadeIn";

const serif = "font-[family-name:var(--font-instrument-serif)]";
const mono = "font-[family-name:var(--font-geist-mono)]";
const ACCENT = "var(--accent)";

const STATS = [
  { value: "400k+", label: "People have used GitDiagram" },
  { value: "17k+", label: "GitHub stars on GitDiagram" },
  { value: "3×", label: "Competition & hackathon wins" },
];

function Label({ index, children }: { index: string; children: string }) {
  return (
    <h2
      className={`${mono} mb-8 flex items-center gap-3 border-t border-(--line) pt-4 text-[11px] tracking-[0.18em] text-(--muted) uppercase`}
    >
      <span style={{ color: ACCENT }}>({index})</span>
      {children}
    </h2>
  );
}

export default function Editorial() {
  const [featured, ...rest] = projects;

  return (
    <div className="theme-editorial min-h-screen bg-(--bg) font-[family-name:var(--font-geist)] text-(--fg-2) antialiased">
      <div className="mx-auto max-w-[1180px] px-5 pb-40 sm:px-10">
        <nav
          className={`${mono} flex items-center justify-between py-6 text-[11px] tracking-[0.14em] text-(--muted) uppercase`}
        >
          <span className="text-(--fg)">Ahmed Khaleel</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-(--fg)"
          >
            Contact ↗
          </a>
        </nav>

        <FadeIn delay={0}>
          <header className="pt-16 pb-20 sm:pt-28 sm:pb-28">
            <p
              className={`${mono} mb-8 flex items-center gap-2 text-[11px] tracking-[0.18em] text-(--muted) uppercase`}
            >
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              Software engineer — Toronto
            </p>
            <h1
              className={`${serif} max-w-[14ch] text-[clamp(52px,9.5vw,128px)] leading-[0.92] tracking-[-0.02em] text-(--fg)`}
            >
              I build software that solves <em className="italic">my</em>{" "}
              problems.
            </h1>
            <div className="mt-12 grid gap-8 sm:grid-cols-[1fr_1fr] sm:gap-16">
              <p className="max-w-[46ch] text-[17px] leading-[1.55] text-(--fg-2)">
                I care deeply about systems, design, UX, and especially speed.
                Founder of{" "}
                <a
                  href="https://gitdiagram.com"
                  className="text-(--fg) underline decoration-(--faint) underline-offset-4 hover:decoration-(--fg)"
                >
                  GitDiagram
                </a>
                . Previously at Microsoft, ElevenLabs, and Meta. Studying at
                McMaster University.
              </p>
              <div className="flex flex-wrap items-end gap-x-6 gap-y-2 text-[15px] sm:justify-end">
                {[
                  ["GitHub", siteConfig.socials.github],
                  ["LinkedIn", siteConfig.socials.linkedin],
                  ["X", siteConfig.socials.x],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-(--muted) transition-colors hover:text-(--fg)"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>
          </header>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="grid grid-cols-1 border-t border-(--line) sm:grid-cols-3">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`py-8 sm:py-10 ${index > 0 ? "border-t border-(--line) sm:border-t-0 sm:border-l sm:pl-8" : ""}`}
              >
                <p
                  className={`${serif} text-[64px] leading-none tracking-[-0.02em] text-(--fg) sm:text-[80px]`}
                >
                  {stat.value}
                </p>
                <p className="mt-3 text-[14px] text-(--muted)">{stat.label}</p>
              </div>
            ))}
          </section>
        </FadeIn>

        <FadeIn delay={160}>
          <section className="mt-28">
            <Label index="01">Selected work</Label>

            <a href={featured.link} className="group block">
              <div className="overflow-hidden rounded-[4px] bg-(--surface)">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={`${featured.title} screenshot`}
                    width={2268}
                    height={1473}
                    sizes="(min-width: 1180px) 1100px, 100vw"
                    priority
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                )}
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className={`${serif} text-[40px] leading-none text-(--fg)`}>
                  {featured.title}
                </h3>
                <p className="max-w-[52ch] text-[15px] text-(--muted)">
                  {featured.desc}
                </p>
              </div>
            </a>

            <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-20 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3">
              {rest.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-(--surface)">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 360px, 50vw"
                        unoptimized={project.image.endsWith(".gif")}
                        className="object-cover object-top opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    ) : (
                      <span
                        className={`${serif} absolute inset-0 flex items-center justify-center text-[72px] text-(--fg)/15 italic transition-colors group-hover:text-(--fg)/30 sm:text-[120px]`}
                      >
                        {project.title[0]}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`${serif} mt-3 text-[22px] leading-none text-(--fg) sm:mt-4 sm:text-[28px]`}
                  >
                    {project.title}
                    <span
                      className="ml-2 inline-block text-[18px] opacity-0 transition group-hover:opacity-100"
                      style={{ color: ACCENT }}
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-(--muted) sm:mt-2 sm:text-[14px]">
                    {project.summary}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </FadeIn>

        <section className="mt-32">
          <Label index="02">Experience</Label>
          <ol>
            {positions.map((position) => (
              <li
                key={`${position.title}-${position.company}`}
                className="grid gap-2 border-b border-(--line) py-6 first:pt-0 sm:grid-cols-[1.1fr_1.4fr_auto] sm:items-baseline sm:gap-8"
              >
                <h3 className={`${serif} text-[32px] leading-none text-(--fg)`}>
                  {position.company}
                </h3>
                <div>
                  <p className="text-[15px] text-(--fg-2)">{position.title}</p>
                  <p className="mt-1 text-[14px] leading-snug text-(--subtle)">
                    {position.desc}
                  </p>
                </div>
                <p
                  className={`${mono} text-[12px] text-(--subtle) sm:text-right`}
                >
                  {position.date}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-32">
          <Label index="03">Recognition</Label>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {awards.map((award) => (
              <li
                key={award}
                className="border-b border-(--line) py-4 text-[16px] text-(--fg-2)"
              >
                {award}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-40">
          <p
            className={`${mono} mb-6 text-[11px] tracking-[0.18em] text-(--muted) uppercase`}
          >
            Hiring? Say hello
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`${serif} group block text-[clamp(34px,7vw,96px)] leading-[0.95] tracking-[-0.02em] break-words text-(--fg)`}
          >
            ahmedkhaleel2004
            <span className="text-(--subtle) transition-colors group-hover:text-(--fg)">
              @gmail.com
            </span>
            <span
              className="mt-4 block h-[2px] w-full origin-left scale-x-[0.12] transition-transform duration-700 ease-out group-hover:scale-x-100"
              style={{ backgroundColor: ACCENT }}
            />
          </a>
        </footer>
      </div>
    </div>
  );
}
