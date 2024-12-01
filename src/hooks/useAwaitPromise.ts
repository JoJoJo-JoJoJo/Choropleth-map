import { json } from "d3";
import { useEffect, useState } from "react";

export const useAwaitPromise = <T>(
  url: string,
  loadOnStart: boolean = true
): [boolean, Promise<T> | null, string, () => void] => {
  const [loading, setLoading] = useState(false);
  const [promise, setPromise] = useState<Promise<T> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (loadOnStart) {
      awaitPromise();
    }
  }, []);

  const request = () => {
    awaitPromise();
  };

  const awaitPromise = () => {
    setLoading(true);

    json(url)
      .then(() => setPromise)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return [loading, promise, error, request];
};
