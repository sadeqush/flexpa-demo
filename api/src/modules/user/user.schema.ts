import { z } from "zod";

export const loginSchema = z.object({
  body: z
    .object({
      username: z.string(),
      password: z.string(),
    })
    .strict(),
});

export type LoginBody = z.infer<typeof loginSchema>["body"];
