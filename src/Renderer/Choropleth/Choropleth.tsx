import { ChoroProps } from "../../constants/types";
import Marks from "./Marks/Marks";

const Choropleth = ({ eduData, countyData }: ChoroProps) => {
  return (
    <svg>
      <Marks data={countyData} />
    </svg>
  );
};

export default Choropleth;
