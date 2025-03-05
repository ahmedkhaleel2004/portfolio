import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-[10vh]">
      <div className="flex justify-center space-x-4">
        <Link
          href="https://www.linkedin.com/in/ahmedkhaleel2004"
          className="h-6 w-6 transition-all duration-200 ease-in-out hover:text-nice-blue"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
        <Link
          href="https://github.com/ahmedkhaleel2004"
          className="h-6 w-6 transition-all duration-200 ease-in-out hover:text-nice-blue"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href="https://x.com/ahmedkhaleel04"
          className="h-6 w-6 transition-all duration-200 ease-in-out hover:text-nice-blue"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
