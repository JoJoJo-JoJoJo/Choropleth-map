import { Feature, FeatureCollection } from "geojson";


class FeCol {
  static [Symbol.hasInstance](instance: FeatureCollection | Feature) {
    return instance.hasOwnProperty("features")
  }
}

export { FeCol };
