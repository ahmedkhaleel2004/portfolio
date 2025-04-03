import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "GitDiagram",
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 150,000+ users, 7,100+ stars.",
    link: "https://gitdiagram.com",
  },
  {
    title: "DeepEnd",
    desc: "GDSC Solution Winner: A GPT-4 powered programming project copilot using project based learning",
    link: "https://github.com/ahmedkhaleel2004/DeepEnd-hackathon",
  },
  {
    title: "Intellex",
    desc: "DeltaHacks X Winner: A direct P2P decentralized skill sharing platform",
    link: "https://github.com/ahmedkhaleel2004/intellex",
  },
  {
    title: "C++ Snake",
    desc: "Fully functional game engine for Snake with multiplayer, OOP, memory safety, and more.",
    link: "https://github.com/ahmedkhaleel2004/Snake-CPP",
  },
  {
    title: "Nocra",
    desc: "A concept for a competitive education platform used as practice for Next.js and Tailwind CSS.",
    link: "https://github.com/ahmedkhaleel2004/nocra",
  },
  {
    title: "Dexterity-Dash",
    desc: "A custom physical therapy solution for MS patients to improve hand mobility and remain active.",
    link: "https://far-lupin-29c.notion.site/Project-Four-Breakdown-7a05f88aaadc44fe8638b32064008e97",
  },
  {
    title: "Py-kemon GO",
    desc: "A Python command line recreation of the popular mobile game, Pokemon GO!",
    link: "https://github.com/ahmedkhaleel2004/Py-kemon-Go",
  },
  {
    title: "ParkFinder",
    desc: "Scans parking lots with YOLOv8 and finds shortest routes using A* pathfinding.",
    link: "https://github.com/ahmedkhaleel2004/MEC-2023",
  },
  {
    title: "ShipSafe",
    desc: "MEC 2022 Winner: Ship navigation system simulating and presenting data from a buoy network at a glance.",
    link: "https://github.com/ahmedkhaleel2004/MEC-2022",
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <p>🔨 A list of my engineering masterpieces.</p>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        {projects.map((project, index) => (
          <div key={index}>
            <a
              href={project.link}
              className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
            <p className="mb-4">{project.desc}</p>
          </div>
        ))}
        <Link
          href="/"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        >
          Portfolio
        </Link>
        <p className="mb-4">
          This website! Describes myself and lists my works.
        </p>
      </main>
    </div>
  );
};

export default Projects;
