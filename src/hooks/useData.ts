import { useEffect, useState } from "react";
import { json } from "d3";

const useData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: typeof data | undefined = (await json(url));
        if (res == null) {
          throw new TypeError("Data should be of a known type");
        }
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
