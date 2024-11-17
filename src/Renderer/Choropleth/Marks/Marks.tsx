import { geoEqualEarth, geoPath } from "d3";
import { MarksProps } from "../../../constants/types";

const Marks = ({ data }: MarksProps) => {
  const projection = geoEqualEarth();
  const path = geoPath(projection);

  return (
    <g className="marks">
      {data.features.map((feature) => {
        const validFeature = feature;
        return <path className="county" d={path(validFeature)} />;
      })}
    </g>
  );
};

export default Marks;
