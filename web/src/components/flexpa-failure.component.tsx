import React from "react";
import { Box, Center, Flex, Icon, chakra } from "@chakra-ui/react";

import { BsLightningFill } from "react-icons/bs";

export default function FlexpaFailure() {
  return (
    <Center>
      <Flex minW="450" p={50} alignItems="center" justifyContent="center">
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg="white.500"
          _dark={{ bg: "gray.800" }}
          rounded="lg"
          overflow="hidden"
        >
          <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
            <Icon as={BsLightningFill} color="white" boxSize={6} />
          </Flex>

          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color="red.500"
                _dark={{ color: "red.400" }}
                fontWeight="bold"
              >
                Error
              </chakra.span>
              <chakra.p
                color="gray.600"
                _dark={{ color: "gray.200" }}
                fontSize="sm"
              >
                Unable to connect. Please try to connect again.
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
}
