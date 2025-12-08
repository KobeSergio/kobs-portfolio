"use client";

import { useEffect, useRef, useState } from "react";

type CubeConf = {
  size: number;
  left: string;
  top: string;
  gradient: string;
  border: string;
  shadow: string;
  rotationScale: number;
  hideOnMobile?: boolean;
};

const cubes: CubeConf[] = [
  {
    size: 132,
    left: "4%",
    top: "8%",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.22), rgba(16,185,129,0.18))",
    border: "1px solid rgba(59,130,246,0.4)",
    shadow: "0 0 60px rgba(56,189,248,0.35)",
    rotationScale: 0.14,
  },
  {
    size: 88,
    left: "62%",
    top: "-55%",
    gradient:
      "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(251,146,60,0.20))",
    border: "1px solid rgba(251,146,60,0.30)",
    shadow: "0 0 30px rgba(251,146,60,0.18)",
    rotationScale: 0.06,
    hideOnMobile: true,
  },
  {
    size: 92,
    left: "78%",
    top: "10%",
    gradient:
      "linear-gradient(135deg, rgba(16,185,129,0.22), rgba(59,130,246,0.18))",
    border: "1px solid rgba(16,185,129,0.4)",
    shadow: "0 0 44px rgba(52,211,153,0.32)",
    rotationScale: -0.18,
  },
  {
    size: 58,
    left: "24%",
    top: "128%",
    gradient:
      "linear-gradient(135deg, rgba(251,191,36,0.21), rgba(56,189,248,0.14))",
    border: "1px solid rgba(251,191,36,0.20)",
    shadow: "0 0 28px rgba(251,191,36,0.23)",
    rotationScale: 0.18,
  },
  {
    size: 80,
    left: "14%",
    top: "-64%",
    gradient:
      "linear-gradient(135deg, rgba(251,191,36,0.24), rgba(59,130,246,0.16))",
    border: "1px solid rgba(251,191,36,0.35)",
    shadow: "0 0 36px rgba(251,191,36,0.3)",
    rotationScale: 0.2,
    
  },
  {
    size: 42,
    left: "82%",
    top: "58%",
    gradient:
      "linear-gradient(120deg, rgba(59,130,246,0.11), rgba(251,191,36,0.31))",
    border: "1px solid rgba(59,130,246,0.20)",
    shadow: "0 0 16px rgba(251,191,36,0.17)",
    rotationScale: -0.14,
    hideOnMobile: true,
  },
  {
    size: 64,
    left: "42%",
    top: "-52%",
    gradient:
      "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(16,185,129,0.2))",
    border: "1px solid rgba(255,255,255,0.25)",
    shadow: "0 0 34px rgba(255,255,255,0.25)",
    rotationScale: -0.24,
  },
  {
    size: 114,
    left: "86%",
    top: "72%",
    gradient:
      "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(16,185,129,0.2))",
    border: "1px solid rgba(255,255,255,0.25)",
    shadow: "0 0 34px rgba(255,255,255,0.25)",
    rotationScale: -0.24,
    hideOnMobile: true,
  },
];

export default function ScrollCubes() {
  const cubeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scaleRef = useRef(1);
  const boostRef = useRef(1);
  const [, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const getActiveCubes = () =>
    isMobile ? cubes.filter((cube) => !cube.hideOnMobile) : cubes;

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      // boost tops out to avoid absurd speeds
      boostRef.current = 1 + Math.min(scrollY / 800, 2);
    };

    const syncScale = () => {
      const width = window.innerWidth || 1200;
      let next = 1;
      if (width < 480) next = 0.55;
      else if (width < 768) next = 0.7;
      else if (width < 1024) next = 0.85;
      scaleRef.current = next;
      setScale(next);
      setIsMobile(width < 640);
    };

    const render = (now: number) => {
      const t = (now - start) / 1000; // seconds
      const activeCubes = getActiveCubes();
      activeCubes.forEach((conf, idx) => {
        const el = cubeRefs.current[idx];
        if (!el) return;
        const angle = t * 70 * conf.rotationScale * boostRef.current;
        el.style.transform = [
          "translateZ(0)",
          "rotateX(-22deg)",
          "rotateY(26deg)",
          `rotate3d(1, 1, 0.35, ${angle}deg)`,
          `scale(${scaleRef.current})`,
        ].join(" ");
      });
      frameId = requestAnimationFrame(render);
    };

    handleScroll();
    syncScale();
    frameId = requestAnimationFrame(render);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", syncScale);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", syncScale);
    };
  }, [isMobile]);

  const faceBase = {
    position: "absolute" as const,
    inset: 0,
    borderRadius: 16,
    backfaceVisibility: "hidden" as const,
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="relative w-full h-[300px] sm:h-[340px]">
        {getActiveCubes().map((cube, i) => {
          const half = cube.size / 2;
          return (
            <div
              key={i}
              ref={(el) => {
                cubeRefs.current[i] = el;
              }}
              className="absolute will-change-transform"
              style={{
                width: cube.size,
                height: cube.size,
                left: cube.left,
                top: cube.top,
                transformStyle: "preserve-3d",
                transformOrigin: "center",
                filter: `drop-shadow(${cube.shadow})`,
              }}
            >
              {/* front */}
              <div
                style={{
                  ...faceBase,
                  background: cube.gradient,
                  border: cube.border,
                  boxShadow: cube.shadow,
                  transform: `translateZ(${half}px)`,
                }}
              />
              {/* back */}
              <div
                style={{
                  ...faceBase,
                  background: cube.gradient,
                  border: cube.border,
                  opacity: 0.4,
                  transform: `rotateY(180deg) translateZ(${half}px)`,
                }}
              />
              {/* right */}
              <div
                style={{
                  ...faceBase,
                  background: cube.gradient,
                  border: cube.border,
                  opacity: 0.7,
                  transform: `rotateY(90deg) translateZ(${half}px) translateX(${half}px)`,
                  filter: "brightness(0.9)",
                }}
              />
              {/* left */}
              <div
                style={{
                  ...faceBase,
                  background: cube.gradient,
                  border: cube.border,
                  opacity: 0.6,
                  transform: `rotateY(-90deg) translateZ(${half}px) translateX(-${half}px)`,
                  filter: "brightness(0.85)",
                }}
              />
              {/* top */}
              <div
                style={{
                  ...faceBase,
                  background: cube.gradient,
                  border: cube.border,
                  opacity: 0.75,
                  transform: `rotateX(90deg) translateZ(${half}px) translateY(${half}px)`,
                  filter: "brightness(1.05)",
                }}
              />
              {/* bottom */}
              <div
                style={{
                  ...faceBase,
                  background: cube.gradient,
                  border: cube.border,
                  opacity: 0.5,
                  transform: `rotateX(-90deg) translateZ(${half}px) translateY(-${half}px)`,
                  filter: "brightness(0.7)",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
