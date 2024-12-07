import { lazy, Suspense, useEffect, useState } from "react";
import { url1, url2 } from "../constants/constants";
import { useFetchDataG } from "../hooks/useFetchDataG";
import { InteractData, url1Data, url2Data } from "../constants/types";
import Loading from "./Loading";
import * as topojson from "topojson-client";
import { FeatureCollection } from "geojson";
const Renderer = lazy(() => import("./Renderer/Renderer"));
const Tooltip = lazy(() => import("./Tooltip/Tooltip"));
import "./Choropleth.css";

const Choropleth = () => {
  const [hoveredCell, setHoveredCell] = useState<InteractData | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);

  const {
    data: eduData,
    error: eduError,
    isFetching: eduIsFetching,
  } = useFetchDataG<url1Data[]>(url1);

  const {
    data: topoData,
    error: topoError,
    isFetching: topoIsFetching,
  } = useFetchDataG<url2Data>(url2);

  useEffect(() => {
    if (!topoError && !topoIsFetching) {
      const geo = topojson.feature(topoData, topoData.objects.counties);
      setGeoData(geo as FeatureCollection);
    }
  }, [topoData, topoError, topoIsFetching]);

  if (eduError && !eduIsFetching) {
    throw eduError;
  }

  if (topoError && !topoIsFetching) {
    throw topoError;
  }

  if (geoData === null) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <main id="choropleth" className="choropleth">
        <Renderer
          eduData={eduData}
          features={geoData.features}
          setHoveredCell={setHoveredCell}
          setIsHovered={setIsHovered}
        />
        <Tooltip hoveredCell={hoveredCell} isHovered={isHovered} />
      </main>
    </Suspense>
  );
};

export default Choropleth;
