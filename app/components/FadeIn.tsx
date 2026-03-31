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
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
