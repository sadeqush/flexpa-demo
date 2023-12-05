import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getPatients } from "../api";
import { Card, CardHeader, Code, HStack, Heading, Tag } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function PatientList() {
  const [patients, setPatients] = useState<any[]>();

  useEffect(() => {
    const getData = async () => {
      let patients = await getPatients();
      console.log(patients[0]);
      setPatients(patients);
    };

    getData();
  }, []);

  const navigate = useNavigate();

  const patientInfo = (patient: any) => {
    return (
      <Card m={"3em"} key={patient.id}>
        <CardHeader>
          <Heading size="xs">
            {dayjs(patient.CreatedDate).format("DD MMMM, YYYY hh:mm")}
          </Heading>
        </CardHeader>
        <Code p={"2em"}>{patient.accesstoken}</Code>
        <HStack spacing={4} m={"1em"} display={"inline-block"}>
          {patient.availableResource.map((resource: any) => (
            <Tag
              key={resource}
              size={"md"}
              m={"5px"}
              variant={
                resource === "ExplanationOfBenefit" ? "solid" : "outline"
              }
              onClick={() => {
                if (resource === "ExplanationOfBenefit") {
                  navigate(`/patients/${patient.id}`);
                }
              }}
              cursor={
                resource === "ExplanationOfBenefit" ? "pointer" : "default"
              }
              minWidth="fit-content"
              color={
                resource === "ExplanationOfBenefit" ? "white" : "brand.400"
              }
              bgColor={resource === "ExplanationOfBenefit" ? "brand.400" : ""}
            >
              {resource}
            </Tag>
          ))}
        </HStack>
      </Card>
    );
  };

  return <div>{patients && patients.map((p: any, key) => patientInfo(p))}</div>;
}
