

export default function TechnologyCard({ technology, addTech, isAdded}) {


  return (
    <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Icon and Badge */}
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-6 w-6 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-2 py-1 text-[10px] font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-md font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 min-h-[60px] text-[12px] leading-4 text-slate-500">
        {technology.description}
      </p>

      {/* Details */}
      <div className="mt-2 flex items-center justify-between gap-1 border-t border-slate-100 pt-2 text-[9px]">
        <span className="rounded-sm bg-slate-100 px-1.5 py-1 text-slate-600">
          {technology.category}
        </span>

        <span className="text-slate-500">
          {technology.difficulty}
        </span>

        <span className="whitespace-nowrap font-semibold text-slate-700">
          <span className="text-amber-400">★</span>{" "}
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => addTech(technology)}
        type="button"
        disabled={isAdded}
        className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[10px] font-medium text-white transition  enabled:hover:bg-fuchsia-600 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
        
      >
        {isAdded === true ? "✓ Added to Stack" :  "Add to Stack"}
      </button>
    </div>
  );
}