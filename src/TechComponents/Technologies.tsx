import { use, useState } from "react";
import type { TechnologyType } from "./TechnologyType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

export interface TechnologiesProps {
  technologiesDataPromise: Promise<TechnologyType[]>;
}

export default function Technologies({
  technologiesDataPromise,
}: TechnologiesProps) {
  const technologies = use(technologiesDataPromise);

 
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]
  >([]);

  const addToStack = (technology: TechnologyType) => {

    if (
      selectedTechnologies.some(
        (item) => item.id === technology.id
      )
    ) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    setSelectedTechnologies((current) => [
      ...current,
      technology,
    ]);
  };

  const removeFromStack = (id: number) => {
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== id)
    );
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
  };

return (
  <section className="bg-white py-12">
    <div className="container mx-auto px-4">

      <div className="mb-7">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Explore{" "}
          <span className="text-[#D91B7E]">
            Technologies
          </span>
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={addToStack}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
            <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
    />
         
        </div>

      </div>

    </div>
  </section>
);
}