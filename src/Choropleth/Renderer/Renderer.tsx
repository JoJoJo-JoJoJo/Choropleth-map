import { height, margin, width } from "../../constants/constants";
import { RenderProps } from "../../constants/types";
import Marks from "./Marks/Marks";

const Renderer = ({
  eduData,
  countyData,
  setHoveredCell,
  setIsHovered,
}: RenderProps) => (
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
      {/* <ColorLegend /> */}
      <Marks
        attrs={eduData}
        data={countyData}
        setHoveredCell={setHoveredCell}
        setIsHovered={setIsHovered}
      />
    </g>
  </svg>
);

export default Renderer;
