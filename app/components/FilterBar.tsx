"use client";

interface FilterBarProps {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
}

export default function FilterBar({ filters, active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 border-b border-[#EAE6DF] pb-5 mb-10">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={[
            "font-sans text-[9.5px] font-bold tracking-[0.3em] uppercase transition-colors pb-0.5",
            active === f
              ? "text-[#2C2A29] border-b border-[#2C2A29]"
              : "text-[#2C2A29]/55 hover:text-[#2C2A29]",
          ].join(" ")}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
