import { ASCII_EDGE, ASCII_FILL } from "@/constants/site/asciiHero";

// Two <pre> layers stacked in one grid cell: the edge layer in the border
// color behind, the fill layer in the text color on top. The font size tracks
// the viewport so the banner never overflows at 390px.
const layerStyle = {
  fontSize: "clamp(5px, calc((100vw - 120px) / 42), 13px)",
  lineHeight: 1.05,
} as const;

export default function AsciiBanner() {
  return (
    <div aria-hidden="true" className="overflow-x-auto border-b pb-4 pt-2">
      <div className="grid w-max">
        <pre
          className="font-jetbrains text-border [grid-area:1/1]"
          style={layerStyle}
        >
          {ASCII_EDGE}
        </pre>
        <pre
          className="font-jetbrains text-fg [grid-area:1/1]"
          style={layerStyle}
        >
          {ASCII_FILL}
        </pre>
      </div>
    </div>
  );
}
