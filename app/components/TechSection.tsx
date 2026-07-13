import type { ComponentType } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPython,
  SiNodedotjs,
  SiDjango,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiR,
  SiScikitlearn,
  SiPostgresql,
  SiSocketdotio,
  SiNginx,
  SiPrisma,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiFirebase,
  SiSelenium,
  SiJest,
  SiPrometheus,
  SiGrafana,
  SiDigitalocean,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";
import { TbAssembly } from "react-icons/tb";

export type TechSectionId = "languages" | "web" | "ml" | "tools";

type IconComponent = ComponentType<{ className?: string }>;

interface TechIcon {
  Icon: IconComponent;
  name: string;
}

const ICON_CLASS = "w-6 h-6";

const LANGUAGE_ICONS = [
  { Icon: SiPython, name: "Python" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiCplusplus, name: "C++" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiPostgresql, name: "SQL" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiC, name: "C" },
] as const satisfies readonly TechIcon[];

const WEB_ICONS = [
  { Icon: SiReact, name: "React" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiFlask, name: "Flask" },
  { Icon: SiSocketdotio, name: "Socket.io" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiNginx, name: "Nginx" },
  { Icon: SiDjango, name: "Django" },
  { Icon: SiPrisma, name: "Prisma" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiCss, name: "CSS" },
] as const satisfies readonly TechIcon[];

const ML_ICONS = [
  { Icon: SiTensorflow, name: "TensorFlow" },
  { Icon: SiPytorch, name: "PyTorch" },
  { Icon: SiPandas, name: "Pandas" },
  { Icon: SiScikitlearn, name: "Scikit-Learn" },
  { Icon: SiOpencv, name: "OpenCV" },
  { Icon: SiNumpy, name: "NumPy" },
  { Icon: TbAssembly, name: "YOLO" },
  { Icon: SiR, name: "R" },
] as const satisfies readonly TechIcon[];

const TOOL_ICONS = [
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: SiJest, name: "Jest" },
  { Icon: SiGrafana, name: "Grafana" },
  { Icon: SiSelenium, name: "Selenium" },
  { Icon: SiPrometheus, name: "Prometheus" },
  { Icon: SiDigitalocean, name: "DigitalOcean" },
  { Icon: FaAws, name: "AWS" },
] as const satisfies readonly TechIcon[];

function renderIcons(icons: readonly TechIcon[]) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-6">
      {icons.map(({ Icon, name }, index) => (
        <li
          key={name}
          className="animate-slideDown flex translate-y-4 items-center gap-2 opacity-0"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Icon className={ICON_CLASS} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

function TechSection({ activeSection }: { activeSection: TechSectionId }) {
  return (
    <div className={`min-h-[264px] transition-opacity ${activeSection}`}>
      {activeSection === "languages" && renderIcons(LANGUAGE_ICONS)}
      {activeSection === "web" && renderIcons(WEB_ICONS)}
      {activeSection === "ml" && renderIcons(ML_ICONS)}
      {activeSection === "tools" && renderIcons(TOOL_ICONS)}
    </div>
  );
}

export default TechSection;
