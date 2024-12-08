import { marginProps } from "./types";

// Sizing:
const width: number = 900;
const height: number = 610;
const margin: marginProps = { top: 20, right: 20, bottom: 200, left: 20 };

// URLs:
const url1 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

const url2 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

// Data rep' related:
const schemeColors = 9;

// Color legend:
const tickRadius = 8;
const rowLength = 5;

export {
  width,
  height,
  margin,
  url1,
  url2,
  schemeColors,
  tickRadius,
  rowLength,
};
