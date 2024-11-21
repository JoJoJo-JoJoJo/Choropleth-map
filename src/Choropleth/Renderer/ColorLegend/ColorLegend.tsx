import { margin, tickRadius, tickSpaces, width } from "../../../constants/constants";
import { ColorLegendProps } from "../../../constants/types";

const ColorLegend = ({ colorScale }: ColorLegendProps) => (
  <g id="legend" className="color-legend">
    {colorScale.domain().map((val, i) => (
      <g
        key={`__${val}__${colorScale(val)}__${i}`}
        transform={`translate(${(width + margin.left + margin.right) / 2}, ${
          i * tickSpaces
        })`}
      >
        <circle fill={colorScale(val)} r={tickRadius} />
        <text>{val}</text>
      </g>
    ))}
  </g>
);

export default ColorLegend;
