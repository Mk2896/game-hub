import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../services/PlatformService";

interface FilterByPlatform {
  selectFilter: (filter?: Platform) => void;
  selectedFilter?: Platform;
  platforms: Platform[];
}
export default function FilterByPlatform({
  selectFilter,
  selectedFilter,
  platforms,
}: FilterByPlatform) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedFilter?.name ?? "Select Platform"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => selectFilter()} key={0} value={""}>
          Select Platform
        </MenuItem>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => selectFilter(platform)}
            key={platform.id}
            value={platform.slug}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
