import { use } from "react";
import type { TechnologyType } from "./TechnologyType";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
  technologiesDataPromise: Promise<TechnologyType[]>;
}

export default function Technologies ({technologiesDataPromise}:TechnologiesProps) {

  const technologies = use(technologiesDataPromise);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Explore the{" "}
            <span className="text-[#D91B7E]">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}

        </div>

      </div>
    </section>
  );
}