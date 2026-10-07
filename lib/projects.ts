import type { StaticImageData } from "next/image";
import gitdiagramImage from "@/public/gitdiagram.png";
import blitztreeImage from "@/public/blitztree.png";
import deependImage from "@/public/deepend.png";
import intellexImage from "@/public/intellex.jpeg";
import portfolioImage from "@/public/portfolio.png";
import nocraImage from "@/public/nocra.png";
import dexteritydashImage from "@/public/dexteritydash.png";
import parkfinderImage from "@/public/parkfinder.png";
import pykemongoImage from "@/public/pykemongo.png";

export interface Project {
  title: string;
  desc: string;
  summary: string;
  link: string;
  image?: StaticImageData;
  video?: { src: string; width: number; height: number };
}

export const projects: Project[] = [
  {
    title: "GitDiagram",
    desc: "Instantly visualize any GitHub repository as an interactive diagram. 475,000+ users, 18k+ stars.",
    summary: "Visualize any codebase, 475k+ users, 18k+ stars",
    link: "https://gitdiagram.com",
    image: gitdiagramImage,
  },
  {
    title: "BlitzTree",
    desc: "A fast, native disk-space treemap for macOS, in the spirit of WizTree. Scans a whole Mac (3.6M files) in about 14 seconds.",
    summary: "WizTree for macOS, fast native disk-space treemap",
    link: "https://github.com/ahmedkhaleel2004/blitztree",
    image: blitztreeImage,
  },
  {
    title: "LeftRight",
    desc: "A typing test that measures each hand's WPM, accuracy, and balance across multiple keyboard layouts.",
    summary: "Compare left vs. right hand typing speed",
    link: "https://github.com/ahmedkhaleel2004/leftright",
  },
  {
    title: "DeepEnd",
    desc: "GDSC Solution Winner: A GPT-4 powered programming project copilot using project based learning",
    summary: "GDG @ McMaster Winner, programming project copilot",
    link: "https://github.com/ahmedkhaleel2004/DeepEnd-hackathon",
    image: deependImage,
  },
  {
    title: "Intellex",
    desc: "DeltaHacks X Winner: A direct P2P decentralized skill sharing platform",
    summary: "DeltaHacks X Winner: decentralized skill sharing platform",
    link: "https://github.com/ahmedkhaleel2004/intellex",
    image: intellexImage,
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio website built with Next.js and Tailwind CSS.",
    summary: "This website!",
    link: "/",
    image: portfolioImage,
  },

  {
    title: "C++ Snake",
    desc: "Fully functional game engine for Snake with multiplayer, OOP, memory safety, and more.",
    summary: "Low-level game engine",
    link: "https://github.com/ahmedkhaleel2004/Snake-CPP",
    video: { src: "/cppsnake.mp4", width: 408, height: 480 },
  },
  {
    title: "Nocra",
    desc: "A concept for a competitive education platform used as practice for Next.js and Tailwind CSS.",
    summary: "Competitive education platform concept",
    link: "https://github.com/ahmedkhaleel2004/nocra",
    image: nocraImage,
  },
  {
    title: "Dexterity-Dash",
    desc: "A custom physical therapy solution for MS patients to improve hand mobility and remain active.",
    summary: "Hardware: Physical therapy for MS patients",
    link: "https://far-lupin-29c.notion.site/Project-Four-Breakdown-7a05f88aaadc44fe8638b32064008e97",
    image: dexteritydashImage,
  },
  {
    title: "ParkFinder",
    desc: "Scans parking lots with YOLOv8 and finds shortest routes using A* pathfinding.",
    summary: "Computer vision, A* for parking",
    link: "https://github.com/ahmedkhaleel2004/MEC-2023",
    image: parkfinderImage,
  },
  {
    title: "Py-kemon GO",
    desc: "A Python command line recreation of the popular mobile game, Pokemon GO!",
    summary: "Pokemon GO in the terminal with Python",
    link: "https://youtu.be/VNnJPualo28?si=n5qRLqu8WIxGgpG6",
    image: pykemongoImage,
  },
  {
    title: "ShipSafe",
    desc: "MEC 2022 Winner: Ship navigation system simulating and presenting data from a buoy network at a glance.",
    summary: "MEC 2022 Winner: Buoy network visualization for ships",
    link: "https://github.com/ahmedkhaleel2004/MEC-2022",
  },
];
