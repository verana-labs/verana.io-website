import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** Renders a Font Awesome icon's raw path inside an SVG (FontAwesomeIcon
 *  itself cannot be positioned in SVG coordinate space). Works in server and
 *  client components. */
export default function Glyph({
  icon,
  cx,
  cy,
  size,
  color,
}: {
  icon: IconDefinition;
  cx: number;
  cy: number;
  size: number;
  color: string;
}) {
  const [w, h] = icon.icon;
  const d = icon.icon[4];
  const s = size / Math.max(w, h);
  return (
    <g transform={`translate(${cx - (w * s) / 2}, ${cy - (h * s) / 2}) scale(${s})`}>
      <path d={Array.isArray(d) ? d.join(" ") : d} fill={color} />
    </g>
  );
}
