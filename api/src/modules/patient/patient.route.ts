import { Router } from "express";
import {
  authorizePatient,
  getFHIRResource,
  getPatients,
} from "./patient.controller";
import { authrorizePatientSchema } from "./patient.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authenticate } from "../../middlewares/auth.middleware";

export const PatientRoute = Router();
PatientRoute.post(
  "/authorize-patient",
  validate(authrorizePatientSchema),
  authorizePatient
);

PatientRoute.get("/patients", authenticate, getPatients);

PatientRoute.post("/patient/fhir", authenticate, getFHIRResource);
