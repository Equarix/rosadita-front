import z from "zod";

const EnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.url(),
});

export type Env = z.infer<typeof EnvSchema>;

export const env: Env = EnvSchema.parse(process.env);
