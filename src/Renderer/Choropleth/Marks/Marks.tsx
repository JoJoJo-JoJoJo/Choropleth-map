import { geoMercator, geoPath } from "d3";
import { MarksProps } from "../../../constants/types";
import { width } from "../../../constants/constants";

const Marks = ({ attrs, data }: MarksProps) => {
  const {} = attrs;

  const projection = geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);
  const path = geoPath().projection(projection);

  return (
    <g className="marks">
      {data.features.map((feature) => {
        const results = attrs.filter((obj) => obj.fips === feature.id);
        if (!results[0]) {
          console.error(
            `${feature.id} doesn't have a corresponding fips value.`
          );
        }
        return (
          <path
            className="county"
            key={feature.id}
            d={path(feature)}
            stroke="#635f5d"
            strokeWidth={0.5}
            fill="#f5f3f2"
            fillOpacity={0.7}
            data-fips={feature.id}
            data-education={results[0] ? results[0].bachelorsOrHigher : 0}
          />
        );
      })}
    </g>
  );
};

export default Marks;
