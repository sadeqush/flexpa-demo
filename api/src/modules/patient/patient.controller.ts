import { Request, Response } from "express";
import { authorizePatientBody, getFHIRResourceBody } from "./patient.schema";
import {
  authorizePatientHandler,
  getAllPatients,
  getFHIRResourceFromFlexpa,
} from "./patient.service";

export async function authorizePatient(
  req: Request<{}, {}, authorizePatientBody>,
  res: Response
) {
  const publicToken = req.body.public_token;
  try {
    const authrized = await authorizePatientHandler(publicToken);
    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, message: "Server error when processing request" });
  }
}

export async function getPatients(req: Request<{}, {}, {}>, res: Response) {
  const patients = await getAllPatients();
  return res.status(200).json({ success: true, data: patients });
}

export async function getFHIRResource(
  req: Request<{}, {}, getFHIRResourceBody>,
  res: Response
) {
  try {
    const data = await getFHIRResourceFromFlexpa(
      parseInt(req.body.patient_id),
      req.body.requested_resource
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: 500, message: "Error when processing request" });
  }
}
