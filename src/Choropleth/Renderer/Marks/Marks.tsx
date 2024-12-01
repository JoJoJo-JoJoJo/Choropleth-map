import React from "react";
import { MarksProps } from "../../../constants/types";
import { geoAlbersUsa, GeoPath, geoPath, pointer } from "d3";
import { Feature } from "geojson";

const Marks = ({
  eduData,
  features,
  setHoveredCell,
  setIsHovered,
  color,
}: MarksProps) => (
  <g className="marks">
    {features &&
      features.map((feature) => {
        const results = eduData.filter((obj) => obj.fips === feature.id);
        if (!results[0]) {
          throw new Error(
            `${feature.id} doesn't have a corresponding fips value.`
          );
        }
        const eduVal: number = results[0].bachelorsOrHigher;

        const proj = geoAlbersUsa();
        const path: GeoPath<unknown, Feature> = geoPath().projection(proj);

        const dProp = path(feature);
        // if (dProp === null) {
        //   throw new Error(
        //     `dProp is not valid - has a value of ${
        //       dProp === "" ? "'empty string'" : dProp
        //     }`
        //   );
        // } // ! dProp (and the features most likely) are null on the initial render, but then not afterwards.

        return (
          <path
            className="county"
            key={feature.id}
            d={dProp}
            stroke="black"
            strokeWidth={0.5}
            fill={color(eduVal)}
            fillOpacity={0.7}
            data-fips={feature.id}
            data-education={eduVal}
            onMouseEnter={(e) => {
              const [x, y] = pointer(e);

              setIsHovered(true);
              setHoveredCell({
                xPos: x,
                yPos: y,
                result: eduVal,
                county: results[0].area_name,
                stateCode: results[0].state,
              });
            }}
            onMouseLeave={() => setIsHovered(false)}
          />
        );
      })}
  </g>
);

export default React.memo(Marks);
