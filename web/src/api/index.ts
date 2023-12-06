import axios from "axios";
import { BACKEND_URL } from "../config";

const baseurl = BACKEND_URL;

export async function authorizePatientAPI(pToken: string) {
  const url = baseurl.concat("authorize-patient");
  let body = {
    public_token: pToken,
  };

  try {
    const res = await axios.post(url, body);
    if (res.status === 200) return true;
  } catch (e) {
    console.log(e);
  }

  return false;
}

export async function loginUser(username: string, password: string) {
  const url = baseurl.concat("login");
  let body = {
    username: username,
    password: password,
  };

  try {
    const res = await axios.post(url, body);
    return res.data.jwt;
  } catch (e) {
    return false;
  }
}

export async function getPatients() {
  const url = baseurl.concat("patients");
  const config = {
    headers: { Authorization: `Bearer ${window.localStorage.getItem("jwt")}` },
  };

  try {
    const res = await axios.get(url, config);
    return res.data.data;
  } catch (e) {
    return false;
  }
}

export async function getExplanationOfBenefit(patientId: number) {
  if (!patientId) return false;

  const url = baseurl.concat("patient/fhir");
  const config = {
    headers: { Authorization: `Bearer ${window.localStorage.getItem("jwt")}` },
  };
  let body = {
    patient_id: patientId,
    requested_resource: "ExplanationOfBenefit",
  };

  try {
    const res = await axios.post(url, body, config);
    return res.data;
  } catch (e) {
    return false;
  }
}
