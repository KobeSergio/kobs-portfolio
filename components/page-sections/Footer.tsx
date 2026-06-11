import { SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/40">
      {/* Single row */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        <a
          href="mailto:ckasergio@gmail.com"
          className="text-sm font-mono text-slate-500 hover:text-amber-300 transition-colors duration-200"
        >
          ckasergio@gmail.com
        </a>

        <span className="hidden md:block text-[10px] font-mono uppercase tracking-wider text-slate-700">
          © {new Date().getFullYear()} Kobe Sergio
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/KobeSergio"
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 hover:text-amber-300 transition-colors duration-200"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kobesergio"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-amber-300 transition-colors duration-200"
          >
            <SiLinkedin className="h-4 w-4" />
          </a>
          <a
            href="https://discord.com/users/622772696870158347"
            target="_blank" rel="noopener noreferrer"
            aria-label="Discord"
            className="text-slate-600 hover:text-amber-300 transition-colors duration-200"
          >
            <SiDiscord className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Big name watermark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p
          className="whitespace-nowrap text-[22vw] font-black uppercase leading-none tracking-tight italic"
          style={{
            fontFamily: "var(--font-anton)",
            WebkitTextStroke: "clamp(1px, 0.18vw, 2px) rgba(251,191,36,0.25)",
            color: "transparent",
          }}
        >
          KOBE SERGIO
        </p>
      </div>
    </footer>
  );
}
