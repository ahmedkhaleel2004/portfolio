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
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 300,000+ users, 15,000+ stars.",
  },
  {
    title: "Software Engineer Intern",
    company: "ElevenLabs",
    date: "May 2025 - Jul. 2025",
    desc: "Joined as their first ever engineering intern.",
  },
  {
    title: "MLH Production Engineering Fellow",
    company: "Meta",
    date: "Jun. 2024 - Sep. 2024",
    desc: "Built and deployed a scalable web application with automated CI/CD workflows, webhook alerts, and system monitoring.",
  },
  {
    title: "Machine Learning Research Assistant",
    company: "Healthcare Systems R&A Inc.",
    date: "Jun. 2024 - Sep. 2024",
    desc: "Enhanced prediction models and optimized real-time inference by fine-tuning feature extraction, linking sediment samples with KNN, and building an asynchronous frame processing pipeline",
  },
];
