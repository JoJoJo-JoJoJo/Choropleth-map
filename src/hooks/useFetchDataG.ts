import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchDataG = <T>(url: string) => {
  return useSuspenseQuery({
    queryKey: [url],
    queryFn: async (): Promise<T> => {
      const res = await fetch(url);
      const json = res.json();
      return json;
    },
  });
};
