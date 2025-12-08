// components/SmoothScroll.tsx
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7, // higher = more delayed / floaty
      smoothWheel: true, // smooth mouse wheel
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // ease-out cubic feel
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
