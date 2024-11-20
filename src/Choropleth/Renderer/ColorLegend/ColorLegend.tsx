import { ColorLegendProps } from "../../../constants/types";

const ColorLegend = ({ colorScale }: ColorLegendProps) => {
  const values = colorScale.range().map((color) => {
    const cMinMax = colorScale.invertExtent(color);

    if (!cMinMax) {
      throw new TypeError(`cMinMax cannot be of type ${typeof cMinMax}`);
    }

    return cMinMax;
  });

  // Create an x scale for the color legend
  // Append text to each tick (and don't forget to anchor in the middle!)
  // Fill rects with corresponding colors
  // Round x scale ticks to 2 d.p. with tickFormat(".2f")

  return (
    <g id="legend" className="color-legend">
      {values.map((val) => (
        <rect height={10} x={} />
      ))}
    </g>
  );
};

export default ColorLegend;
