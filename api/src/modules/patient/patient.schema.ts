import { z } from "zod";

export const authrorizePatientSchema = z.object({
  body: z
    .object({
      public_token: z.string(),
    })
    .strict(),
});

export const getFHIRResourceSchema = z.object({
  body: z
    .object({
      patient_id: z.string(),
      requested_resource: z.string(),
    })
    .strict(),
});

export type authorizePatientBody = z.infer<
  typeof authrorizePatientSchema
>["body"];

export type getFHIRResourceBody = z.infer<typeof getFHIRResourceSchema>["body"];
