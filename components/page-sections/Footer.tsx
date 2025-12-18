export default function Footer() {
  return (
    <footer className="relative h-fit -mt-24 overflow-hidden text-slate-50/95 hidden md:block">
      <div className="pointer-events-none overflow-hidden select-none">
        {/* Tablet and up: full name with adjusted scale */}
        <p
          className="select-none whitespace-nowrap lg:text-[24vw] text-[23vw] font-black uppercase leading-none tracking-tight italic -translate-x-8 lg:-translate-x-14 hidden sm:block lg:-mb-5"
          style={{
            fontFamily: "var(--font-anton)",
          }}
        >
          KOBE SERGIO
        </p>
      </div>
    </footer>
  );
}
