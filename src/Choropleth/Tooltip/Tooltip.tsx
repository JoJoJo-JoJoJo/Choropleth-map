import { TooltipProps } from "../../constants/types";

const Tooltip = ({ hoveredCell, isHovered }: TooltipProps) => {
  if (!hoveredCell) return;
  const { xPos, yPos, result } = hoveredCell;

  return (
    <div
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

      </div>
    </div>
  );
};

export default Tooltip;
