import { height, width } from "../../constants/constants";
import { ChoroProps } from "../../constants/types";
import Marks from "./Marks/Marks";

const Choropleth = ({ eduData, countyData }: ChoroProps) => {
  return (
    <svg width={width} height={height}>
      <Marks data={countyData} />
    </svg>
  );
};

export default Choropleth;
