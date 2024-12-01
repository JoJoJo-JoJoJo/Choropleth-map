import { marginProps } from "./types";

const width: number = 800;
const height: number = 400;

const margin: marginProps = { top: 20, right: 20, bottom: 200, left: 20 };

const url1 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";

const url2 =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

const schemeColors = 9;
const tickSpaces = 20;
const tickRadius = 8;
const xMove = 70;

export { width, height, margin, url1, url2, schemeColors, tickSpaces, tickRadius, xMove };
