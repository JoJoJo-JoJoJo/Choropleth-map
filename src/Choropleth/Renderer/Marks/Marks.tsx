import React from "react";
import { MarksProps } from "../../../constants/types";
import { geoPath } from "d3";
import { tooltipHeight } from "../../../constants/constants";

const Marks = ({
  eduData,
  features,
  setHoveredCell,
  setIsHovered,
  color,
}: MarksProps) => {
  const pathGen = geoPath();

  return (
    <g className="marks">
      {features &&
        features.map((feature) => {
          const results = eduData.filter((obj) => obj.fips === feature.id);
          if (!results[0]) {
            throw new Error(
              `${feature.id} doesn't have a corresponding fips value.`
            );
          }
          const eduVal: number = results[0].bachelorsOrHigher;

          return (
            <path
              className="county"
              key={feature.id}
              d={pathGen(feature) as string}
              stroke="lightGray"
              strokeWidth={0.5}
              fill={color(eduVal)}
              fillOpacity={0.7}
              data-fips={feature.id}
              data-education={eduVal}
              onMouseEnter={(e) => {
                setIsHovered(true);
                setHoveredCell({
                  xPos: e.pageX,
                  yPos: e.pageY - (tooltipHeight / 2),
                  result: eduVal,
                  county: results[0].area_name,
                  stateCode: results[0].state,
                });
              }}
              onMouseLeave={() => setIsHovered(false)}
            />
          );
        })}
    </g>
  );
};

export default React.memo(Marks);
