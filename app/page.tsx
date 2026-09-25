import { siteConfig } from "@/lib/site";
import VersionSwitcher from "./components/VersionSwitcher";
import Editorial from "./versions/Editorial";
import Index from "./versions/Index";
import Original from "./versions/Original";
import Split from "./versions/Split";
import Terminal from "./versions/Terminal";
import { type VersionId, versions } from "./versions/registry";

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

const VERSION_COMPONENTS: Record<VersionId, () => React.ReactNode> = {
  original: Original,
  index: Index,
  editorial: Editorial,
  terminal: Terminal,
  split: Split,
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ v?: string | string[] }>;
}) {
  const { v } = await searchParams;
  const current =
    versions.find((version) => version.id === v)?.id ?? versions[0].id;
  const Version = VERSION_COMPONENTS[current];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <Version />
      <VersionSwitcher current={current} />
    </>
  );
}
