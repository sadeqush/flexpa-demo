import { useEffect } from "react";
import { FLEXPA_PUBLISHABLE_KEY } from "../config";
import { chakra, Box, Stack, Flex, Button, Divider } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";

declare const FlexpaLink: {
  create: (config: any) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

export const AuthorizePatientPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    FlexpaLink.create({
      publishableKey: FLEXPA_PUBLISHABLE_KEY,
      onSuccess: async (publicToken: string) => {
        //Call backend API with publicToken
      },
    });
  }, []);

  function connectButtonOnClickListener() {
    FlexpaLink.open();
  }

  function healthcareProviderButtonOnClickListener() {
    navigate("/login");
  }

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex justify="center" bg="white" _dark={{ bg: "gray.800" }} w="full">
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{ color: "gray.100" }}
            mb={6}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color="brand.600"
              _dark={{ color: "gray.500" }}
            >
              Get started today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" my={5}>
              <Button
                onClick={() => connectButtonOnClickListener()}
                color="brand.500"
                variant="solid"
                w={400}
                leftIcon={<LockIcon />}
              >
                Connect your Health Insurance
              </Button>
            </Box>
          </Stack>
          <Divider />

          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" my={5}>
              <Button
                color="brand.400"
                w={400}
                variant="outline"
                onClick={() => {
                  healthcareProviderButtonOnClickListener();
                }}
              >
                I am a Healthcare Provider
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
