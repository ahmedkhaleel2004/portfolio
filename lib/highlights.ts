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
      "150k+ users, 12k+ stars. Visualize any GitHub repository as an interactive diagram.",
    image: "/gitdiagram.jpeg",
    link: "https://gitdiagram.com",
  },
];
