import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => {
  return (
    <div
      className="animate-fade-in opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
