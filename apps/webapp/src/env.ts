import { z } from "zod";

const envSchema = z.object({
  VITE_PUBLIC_API_URL: z.string().min(1),
  PROD: z.boolean(),
});

export const env = envSchema.parse(import.meta.env);
