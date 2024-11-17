import { useEffect, useState } from "react";
import { json } from "d3";
import { url2Data } from "../constants/types";

const useTopoData = (url: string) => {
  const [data, setData] = useState<url2Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        json(url).then((d) => {
          if (d === null || !d) {
            throw new TypeError("Data should be of a known type");
          } else {
            const newData: url2Data = d as url2Data;
            setData(newData);
          }
        });
      } catch (err) {
        throw new Error("Network failed to fetch and parse GeoJSON data.");
      }
    };

    fetchData();
  });

  return data;
};

export { useTopoData };
