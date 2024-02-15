import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  onSearchChange: (query: string) => void;
}

export default function SearchInput({ onSearchChange }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) onSearchChange(inputRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <FaSearch />
        </InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius={50}
          placeholder="Search Games.."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
