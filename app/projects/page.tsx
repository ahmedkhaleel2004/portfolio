import React from "react";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div>
      <main className="p-8 font-body">
        <p>🔨 A list of my engineering masterpieces.</p>
        <hr className="my-4 border-t-2 border-body-light-grey" />
        <Link
          href="/"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
        >
          Portfolio
        </Link>
        <p className="mb-4">
          This website! Describes myself and lists my works.
        </p>
        <a
          href="https://far-lupin-29c.notion.site/Project-Four-Breakdown-7a05f88aaadc44fe8638b32064008e97"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
          target="_blank"
        >
          Dexterity-Dash
        </a>
        <p className="mb-4">
          A custom physical therapy solution for MS patients to improve hand
          mobility and remain active.
        </p>
        <a
          href="https://github.com/ahmedkhaleel2004/Py-kemon-Go"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
          target="_blank"
        >
          Py-kemon GO
        </a>
        <p className="mb-4">
          A Python command line recreation of the popular mobile game, Pokemon
          GO!
        </p>
        <a
          href="https://github.com/ahmedkhaleel2004/MEC-2023"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
          target="_blank"
        >
          ParkFinder
        </a>
        <p className="mb-4">
          Scans parking lots with YOLOv8 and finds shortest routes using A*
          pathfinding.
        </p>
        <a
          href="https://github.com/ahmedkhaleel2004/MEC-2022"
          className="cursor-pointer font-bold underline transition-all duration-200 ease-in-out hover:text-nice-blue"
          target="_blank"
        >
          ShipSafe
        </a>
        <p className="mb-4">
          Ship navigation system simulating and presenting data from a buoy
          network at a glance.
        </p>
      </main>
    </div>
  );
};

export default Projects;
