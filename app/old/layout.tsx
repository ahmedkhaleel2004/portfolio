import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function OldLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 bg-white px-4 py-2 text-center text-base font-semibold text-black shadow-md">
        You are viewing my old portfolio. Check out{" "}
        <Link href="/" className="text-blue-600 underline hover:text-blue-700">
          my new portfolio
        </Link>
        !
      </div>
      <div className="mx-auto mt-[10vh] max-w-2xl pt-10 sm:flex">
        <Navbar />
        <div className="flex flex-col">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
