export type Experience = {
  role: string;
  company: string;
  companyLogo: string;
  location: string;
  time: string;
  summary: React.ReactNode;
  contributions: Contributions[];
};

type Contributions = {
  images: string[];
  product: string;
  impact: string;
  description: React.ReactNode;
  tech: string[];
  link: string;
};

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <p className="font-semibold text-slate-100">{exp.role}</p>
        <p>{exp.time}</p>
      </div>
      <p className="text-sm text-amber-100">{exp.company}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{exp.summary}</p>
    </article>
  );
}
