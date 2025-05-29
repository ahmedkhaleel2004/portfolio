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
      "200k+ users, 13k+ stars. Grants from OpenAI and Anthropic. Repository to diagram.",
    image: "/gitdiagram.png",
    link: "https://gitdiagram.com",
  },
  {
    title: "Meta x MLH PE Fellowship",
    description:
      "One of 50 students selected from 50,000+ applicants to join the Meta Production Engineering Fellowship.",
    image: "/metapefellowship.png",
    link: "https://fellowship.mlh.io",
  },
];
