"use client";

import { useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useWindowSize } from "@uidotdev/usehooks";

export default function GithubContributionGraph() {
  const defaultBlockSize = 14;
  const defaultBlockMargin = 5;

  const { width } = useWindowSize();

  const { blockSize, blockMargin, fontSize } = useMemo(() => {
    if (!width) {
      return {
        blockSize: defaultBlockSize,
        blockMargin: defaultBlockMargin,
        fontSize: 14,
      };
    }
    if (width >= 1280) return { blockSize: 15, blockMargin: 5, fontSize: 14 };
    if (width >= 1024) return { blockSize: 13, blockMargin: 4, fontSize: 13 };
    if (width >= 768)  return { blockSize: 10, blockMargin: 3, fontSize: 12 };
    if (width >= 640)  return { blockSize: 9,  blockMargin: 2, fontSize: 11 };
    if (width >= 480)  return { blockSize: 7,  blockMargin: 2, fontSize: 10 };
    if (width >= 360)  return { blockSize: 5,  blockMargin: 1, fontSize: 9  };
    return { blockSize: 4, blockMargin: 1, fontSize: 8 };
  }, [width, defaultBlockSize, defaultBlockMargin]);

  return (
    <div className="flex flex-col gap-4 justify-center w-full max-w-6xl mx-auto px-4 md:px-8 scroll-mt-24">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">GitHub Activity</p>
      <div className="w-full overflow-x-auto no-scrollbar py-6">
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
        />
      </div>
    </div>
  );
}
