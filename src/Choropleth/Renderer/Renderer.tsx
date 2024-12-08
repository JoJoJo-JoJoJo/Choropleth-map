import { height, width } from "../../constants/constants";
import { RenderProps } from "../../constants/types";
import Marks from "./Marks/Marks";
import React from "react";

const Renderer = ({
  eduData,
  features,
  color,
  setHoveredCell,
  setIsHovered,
}: RenderProps) => (
  <svg width={width} height={height}>
    <Marks
      eduData={eduData}
      features={features}
      setHoveredCell={setHoveredCell}
      setIsHovered={setIsHovered}
      color={color}
    />
  </svg>
);

export default React.memo(Renderer);
