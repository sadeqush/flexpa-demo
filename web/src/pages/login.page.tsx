import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth.util";
import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (isAuthenticated()) return <Navigate to="/dashboard" />;

  const ViewPassword = (props: {
    passwordVisible: boolean;
    setPasswordVisible: typeof setPasswordVisible;
  }) => {
    return (
      <InputRightElement
        cursor="pointer"
        onClick={() => setPasswordVisible(!passwordVisible)}
        children={
          passwordVisible ? (
            <ViewIcon color="gray.300" />
          ) : (
            <ViewOffIcon color="gray.300" />
          )
        }
      />
    );
  };

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
            <chakra.span display="block">Healthcare Provider?</chakra.span>
            <chakra.span
              display="block"
              color="brand.600"
              _dark={{ color: "gray.500" }}
            >
              Login to your account.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Center my={20}>
              <Stack spacing={4} minW="450">
                <FormControl id="username">
                  <FormLabel>Username</FormLabel>
                  <Input type="username" placeholder="admin" />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="password"
                      type={passwordVisible ? "text" : "password"}
                    />
                    <ViewPassword
                      passwordVisible={passwordVisible}
                      setPasswordVisible={setPasswordVisible}
                    />
                  </InputGroup>
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>

                <Button color="brand.500" variant={"solid"} type="submit">
                  Login
                </Button>
              </Stack>
            </Center>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};
