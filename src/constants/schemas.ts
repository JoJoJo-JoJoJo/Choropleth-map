import { z } from "zod";

const eduSchema = z.object({
  fips: z.number(),
  state: z.string(),
  area_name: z.string(),
  bachelorsOrHigher: z.number(),
});

export { eduSchema };
