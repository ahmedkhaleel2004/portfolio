export interface Highlight {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const highlights: Highlight[] = [
  {
    title: "GitDiagram",
    description:
      "300k+ users, 15k+ stars. Grants from OpenAI and Anthropic. Repository to diagram.",
    image: "/gitdiagram.png",
    link: "https://gitdiagram.com",
  },
  {
    title: "ElevenLabs Internship",
    description: "Building the world's best AI audio platform.",
    image: "/elevenlabs.png",
    link: "https://elevenlabs.io",
  },
  {
    title: "Meta x MLH PE Fellowship",
    description:
      "One of 50 students selected from 50,000+ applicants to join the Meta Production Engineering Fellowship.",
    image: "/metapefellowship.png",
    link: "https://fellowship.mlh.io",
  },
];
