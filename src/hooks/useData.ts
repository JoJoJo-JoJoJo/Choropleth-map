import { useEffect, useState } from "react";
import { json } from "d3";
import { url1Data } from "../constants/types";

const useData = (url: string) => {
  const [data, setData] = useState<url1Data[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: url1Data[] = await json(url) as url1Data[];
        setData(res);
      } catch (err) {
        throw new Error("Network failed to fetch and parse JSON data.");
      }
    };

    fetchData();
  });

  return data;
};

export { useData };
