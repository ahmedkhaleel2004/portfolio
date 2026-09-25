"use client";

import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { awards } from "@/lib/awards";
import { positions } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import LocalTime from "../components/LocalTime";

const AMBER = "var(--accent)";

const CONTACTS = [
  { label: "github", href: siteConfig.socials.github },
  { label: "linkedin", href: siteConfig.socials.linkedin },
  { label: "x", href: siteConfig.socials.x },
  { label: "email", href: `mailto:${siteConfig.email}` },
];

const SUGGESTIONS = ["help", "open gitdiagram", "email", "github"];

function Prompt({ children }: { children: ReactNode }) {
  return (
    <p className="text-(--muted)">
      <span style={{ color: AMBER }}>~</span> ${" "}
      <span className="text-(--fg)">{children}</span>
    </p>
  );
}

function run(raw: string): { output: ReactNode; href?: string } {
  const [command = "", ...args] = raw.trim().toLowerCase().split(/\s+/);
  const arg = args.join(" ");

  if (command === "help") {
    return {
      output: (
        <div className="grid grid-cols-[9rem_1fr] gap-x-4 text-(--muted)">
          <span className="text-(--fg)">ls</span> list projects
          <span className="text-(--fg)">open &lt;name&gt;</span> open a project
          <span className="text-(--fg)">email</span> copy my email
          <span className="text-(--fg)">github · linkedin · x</span> socials
          <span className="text-(--fg)">clear</span> clear output
        </div>
      ),
    };
  }
  if (command === "ls") {
    return { output: projects.map((p) => p.title.toLowerCase()).join("  ") };
  }
  if (command === "whoami") {
    return { output: "Ahmed Khaleel — software engineer, Toronto." };
  }
  if (command === "email") {
    void navigator.clipboard?.writeText(siteConfig.email).catch(() => {});
    return { output: `${siteConfig.email} (copied to clipboard)` };
  }
  const contact = CONTACTS.find((c) => c.label === command);
  if (contact)
    return { output: `opening ${contact.href}…`, href: contact.href };
  if (command === "open" || command === "cd") {
    const project = projects.find((p) =>
      p.title
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .startsWith(arg.replace(/[^a-z0-9]/g, "")),
    );
    if (arg && project)
      return { output: `opening ${project.link}…`, href: project.link };
    return { output: `no such project: ${arg || "(none)"} — try "ls"` };
  }
  if (command === "sudo") return { output: "nice try." };
  return { output: `command not found: ${command}. type "help".` };
}

