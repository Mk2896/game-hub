import {
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import logo from "../assets/logo_game_hub.png";
import { FaSearch } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize={"70px"} />
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <FaSearch />
        </InputLeftElement>
        <Input borderRadius={50} placeholder="Search Games.." />
      </InputGroup>
      <ThemeSwitch />
    </HStack>
  );
}
