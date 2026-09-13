
import type { TechnologyType } from "./TechnologyType";

interface TechnologyCardProps {
  technology: TechnologyType;
}

export default function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md">

      {/* Top: Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-7 w-7 object-contain"
          />
        </div>

        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[9px] font-medium text-sky-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-sm font-semibold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1.5 line-clamp-3 text-[10px] leading-4 text-slate-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-4 flex items-center justify-between gap-2">

        {/* Category */}
        <span className="rounded bg-slate-100 px-2 py-1 text-[8px] font-medium text-slate-500">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="text-[8px] text-slate-500">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 text-[9px] text-slate-600">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[9px] font-medium text-white transition hover:bg-[#D91B7E]"
      >
        Add to Stack
      </button>
    </article>
  );
}