import { useEffect, useState } from "react";
import { InteractData, url1Data, url2Data } from "../constants/types";
import Renderer from "./Renderer/Renderer";
import { useAwaitData } from "../hooks/useAwaitData";
import { url1, url2 } from "../constants/constants";
import "./Choropleth.css";
import Tooltip from "./Tooltip/Tooltip";
import * as topojson from "topojson-client";
import { FeatureCollection } from "geojson";

const Choropleth = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [geoJson, setGeoJson] = useState<FeatureCollection | null>(null);

  // Fetch the education data.
  const [loading1, eduData, error1] = useAwaitData<url1Data[]>(url1);

  // Fetch the topography data and convert it to GeoJSON.
  const [loading2, countyData, error2] = useAwaitData<url2Data>(url2);

  useEffect(() => {
    if (error1 !== "") {
      throw new Error(error1);
    } else if (error2 !== "") {
      throw new Error(error2);
    }

    if (countyData !== null && typeof countyData !== "undefined") {
      const geoJSON = topojson.feature(
        countyData,
        countyData.objects.counties
      );
      setGeoJson(geoJSON);
    }

    if (countyData && eduData) {
      console.log(eduData);
      console.log(countyData);
      console.log(geoJson);
    }
  }, [loading1, loading2]);

  return (
    <div id="choropleth" className="choropleth">
      {loading1 || loading2 || eduData === null || geoJson === null ? (
        <pre className="loading">Loading...</pre>
      ) : (
        <>
          <Renderer
            eduData={eduData}
            features={geoJson.features}
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
