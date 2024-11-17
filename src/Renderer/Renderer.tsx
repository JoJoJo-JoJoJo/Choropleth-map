import { ChoroProps } from "../constants/types";
import Choropleth from "./Choropleth/Choropleth";

const Renderer = ({ eduData, countyData }: ChoroProps) => (
  <Choropleth eduData={eduData} countyData={countyData} />
);

export default Renderer;
