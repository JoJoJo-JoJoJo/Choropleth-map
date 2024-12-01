import React, { useEffect, useState } from "react";
import { InteractData, url1Data, url2Data } from "../constants/types";
import Renderer from "./Renderer/Renderer";
import { url1, url2 } from "../constants/constants";
import "./Choropleth.css";
import Tooltip from "./Tooltip/Tooltip";
import * as topojson from "topojson-client";
import { FeatureCollection } from "geojson";
import { useQuery } from "@tanstack/react-query";
import { FeCol } from "../constants/instances";

const Choropleth = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [eduData, setEduData] = useState<url1Data[] | null>(null);
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);

  const {
    data: eduJSON,
    status: eduStatus,
    error: eduError,
  } = useQuery({
    queryKey: ["edu", { url1 }],
    queryFn: async () => {
      const res = await fetch(url1);
      return (await res.json()) as url1Data[];
    },
  });

  const {
    data: geoJSON,
    status: geoStatus,
    error: geoError,
  } = useQuery({
    queryKey: ["county", { url2 }],
    queryFn: async () => {
      const res = await fetch(url2);
      const json = (await res.json()) as url2Data;
      const geoJSON = topojson.feature(json, json.objects.counties);
      return geoJSON;
    },
  });

  useEffect(() => {
    if (eduStatus === "success" && geoStatus === "success") {
      setEduData(eduJSON as url1Data[]);
      
      if (geoJSON instanceof FeCol) {
        setGeoData(geoJSON as FeatureCollection);
      }
    }
  }, [eduJSON, eduStatus, geoJSON, geoStatus]);

  if (eduStatus === "pending" || geoStatus === "pending") {
    return <pre className="loading">Loading...</pre>;
  }

  if (eduError) {
    return (
      <span>
        {eduError.name}: {eduError.message}
      </span>
    );
  } else if (geoError) {
    return (
      <span>
        {geoError.name}: {geoError.message}
      </span>
    );
  }


  return (
    <div id="choropleth" className="choropleth">
      {eduData === null || geoData === null ? (
        <pre className="loading">
          {!geoData ? "geoData is null" : "eduData is null"}
        </pre>
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

export default React.memo(Choropleth);
