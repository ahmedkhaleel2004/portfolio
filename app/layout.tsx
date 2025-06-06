import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedkhaleel.dev/"), // CHANGE FOR PRODUCTION
  title: "Ahmed Khaleel",
  description:
    "Ahmed Khaleel's portfolio, featuring projects and experience in software development.",
  keywords: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "C",
    "C++",
    "Engineering",
    "Software Engineer",
    "Full-Stack",
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "Full-Stack Development",
    "Web Development",
    "Machine Learning",
    "Artificial Intelligence",
    "ML",
    "AI",
    "Student",
    "Technology",
    "Tech",
    "Portfolio",
    "Ahmed Khaleel",
  ],
  authors: [{ name: "Ahmed Khaleel" }],
  openGraph: {
    type: "website",
    title: "Ahmed Khaleel - Software Engineer",
    description:
      "Explore Ahmed Khaleel's Software Engineering Portfolio including unique projects and his timeline.",
    images: [{ url: "/image.png" }], // CHANGE TO SCREENSHOT OF HOMEPAGE
  },
};

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto_mono.variable}`}>
      <body className="bg-body-grey text-white">
        <div className="mx-auto mt-5 max-w-3xl sm:mt-10 sm:flex">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
