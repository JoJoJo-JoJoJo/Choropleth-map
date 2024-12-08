import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { schemeColors, url1, url2 } from "../constants/constants";
import { useFetchDataG } from "../hooks/useFetchDataG";
import { InteractData, url1Data, url2Data } from "../constants/types";
import Loading from "./Loading";
import * as topojson from "topojson-client";
import { FeatureCollection } from "geojson";
const Renderer = lazy(() => import("./Renderer/Renderer"));
const Tooltip = lazy(() => import("./Tooltip/Tooltip"));
import "./Choropleth.css";
import ColorLegend from "./ColorLegend/ColorLegend";
import { extent, range, scaleQuantile, schemePiYG } from "d3";

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

  const minmax = extent(eduData, (d) => d.bachelorsOrHigher);
  if (!minmax[0] || !minmax[1]) {
    throw new TypeError("The extents of eduData are undefined.");
  }

  const scheme = useMemo(() => schemePiYG[schemeColors], []);
  const quantile = useMemo(
    () =>
      scaleQuantile(scheme).domain(
        range(minmax[0], minmax[1], (minmax[1] - minmax[0]) / schemeColors)
      ),
    [minmax, scheme]
  );

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
      {geoData && (
        <main id="choropleth" className="choropleth">
          <Renderer
            eduData={eduData}
            features={geoData.features}
            setHoveredCell={setHoveredCell}
            setIsHovered={setIsHovered}
            color={quantile}
          />
          <Tooltip hoveredCell={hoveredCell} isHovered={isHovered} />
          <ColorLegend colorScale={quantile} />
        </main>
      )}
    </Suspense>
  );
};

export default Choropleth;
