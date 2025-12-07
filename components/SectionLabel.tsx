export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-10 bg-amber-300/70" />
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
        {label}
      </p>
    </div>
  );
}

