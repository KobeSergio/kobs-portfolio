import { ASCII_EDGE, ASCII_FILL } from "@/constants/site/asciiHero";

// Two <pre> layers stacked in one grid cell: the edge layer in the border
// color behind, the fill layer in the text color on top. The wrapper is a size
// container and the font size is its width divided by the banner's 69 columns
// at 0.6em per monospace glyph, so the banner always spans the README box
// edge to edge, from 390px phones to wide monitors. The glyphs render a hair
// wider than 0.6em, so the divisor carries half a percent of slack.
const COLUMNS = 69;
const layerStyle = {
  fontSize: `calc(100cqw / ${COLUMNS * 0.6 * 1.005})`,
  lineHeight: 1.05,
} as const;

export default function AsciiBanner() {
  return (
    <div aria-hidden="true" className="@container overflow-hidden border-b pb-4 pt-2">
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
