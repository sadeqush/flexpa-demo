import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdContactEmergency, MdHome } from "react-icons/md";
import { LockIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { isAuthenticated } from "../utils/auth.util";
import { Navigate } from "react-router-dom";

export default function Dashboard(props: any) {
  if (!isAuthenticated()) return <Navigate to="/login" />;

  async function handleLogout() {
    window.localStorage.removeItem("jwt");
    window.location.reload();
  }

  return (
    <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        minWidth={"max-content"}
        px="4"
        bg="white"
        _dark={{ bg: "gray.800" }}
        borderBottomWidth="1px"
        color="inherit"
        h="14"
      >
        <Button
          variant="outline"
          color="brand.600"
          leftIcon={<LockIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>

      <Box as="main" p="4">
        {props.children}
      </Box>
    </Box>
  );
}
