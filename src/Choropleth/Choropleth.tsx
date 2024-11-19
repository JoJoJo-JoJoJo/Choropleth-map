import { useEffect, useState } from "react";
import { InteractData, url1Data, url2Data } from "../constants/types";
import Renderer from "./Renderer/Renderer";
import { useAwaitData } from "../hooks/useAwaitData";
import { url1, url2 } from "../constants/constants";
import "./Choropleth.css";
import Tooltip from "./Tooltip/Tooltip";

const Choropleth = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Fetch the education data.
  const [loading1, eduData, error1] = useAwaitData<url1Data[]>(url1);

  // Fetch the topography data and convert it to GeoJSON.
  const [loading2, countyData, error2] = useAwaitData<url2Data>(url2);

  useEffect(() => {
    console.log(eduData);
    console.log(countyData);

    if (error1 !== "") {
      throw new Error(error1);
    } else if (error2 !== "") {
      throw new Error(error2);
    }
  }, []);

  return (
    <div id="choropleth" className="choropleth">
      {loading1 || loading2 || eduData === null || countyData === null ? (
        "Loading..."
      ) : (
        <>
          <Renderer
            eduData={eduData}
            countyData={countyData}
            setHoveredCell={setHoveredCell}
            setIsHovered={setIsHovered}
          />
          <Tooltip hoveredCell={hoveredCell} isHovered={isHovered} />
        </>
      )}
    </div>
  );
};

export default Choropleth;
