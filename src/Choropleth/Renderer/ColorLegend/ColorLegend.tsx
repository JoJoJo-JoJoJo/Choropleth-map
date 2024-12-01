import {
  height,
  margin,
  tickRadius,
  tickSpaces,
  width,
  xMove,
} from "../../../constants/constants";
import { ColorLegendProps } from "../../../constants/types";

const ColorLegend = ({ colorScale }: ColorLegendProps) => (
  <g
    id="legend"
    className="color-legend"
    transform={`translate(${
      (width + margin.left + margin.right) / 2 - xMove
    }, ${height + xMove + 60})`}
  >
    {colorScale.domain().map((val, i) => (
      <g
        key={`__${val}__${colorScale(val)}__${i}`}
        transform={`translate(${Math.floor(i / 3) * xMove}, ${
          (i % 3) * tickSpaces
        })`}
      >
        <circle fill={colorScale(val)} r={tickRadius} />
        <text textAnchor="end" dx="-15px" dy="5px">{`${Math.round(
          val
        )}%`}</text>
      </g>
    ))}
  </g>
);

export default ColorLegend;
