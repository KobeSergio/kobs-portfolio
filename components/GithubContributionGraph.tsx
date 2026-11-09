"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/lib/theme";

const WEEKS = 53;
// react-activity-calendar adds this to the widest weekday label.
const LABEL_MARGIN = 8;
const WEEKDAY_LABELS = ["Mon", "Wed", "Fri"];

function fontSizeFor(width: number) {
  if (width >= 900) return 14;
  if (width >= 700) return 12;
  if (width >= 450) return 11;
  return 10;
}

// The gutter the calendar reserves for weekday labels: the widest shown
// label measured the way the library measures it (an SVG text node in the
// body font), plus its margin.
function measureLabelOffset(fontSize: number) {
  const namespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(namespace, "svg");
  svg.style.position = "absolute";
  svg.style.visibility = "hidden";
  svg.style.fontFamily = window.getComputedStyle(document.body).fontFamily;
  svg.style.fontSize = `${fontSize}px`;
  const text = document.createElementNS(namespace, "text");
  svg.appendChild(text);
  document.body.appendChild(svg);
  let widest = 0;
  for (const label of WEEKDAY_LABELS) {
    text.textContent = label;
    widest = Math.max(widest, Math.ceil(text.getBBox().width));
  }
  document.body.removeChild(svg);
  return widest + LABEL_MARGIN;
}

export default function GithubContributionGraph() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [layout, setLayout] = useState<{
    width: number;
    labelOffset: number;
  } | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const width = Math.floor(entry.contentRect.width);
      const fontSize = fontSizeFor(width);
      setLayout({ width, labelOffset: measureLabelOffset(fontSize) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Block size and gap that make the calendar exactly as wide as its box:
  // width = WEEKS * (blockSize + blockMargin) - blockMargin + labelOffset.
  const sizing = useMemo(() => {
    if (!layout) return null;
    const { width } = layout;
    const showWeekdayLabels = width >= 768;
    const labelOffset = showWeekdayLabels ? layout.labelOffset : 0;
    const pitch = (width - labelOffset) / WEEKS;
    const blockMargin = pitch >= 15 ? 4 : pitch >= 11 ? 3 : pitch >= 8 ? 2 : 1;
    const blockSize = Math.max(
      3,
      Math.round(((width - labelOffset + blockMargin) / WEEKS - blockMargin) * 100) / 100
    );
    return {
      blockSize,
      blockMargin,
      fontSize: fontSizeFor(width),
      showWeekdayLabels,
    };
  }, [layout]);

  return (
    <div className="w-full">
      <div ref={wrapperRef} className="w-full overflow-x-auto no-scrollbar">
        {sizing ? (
          <GitHubCalendar
            colorScheme={theme}
            username="kobesergio"
            theme={{
              light: ["#e3e8f0", "#f7dc9a", "#f3c24f", "#e39a10", "#a85d07"],
              dark: ["#172442", "#5a4514", "#937014", "#c9961a", "#fbbf24"],
            }}
            blockSize={sizing.blockSize}
            blockMargin={sizing.blockMargin}
            fontSize={sizing.fontSize}
            showWeekdayLabels={sizing.showWeekdayLabels}
          />
        ) : null}
      </div>
    </div>
  );
}
