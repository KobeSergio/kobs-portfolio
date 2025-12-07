type StatCardProps = {
  label: string;
  value: string;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="text-2xl font-bold text-slate-50">{value}</p>
    </div>
  );
}

