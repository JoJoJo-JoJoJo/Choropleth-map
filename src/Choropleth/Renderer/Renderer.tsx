import * as d3 from "d3";
import { height, margin, schemeColors, width } from "../../constants/constants";
import { RenderProps } from "../../constants/types";
import Marks from "./Marks/Marks";
import { geoAlbers, geoPath } from "d3-geo";
import ColorLegend from "./ColorLegend/ColorLegend";

const Renderer = ({
  eduData,
  features,
  setHoveredCell,
  setIsHovered,
}: RenderProps) => {
  const minmax = d3.extent(eduData, (d) => d.bachelorsOrHigher);
  if (!minmax[0] || !minmax[1]) {
    throw new TypeError("The extents of eduData are undefined.");
  }

  const scheme = d3.schemePuBuGn[schemeColors];
  const quantile = d3
    .scaleQuantile(scheme)
    .domain(d3.range(minmax[0], minmax[1], (minmax[1] - minmax[0]) / schemeColors));
  
  const path = geoPath().projection(geoAlbers());

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g
        className="g"
        width={width}
        height={height}
        transform={`translate(${[margin.left, margin.top].join(", ")})`}
      >
        <ColorLegend colorScale={quantile} />
        <Marks
          attrs={eduData}
          features={features}
          setHoveredCell={setHoveredCell}
          setIsHovered={setIsHovered}
          color={quantile}
          createPath={path}
        />
      </g>
    </svg>
  );
};

export default Renderer;
