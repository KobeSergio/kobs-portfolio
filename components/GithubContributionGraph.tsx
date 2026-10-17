"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";

const WEEKS = 53;

export default function GithubContributionGraph() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(Math.floor(entry.contentRect.width));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const isMobile = containerWidth !== null && containerWidth < 768;

  const { blockSize, blockMargin, fontSize } = useMemo(() => {
    if (!containerWidth) return { blockSize: 14, blockMargin: 5, fontSize: 14 };

    if (containerWidth >= 1100) return { blockSize: 15, blockMargin: 5, fontSize: 14 };
    if (containerWidth >= 900)  return { blockSize: 13, blockMargin: 4, fontSize: 13 };
    if (containerWidth >= 700)  return { blockSize: 10, blockMargin: 3, fontSize: 12 };

    // Mobile: labels hidden, so total width = (blockSize + blockMargin) * WEEKS - blockMargin
    // Target total ≥ containerWidth so no gap.
    const margin = containerWidth >= 450 ? 2 : 1;
    const fs = containerWidth >= 600 ? 11 : containerWidth >= 450 ? 10 : 9;
    // size such that (size + margin) * WEEKS ≥ containerWidth
    const size = Math.max(3, Math.ceil(containerWidth / WEEKS) - margin);
    return { blockSize: size, blockMargin: margin, fontSize: fs };
  }, [containerWidth]);

  return (
    <div className="flex flex-col gap-4 justify-center w-full max-w-6xl mx-auto px-4 md:px-8 scroll-mt-24">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">GitHub Activity</p>
      <div ref={wrapperRef} className="w-full overflow-x-auto no-scrollbar py-6">
        {containerWidth !== null && (
          <GitHubCalendar
            colorScheme="dark"
            username="kobesergio"
            theme={{
              light: ["#fbbf24", "#facc15", "#f59e42", "#f8b400", "#fcd34d"],
              dark: ["#292524", "#d1a22b", "#fbbf24", "#facc15", "#fde68a"],
            }}
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
            showWeekdayLabels={!isMobile}
          />
        )}
      </div>
    </div>
  );
}
