import { MarksProps } from "../../../constants/types";
import { pointer } from "d3";

const Marks = ({
  attrs,
  features,
  setHoveredCell,
  setIsHovered,
  color,
  createPath,
}: MarksProps) => (
  <g className="marks">
    {features.map((feature) => {
      const results = attrs.filter((obj) => obj.fips === feature.id);
      if (!results[0]) {
        throw new Error(
          `${feature.id} doesn't have a corresponding fips value.`
        );
      }
      const eduVal: number = results[0].bachelorsOrHigher;

      const dProp = createPath(feature);
      if (dProp === null || dProp === "") {
        throw new Error(`${feature.id} is not a valid Feature.\n${feature}`);
      }

      return (
        <path
          className="county"
          key={feature.id}
          d={dProp}
          stroke="black"
          strokeWidth={0.5}
          fill={color(eduVal)}
          fillOpacity={0.7}
          data-fips={feature.id}
          data-education={eduVal}
          onMouseEnter={(e) => {
            const [x, y] = pointer(e);

            setIsHovered(true);
            setHoveredCell({
              xPos: x,
              yPos: y,
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

export default Marks;
