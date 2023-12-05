import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExplanationOfBenefit } from "../api";
import { Code } from "@chakra-ui/react";

export default function PatientDetail(props: any) {
  const { id } = useParams();

  const [patient, setPatient] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      let patient = await getExplanationOfBenefit(parseInt(id ? id : ""));
      if (patient) setPatient(patient);
    };

    getData();
  }, []);

  return (
    <Code m={"2em"} p={"2em"}>
      {JSON.stringify(patient)}
    </Code>
  );
}
