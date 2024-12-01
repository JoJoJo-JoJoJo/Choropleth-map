import { useState } from "react";
import { ZodSchema } from "zod";

const useFetchData = <T>(url: string, schema: ZodSchema | null = null): T => {
  const [data, setData] = useState<T>();

  fetch(url)
    .then((res) => res.json())
    .then((d) => {
      if (d) {
        setData(d as T);
      }
    });

  if (typeof data === "undefined") {
    throw new TypeError("data is undefined");
  } else if (!data) {
    throw new TypeError("data has a falsey value");
  } else {
    if (schema) {
      return schema.parse(data);
    } else {
      return data;
    }
  }
};

export { useFetchData };