export default function Terminal() {
  const [selected, setSelected] = useState(0);
  const [history, setHistory] = useState<
    { input: string; output: ReactNode }[]
  >([]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (document.activeElement === inputRef.current) return;
      if (event.key === "j" || event.key === "ArrowDown") {
        event.preventDefault();
        setSelected((i) => {
          const next = Math.min(i + 1, projects.length - 1);
          rowRefs.current[next]?.focus();
          return next;
        });
      } else if (event.key === "k" || event.key === "ArrowUp") {
        event.preventDefault();
        setSelected((i) => {
          const next = Math.max(i - 1, 0);
          rowRefs.current[next]?.focus();
          return next;
        });
      } else if (event.key === "/" || event.key === ":") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const submit = (input: string) => {
    if (!input.trim()) return;
    if (input.trim().toLowerCase() === "clear") {
      setHistory([]);
    } else {
      const { output, href } = run(input);
      setHistory((h) => [...h, { input, output }]);
      if (href)
        window.setTimeout(() => window.open(href, "_blank", "noopener"), 250);
    }
    setValue("");
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit(value);
  };

  return (
    <div className="theme-terminal min-h-screen bg-(--bg) font-[family-name:var(--font-geist-mono)] text-[13px] leading-[1.7] text-(--fg) selection:bg-(--accent-bg) selection:text-black sm:text-[14px]">
      <div className="sticky top-0 z-10 border-b border-(--line) bg-(--bg)/90 backdrop-blur">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-5 py-2.5 text-[11px] text-(--muted) sm:px-8">
          <span>
            <span style={{ color: AMBER }}>●</span> ahmed@khaleel: ~
          </span>
          <span>
            TOR <LocalTime />
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-[860px] space-y-10 px-5 pt-10 pb-44 sm:px-8 sm:pt-16">
        <section>
          <Prompt>
            <span className="inline-block [animation:type_0.3s_steps(6)_both] overflow-hidden align-bottom whitespace-nowrap motion-reduce:animate-none">
              whoami
            </span>
          </Prompt>
          <div className="mt-3 [animation:term-in_0.3s_0.3s_both] motion-reduce:animate-none">
            <h1
              className="text-[28px] leading-tight font-semibold tracking-tight sm:text-[36px]"
              style={{ color: AMBER }}
            >
              Ahmed Khaleel
            </h1>
            <p className="text-(--muted)">
              software engineer · toronto, canada
            </p>
            <p className="mt-4 max-w-[62ch]">
              I build software that solves my problems. I care deeply about
              systems, design, UX, and especially speed. Founder of GitDiagram,
              previously at Microsoft, ElevenLabs, and Meta. Studying at
              McMaster.
            </p>
          </div>
        </section>

        <section className="[animation:term-in_0.3s_0.4s_both] motion-reduce:animate-none">
          <Prompt>ls ~/projects</Prompt>
          <ol className="mt-3">
            {projects.map((project, index) => {
              const active = index === selected;
              return (
                <li key={project.title}>
                  <a
                    ref={(el) => {
                      rowRefs.current[index] = el;
                    }}
                    href={project.link}
                    onMouseEnter={() => setSelected(index)}
                    onFocus={() => setSelected(index)}
                    className={`-mx-2 flex items-baseline gap-3 rounded-sm px-2 py-1 outline-none sm:py-0.5 ${
                      active ? "bg-(--accent-bg) text-black" : ""
                    }`}
                  >
                    <span className="w-3 shrink-0">{active ? "›" : ""}</span>
                    <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:gap-3">
                      <span
                        className={`shrink-0 font-medium sm:w-40 ${active ? "" : "text-(--fg)"}`}
                      >
                        {project.title.toLowerCase()}
                      </span>
                      <span
                        className={`min-w-0 flex-1 sm:truncate ${active ? "text-black/70" : "text-(--muted)"}`}
                      >
                        {project.summary}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
          <p className="mt-3 hidden text-[11px] text-(--faint) md:block">
            j/k or ↑/↓ to move · enter to open · / to type a command
          </p>
        </section>

        <section className="[animation:term-in_0.3s_0.45s_both] motion-reduce:animate-none">
          <Prompt>cat experience.log</Prompt>
          <ol className="mt-3 space-y-2 sm:space-y-0.5">
            {positions.map((position) => (
              <li
                key={`${position.title}-${position.company}`}
                className="flex flex-col sm:flex-row sm:gap-3"
              >
                <span className="shrink-0 whitespace-nowrap text-(--faint) sm:w-64">
                  [{position.date}]
                </span>
                <span>
                  <span style={{ color: AMBER }}>
                    {position.company.toLowerCase()}
                  </span>{" "}
                  <span className="text-(--muted)">{position.title}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="[animation:term-in_0.3s_0.5s_both] motion-reduce:animate-none">
          <Prompt>cat awards.txt</Prompt>
          <ul className="mt-3">
            {awards.map((award) => (
              <li key={award} className="flex gap-3">
                <span className="w-3 shrink-0" style={{ color: AMBER }}>
                  *
                </span>
                {award}
              </li>
            ))}
          </ul>
        </section>

        <section className="[animation:term-in_0.3s_0.55s_both] motion-reduce:animate-none">
          <Prompt>contact --all</Prompt>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="underline decoration-(--faint) underline-offset-4 hover:text-(--accent) hover:decoration-(--accent)"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </section>

        <section className="[animation:term-in_0.3s_0.6s_both] motion-reduce:animate-none">
          {history.map((entry, index) => (
            <div key={index} className="mb-3">
              <Prompt>{entry.input}</Prompt>
              <div className="mt-1 break-words">{entry.output}</div>
            </div>
          ))}
          <form
            onSubmit={onSubmit}
            className="flex items-baseline gap-0 text-(--muted)"
          >
            <label htmlFor="terminal-input" className="shrink-0">
              <span style={{ color: AMBER }}>~</span> $&nbsp;
            </label>
            <div className="relative flex-1">
              <input
                id="terminal-input"
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder='type "help"'
                className="peer w-full bg-transparent text-[16px] text-(--fg) caret-(--accent) outline-none placeholder:text-(--faint) sm:text-[14px]"
              />
            </div>
          </form>
          <div className="mt-4 flex flex-wrap gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => submit(suggestion)}
                className="rounded-sm border border-(--line) px-2.5 py-1 text-[12px] text-(--muted) transition-colors hover:border-(--accent) hover:text-(--accent)"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
