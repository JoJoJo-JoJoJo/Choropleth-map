import { url1Data, url2Data } from "./types";

const width: number = 800;
const height: number = 600;

const url1 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

const initState1: url1Data[] = [
  {
    fips: 0,
    state: "no_state",
    area_name: "no_area_name",
    bachelorsOrHigher: 0,
  },
];

const url2 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const initState2: url2Data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "initFeature",
      properties: {
        name: "initFeature",
      },
      geometry: {
        coordinates: [
          [0, 1]
        ],
        type: "initFeatureGeometry",
      },
    }
  ],
};

export { width, height, url1, initState1, url2, initState2 };
