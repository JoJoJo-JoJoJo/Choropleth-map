import { Feature, GeoJsonProperties, Geometry } from "geojson";
import { Topology } from "topojson-specification";

type marginProps = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type loadingNum = number | "Loading...";

type AnchorProps = {
  href: string;
  text: string;
};

type url1Data = {
  readonly fips: number;
  readonly state: string;
  readonly area_name: string;
  readonly bachelorsOrHigher: number;
};

type url2Data = Topology;

interface RenderProps {
  eduData: url1Data[];
  features: Feature<Geometry, GeoJsonProperties>[];
  setHoveredCell: React.Dispatch<React.SetStateAction<InteractData | null>>;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  color: d3.ScaleQuantile<string, never>;
}

interface InteractData {
  readonly xPos: loadingNum;
  readonly yPos: loadingNum;
  readonly result: number;
  readonly county: string;
  readonly stateCode: string;
}

type TooltipProps = {
  hoveredCell: InteractData | null;
  isHovered: boolean;
};

type CLegendProps = {
  colorScale: d3.ScaleQuantile<string, never>;
};

type MarksProps = {
  eduData: url1Data[];
  features: Feature<Geometry, GeoJsonProperties>[];
  setHoveredCell: React.Dispatch<React.SetStateAction<InteractData | null>>;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  color: d3.ScaleQuantile<string, never>;
};

export type {
  marginProps,
  AnchorProps,
  url1Data,
  url2Data,
  RenderProps,
  InteractData,
  TooltipProps,
  CLegendProps,
  MarksProps,
};
