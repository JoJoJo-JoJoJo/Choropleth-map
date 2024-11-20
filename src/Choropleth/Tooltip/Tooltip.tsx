import { TooltipProps } from "../../constants/types";

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
        <p className="county">{county}</p>
        <span>
          <p>{`${stateCode}: `}</p>
          <p>{`${result}%`}</p>
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
