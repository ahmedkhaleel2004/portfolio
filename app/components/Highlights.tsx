import Image from "next/image";
import { highlights } from "@/lib/highlights";

const Highlights = () => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold">Highlights</h2>
      <div className="space-y-6">
        {highlights.map((highlight, index) => (
          <a
            key={index}
            href={highlight.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-lg bg-neutral-900/80 p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),0_0_5px_rgba(0,0,0,0.1),inset_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/80 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.4),0_0_10px_rgba(0,0,0,0.2),inset_0_0_1px_rgba(255,255,255,0.15)]">
              <div className="max-w-[70%] pb-16 sm:max-w-[60%]">
                <h3 className="mb-1 text-base font-semibold">
                  {highlight.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {highlight.description}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] max-w-[250px] translate-x-[5%] translate-y-[20%] drop-shadow-lg">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={500}
                  height={300}
                  className="rounded-tl-md"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-50"></div>
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10"></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
