import {
  margin,
  rowLength,
  tickRadius,
  width,
} from "../../constants/constants";
import { CLegendProps } from "../../constants/types";

const ColorLegend = ({ colorScale }: CLegendProps) => (
  <svg id="legend" className="color-legend" width={width} height="100">
    <g transform={`translate(${width / 4}, 25)`}>
      {colorScale.domain().map((val, i) => (
        <g
          className="legend-g"
          key={`__${val}__${i}`}
          transform={`translate(${(i % rowLength) * (width / 2 / rowLength)}, ${
            (Math.floor(i / rowLength) * margin.bottom) / 4
          })`}
        >
          <rect
            className="legend-item"
            fill={colorScale(val)}
            width={tickRadius * 1.5}
            height={tickRadius * 1.5}
            y="-6px"
          />
          <text textAnchor="start" dx="20px" dy="5px">{`${Math.round(
            val
          )}%`}</text>
        </g>
      ))}
    </g>
  </svg>
);

export default ColorLegend;
