import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function OldLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 bg-white px-4 py-2 text-center text-base font-semibold text-black shadow-md">
        You are viewing my old portfolio. Check out{" "}
        <a href="/" className="text-blue-600 underline hover:text-blue-700">
          my new portfolio
        </a>
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
