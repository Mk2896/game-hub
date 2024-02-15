import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo_game_hub.png";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface NavbarProps {
  onSearchChange: (query: string) => void;
}
export default function Navbar({ onSearchChange }: NavbarProps) {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize={"70px"} />
      <SearchInput onSearchChange={onSearchChange} />
      <ThemeSwitch />
    </HStack>
  );
}
