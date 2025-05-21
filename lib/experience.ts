export interface Position {
  title: string;
  company: string;
  date: string;
  desc: string;
}

export const positions: Position[] = [
  {
    title: "Founder",
    company: "GitDiagram",
    date: "Jan. 2025 - Present",
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 150,000+ users, 10,000+ stars.",
  },
  {
    title: "MLH Production Engineering Fellow",
    company: "Meta",
    date: "Jun. 2024 - Sep. 2024",
    desc: "Built and deployed a scalable web application with automated CI/CD workflows, webhook alerts, and system monitoring.",
  },
  {
    title: "Software Developer",
    company: "McMaster Engineering Society",
    date: "Jul. 2024 - Dec. 2024",
    desc: "Developing Clubs/Teams portal backend for over 61 clubs and 6500 students using TypeScript, Node.js, and MongoDB",
  },
];
