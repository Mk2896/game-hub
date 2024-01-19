import { Icon, Switch, useColorMode } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa";

interface IconStyleType {
  switchValue: 1 | 0;
  icon: IconType;
  iconSize: number;
  color: string;
}

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconStyle: IconStyleType =
    colorMode === "light"
      ? {
          switchValue: 1,
          icon: FaSun,
          iconSize: 6,
          color: "orange",
        }
      : {
          switchValue: 0,
          icon: FaMoon,
          iconSize: 4,
          color: "yellow",
        };
  return (
    <>
      <Switch
        colorScheme="orange"
        value={iconStyle.switchValue}
        onChange={toggleColorMode}
      />
      <Icon
        as={iconStyle.icon}
        boxSize={iconStyle.iconSize}
        color={iconStyle.color}
      />
    </>
  );
}
