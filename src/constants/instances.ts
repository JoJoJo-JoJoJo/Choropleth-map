import { Feature, FeatureCollection } from "geojson";


class FeCol {
  static [Symbol.hasInstance](instance: FeatureCollection | Feature) {
    return Object.prototype.hasOwnProperty.call(instance, "features")
  }
}

export { FeCol };
