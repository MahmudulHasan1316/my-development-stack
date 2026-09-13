import type { TechnologyType } from "./TechnologyType";


interface YourStackProps {
  selectedTechnologies: TechnologyType[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

      <div className="flex items-start justify-between gap-3">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}

      </div>

      {selectedTechnologies.length === 0 ? (

        <p className="mt-8 text-center text-sm text-slate-400">
          No technology selected yet.
        </p>

      ) : (

        <div className="mt-6 space-y-3">

          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
            >

              <div>
                <h3 className="font-semibold text-slate-800">
                  {technology.name}
                </h3>

                <p className="text-xs text-slate-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="rounded-md px-2 py-1 text-slate-400 hover:bg-red-50 hover:text-red-500"
              >
                ✕
              </button>

            </div>
          ))}

        </div>

      )}

    </div>
  );
}