import { z } from "zod";

export const env = z
  .object({
    PORT: z.coerce.number().default(3004),
    MONGO_URI: z.string().default("mongodb://127.0.0.1:27017"),
    MONGO_DB_NAME: z.string().default("urlshortener"),
  })
  .parse(process.env);
