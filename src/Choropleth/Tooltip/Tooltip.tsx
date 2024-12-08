import React from "react";
import { TooltipProps } from "../../constants/types";
import "./Tooltip.css";

const Tooltip = ({ hoveredCell, isHovered }: TooltipProps) => {
  if (!hoveredCell) return;
  const { xPos, yPos, result, county, stateCode } = hoveredCell;

  return (
    <div
      className="tooltip"
      id="tooltip"
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: xPos,
        top: yPos,
        opacity: isHovered ? 0.7 : 0,
      }}
      data-education={result}
    >
      <div
        style={{
          position: "absolute",
        }}
      >
        <p className="county-name">{county}</p>
        <p>{`${stateCode}: ${result}%`}</p>
      </div>
    </div>
  );
};

export default React.memo(Tooltip);
