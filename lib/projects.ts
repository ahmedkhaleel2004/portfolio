export interface Project {
  title: string;
  desc: string;
  link: string;
  code: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS.",
    link: "/",
    code: "https://github.com/ahmedkhaleel2004/portfolio",
    image: "/portfolio.png",
  },
  {
    title: "GitDiagram",
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 150,000+ users, 10,000+ stars.",
    link: "https://gitdiagram.com",
    code: "https://github.com/ahmedkhaleel2004/gitdiagram",
    image: "/gitdiagram.jpeg",
  },
  {
    title: "DeepEnd",
    desc: "GDSC Solution Winner: A GPT-4 powered programming project copilot using project based learning",
    link: "https://github.com/ahmedkhaleel2004/DeepEnd-hackathon",
    code: "https://github.com/ahmedkhaleel2004/DeepEnd-hackathon",
    image: "/deepend.png",
  },
  {
    title: "Intellex",
    desc: "DeltaHacks X Winner: A direct P2P decentralized skill sharing platform",
    link: "https://github.com/ahmedkhaleel2004/intellex",
    code: "https://github.com/ahmedkhaleel2004/intellex",
    image: "/intellex.jpeg",
  },
  {
    title: "C++ Snake",
    desc: "Fully functional game engine for Snake with multiplayer, OOP, memory safety, and more.",
    link: "https://github.com/ahmedkhaleel2004/Snake-CPP",
    code: "https://github.com/ahmedkhaleel2004/Snake-CPP",
    image: "/cppsnake.gif",
  },
  {
    title: "ParkFinder",
    desc: "Scans parking lots with YOLOv8 and finds shortest routes using A* pathfinding.",
    link: "https://github.com/ahmedkhaleel2004/MEC-2023",
    code: "https://github.com/ahmedkhaleel2004/MEC-2023",
    image: "/parkfinder.png",
  },
];
