import { useEffect, useState } from "react";
import { json } from "d3";
import { url2Data } from "../constants/types";

const useTopoData = (url: string) => {
  const [data, setData] = useState<url2Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        json(url).then((d) => {
          if (d === undefined) {
            throw new TypeError("Data should be of a known type");
          }
          const newData: url2Data = d as url2Data;
          setData(newData);
        });
      } catch (err) {
        throw new Error("Network failed to fetch and parse TopoJSON data.");
      }
    };

    fetchData();
  });

  return data;
};

export { useTopoData };
