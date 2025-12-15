"use client";

import { useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import SectionLabel from "./SectionLabel";
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
    if (width < 420) {
      return { blockSize: 9, blockMargin: 3, fontSize: 12 };
    }
    if (width < 640) {
      return { blockSize: 12, blockMargin: 4, fontSize: 14 };
    }
    return { blockSize: 17, blockMargin: 7, fontSize: 16 };
  }, [width, defaultBlockSize, defaultBlockMargin]);

  return (
    <div className="flex flex-col gap-2 justify-center w-full md:mx-auto mx-4 px-8 scroll-mt-24">
      <SectionLabel label="Github Contribution Graph" />
      <div className="max-w-[80vw] lg:max-w-[90vw] mx-auto overflow-scroll py-6 overflow-x-auto">
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
