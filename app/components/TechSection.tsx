import React from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiVercel,
  SiTailwindcss,
  SiFigma,
  SiCplusplus,
  SiC,
  SiPython,
  SiNodedotjs,
  SiDjango,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiYolo,
  SiR,
  SiScikitlearn,
  SiPostgresql,
  SiAssemblyscript,
  SiWebassembly,
  SiSocketdotio,
  SiNginx,
  SiPrisma,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiAmazon,
  SiDocker,
  SiFirebase,
  SiSelenium,
  SiJest,
  SiPrometheus,
  SiGrafana,
  SiAwslambda,
  SiAwsorganizations,
  SiAmazonaws,
  SiDigitalocean,
} from "@icons-pack/react-simple-icons";

import { FaJava } from "react-icons/fa";
import { TbAssembly } from "react-icons/tb";

const TechSection: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  // const frontEndIcons: { icon: JSX.Element; name: string }[] = [
  //   { icon: <SiTypescript />, name: "TypeScript" },
  //   { icon: <SiJavascript />, name: "JavaScript" },
  //   { icon: <SiReact />, name: "React" },
  //   { icon: <SiNextdotjs />, name: "Next.js" },
  //   { icon: <SiVite />, name: "Vite" },
  //   { icon: <SiVercel />, name: "Vercel" },
  //   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  //   { icon: <SiFigma />, name: "Figma" },
  // ];

  const iconClass = "w-6 h-6"; // Tailwind CSS classes for consistent icon size

  const languagesIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiPython className={iconClass} />, name: "Python" },
    { icon: <SiTypescript className={iconClass} />, name: "TypeScript" },
    { icon: <SiCplusplus className={iconClass} />, name: "C++" },
    { icon: <FaJava className={iconClass} />, name: "Java" },
    { icon: <SiPostgresql className={iconClass} />, name: "SQL" },
    { icon: <SiJavascript className={iconClass} />, name: "JavaScript" },
    { icon: <SiC className={iconClass} />, name: "C" },
  ];

  const webIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiReact className={iconClass} />, name: "React" },
    { icon: <SiNodedotjs className={iconClass} />, name: "Node.js" },
    { icon: <SiMongodb className={iconClass} />, name: "MongoDB" },
    { icon: <SiFlask className={iconClass} />, name: "Flask" },
    { icon: <SiSocketdotio className={iconClass} />, name: "Socket.io" },
    { icon: <SiNextdotjs className={iconClass} />, name: "Next.js" },
    { icon: <SiNginx className={iconClass} />, name: "Nginx" },
    { icon: <SiDjango className={iconClass} />, name: "Django" },
    { icon: <SiPrisma className={iconClass} />, name: "Prisma" },
    { icon: <SiTailwindcss className={iconClass} />, name: "Tailwind CSS" },
    { icon: <SiHtml5 className={iconClass} />, name: "HTML" },
    { icon: <SiCss3 className={iconClass} />, name: "CSS" },
  ];

  const mlIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiTensorflow className={iconClass} />, name: "TensorFlow" },
    { icon: <SiPytorch className={iconClass} />, name: "PyTorch" },
    { icon: <SiPandas className={iconClass} />, name: "Pandas" },
    { icon: <SiScikitlearn className={iconClass} />, name: "Scikit-Learn" },
    { icon: <SiOpencv className={iconClass} />, name: "OpenCV" },
    { icon: <SiNumpy className={iconClass} />, name: "NumPy" },
    { icon: <SiYolo className={iconClass} />, name: "YOLO" },
    { icon: <SiR className={iconClass} />, name: "R" },
  ];

  const toolsIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiDocker className={iconClass} />, name: "Docker" },
    { icon: <SiFirebase className={iconClass} />, name: "Firebase" },
    { icon: <SiJest className={iconClass} />, name: "Jest" },
    { icon: <SiGrafana className={iconClass} />, name: "Grafana" },
    { icon: <SiSelenium className={iconClass} />, name: "Selenium" },
    { icon: <SiPrometheus className={iconClass} />, name: "Prometheus" },
    { icon: <SiDigitalocean className={iconClass} />, name: "DigitalOcean" },
    { icon: <SiAmazonaws className={iconClass} />, name: "AWS" },
  ];

  // const backEndIcons: { icon: JSX.Element; name: string }[] = [
  //   { icon: <SiCplusplus />, name: "C++" },
  //   { icon: <SiC />, name: "C" },
  //   { icon: <SiPython />, name: "Python" },
  //   { icon: <SiDjango />, name: "Django" },
  //   { icon: <SiNodedotjs />, name: "Node.js" },
  // ];
  // const mlOtherIcons: { icon: JSX.Element; name: string }[] = [
  //   { icon: <SiPytorch />, name: "PyTorch" },
  //   { icon: <SiTensorflow />, name: "TensorFlow" },
  //   { icon: <SiOpencv />, name: "OpenCV" },
  //   { icon: <SiYolo />, name: "YOLO" },
  //   { icon: <SiR />, name: "R" },
  //   { icon: <SiScikitlearn />, name: "Scikit-Learn" },
  // ];

  const renderIcons = (icons: { icon: JSX.Element; name: string }[]) => (
    <ul className="mt-6 grid grid-cols-2 gap-6">
      {icons.map(({ icon, name }, index) => (
        <li
          key={index}
          className={`flex translate-y-4 animate-slideDown items-center gap-2 opacity-0`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {icon}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`min-h-[264px] transition-opacity ${activeSection}`}>
      {/* manually set the height to prevent layout shift */}
      {activeSection === "languages" && renderIcons(languagesIcons)}
      {activeSection === "web" && renderIcons(webIcons)}
      {activeSection === "ml" && renderIcons(mlIcons)}
      {activeSection === "tools" && renderIcons(toolsIcons)}
    </div>
  );
};

export default TechSection;
