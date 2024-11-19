import { useEffect, useState } from "react";

export const useAwaitData = <T>(
  url: string,
  loadOnStart: boolean = true
): [boolean, T | null, string, () => void] => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loadOnStart) {
      awaitData();
    } else {
      setLoading(false);
    }
  }, []);

  const request = () => {
    awaitData();
  };

  const awaitData = async () => {
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        } else {
          return res.json();
        }
      })
      .then((d) => {
        const fullRes: T = JSON.parse(d.toString());
        if (fullRes === null) {
          setError("Data is null");
        } else if (fullRes === undefined) {
          setError("Data is undefined.");
        }

        setError("");
        setData(fullRes);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [loading, data, error, request];
};
