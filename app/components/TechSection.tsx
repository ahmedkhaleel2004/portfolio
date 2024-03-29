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
} from "@icons-pack/react-simple-icons";

const TechSection: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  const frontEndIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFigma />, name: "Figma" },
  ];
  const backEndIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiC />, name: "C" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiNodedotjs />, name: "Node.js" },
  ];
  const mlOtherIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <SiYolo />, name: "YOLO" },
    { icon: <SiR />, name: "R" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },
  ];

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
    <div className={`min-h-[168px] transition-opacity ${activeSection}`}>
      {activeSection === "front-end" && renderIcons(frontEndIcons)}
      {activeSection === "back-end" && renderIcons(backEndIcons)}
      {activeSection === "ml-other" && renderIcons(mlOtherIcons)}
    </div>
  );
};

export default TechSection;
