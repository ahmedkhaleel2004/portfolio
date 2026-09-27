import Link from "next/link";
import { getImageProps } from "next/image";
import { projects } from "@/lib/projects";
import { positions } from "@/lib/experience";
import { siteConfig } from "@/lib/site";
import CopyEmail from "./components/CopyEmail";
import FadeIn from "./components/FadeIn";
import PreviewLayer, { type PreviewItem } from "./components/PreviewLayer";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-CA",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      inLanguage: "en-CA",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "Software Engineer",
      description: siteConfig.description,
      homeLocation: {
        "@type": "Place",
        name: siteConfig.location,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "McMaster University",
      },
      sameAs: Object.values(siteConfig.socials),
      knowsAbout: [
        "Software engineering",
        "Full-stack development",
        "Web development",
        "Machine learning",
        "Artificial intelligence",
      ],
    },
  ],
}).replace(/</g, "\\u003c");

// Card is w-96 with p-5, so media renders 344px wide.
const PREVIEW_MEDIA_WIDTH = 344;

const previews: Record<string, PreviewItem> = {};
projects.forEach((project, index) => {
  let media: PreviewItem["media"];
  if (project.image) {
    const height = Math.round(
      (PREVIEW_MEDIA_WIDTH * project.image.height) / project.image.width,
    );
    const { props } = getImageProps({
      src: project.image,
      alt: "",
      width: PREVIEW_MEDIA_WIDTH,
      height,
    });
    media = {
      type: "image",
      src: props.src,
      srcSet: props.srcSet,
      width: PREVIEW_MEDIA_WIDTH,
      height,
    };
  } else if (project.video) {
    media = { type: "video", ...project.video };
  }
  previews[`project-${index}`] = {
    title: project.title,
    description: project.desc,
    media,
  };
});
positions.forEach((position, index) => {
  previews[`position-${index}`] = {
    title: position.title,
    subtitle: position.company,
    description: position.desc,
  };
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <main className="font-body mx-auto max-w-3xl p-6">
        <FadeIn delay={0}>
          <header className="mb-8">
            <h1 className="mb-1 text-2xl font-bold">Ahmed Khaleel</h1>
            <p className="text-tagline text-sm tracking-wide">
              Software Engineer based in Toronto, ON, Canada
            </p>
            <p className="mt-4 text-sm">
              I build software that solves my problems. I care deeply about
              systems, design, ux, and especially speed. I also study at
              McMaster University.
            </p>
            <p className="mt-4 text-sm">
              I&apos;m looking to start on something new. If you are hiring,
              reach out via email!
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/ahmedkhaleel2004"
                className="decoration-accent underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedkhaleel2004"
                className="decoration-accent underline"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/ahmedkhaleel04"
                className="decoration-accent underline"
              >
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
                <div
                  key={project.title}
                  data-preview={`project-${index}`}
                  className="relative cursor-default select-none"
                >
                  <div className="flex w-full flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                          <a
                            href={project.link}
                            aria-label={`${project.title}: ${project.desc}`}
                            className="decoration-accent text-sm font-semibold underline"
                          >
                            {project.title}
                          </a>
                          {project.title === "Portfolio" && (
                            <Link
                              href="/old"
                              className="text-meta decoration-accent text-sm underline"
                            >
                              [old]
                            </Link>
                          )}
                        </div>
                        <span className="text-muted min-w-0 text-sm md:flex-1 md:truncate">
                          <span className="hidden md:inline">- </span>
                          {project.summary}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div
                  key={`${position.title}-${position.company}`}
                  data-preview={`position-${index}`}
                  aria-label={`${position.title}, ${position.company}. ${position.desc}`}
                  className="relative cursor-default select-none"
                  tabIndex={0}
                >
                  <div className="flex w-full flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                    <div className="min-w-0 flex-1 md:pr-4">
                      <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                        <span className="text-base font-semibold md:text-sm">
                          {position.title}
                        </span>
                        <span className="text-muted min-w-0 text-sm md:flex-1 md:truncate">
                          <span className="hidden md:inline">- </span>
                          {position.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-meta text-sm whitespace-nowrap md:text-xs">
                      {position.date}
                    </span>
                  </div>
                </div>
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
              <p>Neo Scholar Finalist, 2025</p>
              <p>DeltaHacks X Prize Winner</p>
              <p>First Place @ Google Solution Challenge McMaster</p>
              <p>First Place @ McMaster Engineering Competition 2022</p>
            </div>
          </section>
        </FadeIn>
      </main>
      <PreviewLayer items={previews} />
    </>
  );
}
