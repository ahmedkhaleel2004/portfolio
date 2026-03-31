import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-8px) scale(0.995)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      spacing: {
        customNav: "7.25rem",
      },
      colors: {
        "body-grey": "rgb(18, 18, 18)",
        "body-light-grey": "#454545",
        "nice-blue": "#61a8ff",
      },
      fontFamily: {
        body: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
