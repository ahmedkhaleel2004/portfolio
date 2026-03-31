import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  return (
    <div
      className="animate-fade-in motion-reduce:animate-none"
      style={{
        opacity: 0,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
