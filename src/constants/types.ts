type urlStateProps = {
  readonly url1: boolean;
  readonly url2: boolean;
};

type AnchorProps = {
  href: string;
  text: string;
};

interface useDataParams {
  url: URL;
}

type url1Data = {
  readonly fips: number;
  readonly state: string;
  readonly area_name: string;
  readonly bachelorsOrHigher: number;
};

type geoFeatures = {
  type: "Feature";
  id: string;
  properties: {
    name: string;
  };
  geometry: {
    coordinates: [number, number][];
    type: string;
  };
};

type url2Data = {
  type: "FeatureCollection";
  features: geoFeatures[];
};

type ChoroProps = {
  eduData: url1Data[];
  countyData: url2Data;
};

type MarksProps = {
  data: url2Data;
};

export type {
  urlStateProps,
  AnchorProps,
  useDataParams,
  url1Data,
  url2Data,
  ChoroProps,
  MarksProps,
};
