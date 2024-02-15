import { Badge } from "@chakra-ui/react";

export default function CriticsScore({ score }: { score: number }) {
  const color = score > 85 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      borderRadius={"4px"}
      paddingX={2}
    >
      {score}
    </Badge>
  );
}
