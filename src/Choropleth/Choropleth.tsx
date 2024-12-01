import { useEffect, useState } from "react";
import { InteractData, url1Data, url2Data } from "../constants/types";
import Renderer from "./Renderer/Renderer";
import { url1, url2 } from "../constants/constants";
import "./Choropleth.css";
import Tooltip from "./Tooltip/Tooltip";
import * as topojson from "topojson-client";
import { FeatureCollection } from "geojson";
import { useQuery } from "@tanstack/react-query";
import { useFetchData } from "../hooks/useFetchData";

const Choropleth = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [eduData, setEduData] = useState<url1Data[] | null>(null);
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);

  const {
    data: eduJSON,
    isLoading: eduLoading,
    status: eduStatus,
    error: eduError,
  } = useQuery({
    queryKey: ["edu", url1],
    queryFn: () => useFetchData<url1Data[]>(url1),
  });

  const {
    data: countyJSON,
    isLoading: countyLoading,
    status: countyStatus,
    error: countyError,
  } = useQuery({
    queryKey: ["county", url2],
    queryFn: () => useFetchData<url2Data>(url2),
  });

  useEffect(() => {
    if (eduStatus === "success") {
      console.log(eduJSON);
      setEduData(eduJSON);
    } else if (eduStatus === "error") {
      throw eduError;
    }

    if (countyStatus === "success") {
      const geoJSON = topojson.feature(countyJSON, countyJSON.objects.counties);
      console.log(geoJSON);

      setGeoData(geoJSON as FeatureCollection);
    } else if (countyStatus === "error") {
      throw countyError;
    }
  }, [eduJSON, countyJSON]);

  return (
    <div id="choropleth" className="choropleth">
      {eduLoading || countyLoading || eduData === null || geoData === null ? (
        <pre className="loading">Loading...</pre>
      ) : (
        <>
          <Renderer
            eduData={eduData}
            features={geoData.features}
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

// const dF1: Promise<url1Data[] | void> = d3.json(url1);
// const dF2: Promise<url2Data | void> = d3.json(url2);

// Promise.all([dF1, dF2])
//   .then(([eduRes, countyRes]) => {
//     console.log(eduRes);
//     console.log(countyRes);
//     if (eduRes !== null && typeof eduRes !== "undefined") {
//       setEduData(eduRes);
//     } else {
//       console.error("eduRes cannot be null", eduRes, eduData);
//     }

//     if (countyRes !== null && typeof countyRes !== "undefined") {
//       const geoData = topojson.feature(
//         countyRes,
//         countyRes.objects.counties
//       );
//       setGeoJson(geoData as FeatureCollection);
//     } else {
//       console.error("countyRes cannot be null", countyRes, geoJson);
//     }
//   })
//   .then(() => {
//     console.log(eduData);
//     console.log(geoJson);
//   })
//   .catch((err) => console.error(err));
