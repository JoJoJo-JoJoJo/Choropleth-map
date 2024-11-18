import { geoMercator, geoPath } from "d3";
import { MarksProps } from "../../../constants/types";
import { width } from "../../../constants/constants";

const Marks = ({ data }: MarksProps) => {
  const projection = geoMercator()
    .scale(width / 2 / Math.PI - 40)
    .center([10, 35]);
  const path = geoPath().projection(projection);

  return (
    <g className="marks">
      {data.features.map((feature) => {
        const validFeature = path(feature);
        console.log(`Data is ${validFeature}`);
        return (
          <path
            className="county"
            key={feature.id}
            d={validFeature}
            stroke="#635f5d"
            strokeWidth={0.5}
            fill="#f5f3f2"
            fillOpacity={0.7}
          />
        );
      })}
    </g>
  );
};

export default Marks;
