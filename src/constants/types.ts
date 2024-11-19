import { FeatureCollection } from "geojson";

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

type url2Data = FeatureCollection;

interface ChoroProps {
  eduData: url1Data[];
  countyData: url2Data;
}

interface RenderProps extends ChoroProps {
  setHoveredCell: React.Dispatch<React.SetStateAction<InteractData | null>>;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InteractData {
  readonly xPos: loadingNum;
  readonly yPos: loadingNum;
  readonly result: url1Data;
}

type TooltipProps = {
  hoveredCell: InteractData | null;
  isHovered: boolean;
};

type ColorLegendProps = {};

type MarksProps = {
  attrs: url1Data[];
  data: url2Data;
  setHoveredCell: React.Dispatch<React.SetStateAction<InteractData | null>>;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {
  marginProps,
  AnchorProps,
  url1Data,
  url2Data,
  ChoroProps,
  RenderProps,
  InteractData,
  TooltipProps,
  ColorLegendProps,
  MarksProps,
};
