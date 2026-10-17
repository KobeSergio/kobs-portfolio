// Dividers per cell: 2×2 on mobile, a single row of 4 from md up.
const CELL_EDGES = [
  "pl-0 md:pl-0",
  "border-l",
  "pl-0 md:pl-6 border-t md:border-t-0 md:border-l",
  "border-l border-t md:border-t-0",
];

export default function StatStrip({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <section
      aria-label="At a glance"
      className="w-full max-w-6xl mx-auto px-4 md:px-8"
    >
      <dl className="grid grid-cols-2 md:grid-cols-4 border-y border-slate-800/70">
        {stats.slice(0, 4).map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-2 px-4 md:px-6 py-6 md:py-8 border-slate-800/70 ${CELL_EDGES[index]}`}
          >
            <dt className="order-last text-sm leading-snug text-slate-400">
              {stat.label}
            </dt>
            <dd className="font-display text-5xl lg:text-6xl font-normal leading-[0.95] tabular-nums text-slate-50">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
