import { FLEXPA_BASE_URL, FLEXPA_SECRET_KEY } from "../../config";
import axios from "axios";
import { prisma } from "../../database";

export async function authorizePatientHandler(publicToken: string) {
  let body = { public_token: publicToken, secret_key: FLEXPA_SECRET_KEY };
  const url = FLEXPA_BASE_URL + "link/exchange";
  try {
    const response = await axios.post(url, body);

    //Error in API response
    if (response.status != 200)
      throw new Error("Flexpa API Error - Response Error");

    const accessToken = response.data?.access_token;
    const endpointId = response.data?.endpoint?.id || "";
    const resources = response.data?.endpoint?.resources || [];

    if (!accessToken) throw new Error("Flexpa API Error - No Access Token");

    const patient = await prisma.patient.create({
      data: {
        accesstoken: accessToken,
        availableResource: resources,
        fhirId: endpointId,
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//Returns a list of all patients and their auth token. This should eventually be paginated.
export async function getAllPatients() {
  try {
    let patients = await prisma.patient.findMany();
    return patients;
  } catch (error) {
    console.log(error);
  }
}

//Query for the Flexpa auth token from patient Id, and ask flexpa for FHIR resource of the patient
export async function getFHIRResourceFromFlexpa(
  patient_id: number,
  resource: string
) {
  const patient = await prisma.patient.findFirst({
    where: { id: patient_id },
    select: { accesstoken: true, fhirId: true },
  });

  const fhirId = patient?.fhirId;

  const url = FLEXPA_BASE_URL + `fhir/${resource}`;

  const accesstoken = patient?.accesstoken;

  //Get FHIR resource from Flexpa
  const header = {
    "content-type": "application/json",
    Authorization: accesstoken,
    "x-flexpa-raw": "0",
  };

  try {
    const res = await axios.get(url, { headers: header });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
