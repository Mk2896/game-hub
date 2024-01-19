import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Aside from "./Aside";

export default function GameHubMain() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bgColor={"blue"}>
          <Aside></Aside>
        </GridItem>
      </Show>
      <GridItem area={"main"} bgColor={"yellow"}>
        Main
      </GridItem>
    </Grid>
  );
}
