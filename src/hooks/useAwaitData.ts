import { useEffect, useState } from "react";

export const useAwaitData = <T>(
  url: string,
  loadOnStart: boolean = true
): [boolean, T | null, string, () => void] => {
  const [loading, setLoading] = useState(true);
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

  const awaitData = () => {
    setLoading(true);

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        if (text.length === 0) {
          setError("Data is null");
        } else if (text === undefined) {
          setError("Data is undefined.");
        } else {
          setError("");
          setData(JSON.parse(text));
        }
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
