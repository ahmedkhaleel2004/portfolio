export interface Project {
  title: string;
  desc: string;
  summary?: string;
  link: string;
  code: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS.",
    summary: "This website!",
    link: "/",
    code: "https://github.com/ahmedkhaleel2004/portfolio",
    image: "/portfolio.png",
  },
  {
    title: "GitDiagram",
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 150,000+ users, 10,000+ stars.",
    summary: "Visualize any GitHub repo with AI, 150k+ users, 12k+ stars",
    link: "https://gitdiagram.com",
    code: "https://github.com/ahmedkhaleel2004/gitdiagram",
    image: "/gitdiagram.jpeg",
  },
  {
    title: "DeepEnd",
    desc: "GDSC Solution Winner: A GPT-4 powered programming project copilot using project based learning",
    summary: "GDG @ McMaster Winner: GPT-4 powered programming project copilot",
    link: "https://github.com/ahmedkhaleel2004/DeepEnd-hackathon",
    code: "https://github.com/ahmedkhaleel2004/DeepEnd-hackathon",
    image: "/deepend.png",
  },
  {
    title: "Intellex",
    desc: "DeltaHacks X Winner: A direct P2P decentralized skill sharing platform",
    summary: "DeltaHacks X Winner: P2P decentralized skill sharing platform",
    link: "https://github.com/ahmedkhaleel2004/intellex",
    code: "https://github.com/ahmedkhaleel2004/intellex",
    image: "/intellex.jpeg",
  },
  {
    title: "C++ Snake",
    desc: "Fully functional game engine for Snake with multiplayer, OOP, memory safety, and more.",
    summary: "Fun low-level game engine with multiplayer and OOP",
    link: "https://github.com/ahmedkhaleel2004/Snake-CPP",
    code: "https://github.com/ahmedkhaleel2004/Snake-CPP",
    image: "/cppsnake.gif",
  },
  {
    title: "ParkFinder",
    desc: "Scans parking lots with YOLOv8 and finds shortest routes using A* pathfinding.",
    summary: "Computer vision + A* for parking",
    link: "https://github.com/ahmedkhaleel2004/MEC-2023",
    code: "https://github.com/ahmedkhaleel2004/MEC-2023",
    image: "/parkfinder.png",
  },
  {
    title: "Nocra",
    desc: "A concept for a competitive education platform used as practice for Next.js and Tailwind CSS.",
    summary: "Competitive education platform concept",
    link: "https://github.com/ahmedkhaleel2004/nocra",
    code: "https://github.com/ahmedkhaleel2004/nocra",
  },
  {
    title: "Dexterity-Dash",
    desc: "A custom physical therapy solution for MS patients to improve hand mobility and remain active.",
    summary: "Hardware: Physical therapy for MS patients",
    link: "https://far-lupin-29c.notion.site/Project-Four-Breakdown-7a05f88aaadc44fe8638b32064008e97",
    code: "https://github.com/ahmedkhaleel2004",
  },
  {
    title: "Py-kemon GO",
    desc: "A Python command line recreation of the popular mobile game, Pokemon GO!",
    summary: "Pokemon GO in the terminal with Python",
    link: "https://github.com/ahmedkhaleel2004/Py-kemon-Go",
    code: "https://github.com/ahmedkhaleel2004/Py-kemon-Go",
  },
  {
    title: "ShipSafe",
    desc: "MEC 2022 Winner: Ship navigation system simulating and presenting data from a buoy network at a glance.",
    summary: "MEC 2022 Winner: Buoy network visualization for ships",
    link: "https://github.com/ahmedkhaleel2004/MEC-2022",
    code: "https://github.com/ahmedkhaleel2004/MEC-2022",
  },
];
