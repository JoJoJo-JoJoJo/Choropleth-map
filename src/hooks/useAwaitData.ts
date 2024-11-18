import { useEffect, useState } from "react";

export const useAwaitData = <T>(
  url: string,
  initState: T,
  loadOnStart: boolean = true,
): [boolean, T, string, () => void] => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>(initState);
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
        const fullRes: T = JSON.parse(res.toString());
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
