import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExplanationOfBenefit } from "../api";
import { Button, Center, Code, Spinner, useToast } from "@chakra-ui/react";
import { ArrowBackIcon, RepeatIcon } from "@chakra-ui/icons";
const fhirReact = require("fhir-react");

export default function PatientDetail(props: any) {
  const { id } = useParams();

  const [patient, setPatient] = useState<any>();
  const [loading, setLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    const getData = async () => {
      let patient = await getExplanationOfBenefit(parseInt(id ? id : ""));

      if (patient) {
        setPatient(patient);
      } else {
        if (!toast.isActive("fhir-failure"))
          toast({
            id: "fhir-failure",
            title: "Could not find data",
            position: "top",
            description: "Could not load patient data from FHIR endpoint.",
            status: "error",
            isClosable: false,
          });
      }
      setLoading(false);
    };

    getData();
  }, []);

  const fhirResourceViewer = (resource: any, id: any) => {
    return (
      <Code mx={"2em"} my={"1em"} p={"1em"} key={id}>
        <fhirReact.FhirResource
          fhirResource={resource}
          fhirVersion={fhirReact.fhirVersions.R4}
          withCarinBBProfile
        ></fhirReact.FhirResource>
      </Code>
    );
  };

  if (loading) {
    return (
      <Center backdropBlur="6px" h="50rem">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      {!patient && (
        <Center backdropBlur="6px" h="50rem">
          <Button
            leftIcon={<ArrowBackIcon />}
            onClick={() => {
              window.history.back();
              toast.close("fhir-failure");
            }}
          >
            Go Back
          </Button>
          <Button
            mx="1em"
            rightIcon={<RepeatIcon />}
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh Page
          </Button>
        </Center>
      )}
      {patient && (
        <Button
          mx={"2em"}
          p={"1em"}
          color={"brand.400"}
          variant={"outline"}
          leftIcon={<ArrowBackIcon />}
          onClick={() => {
            window.history.back();
          }}
        >
          Go Back
        </Button>
      )}
      {patient?.entry.map((item: any, index: any) =>
        fhirResourceViewer(item.resource, index)
      )}
    </>
  );
}
