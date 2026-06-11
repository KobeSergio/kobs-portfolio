export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-50">
        {label}
      </h2>
      <div className="h-0.5 w-10 rounded-full bg-amber-400/60" />
    </div>
  );
}
