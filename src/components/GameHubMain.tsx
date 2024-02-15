import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Navbar";
import ListGenres from "./ListGenres";
import ListGames from "./ListGames";
import { useState } from "react";
import { GamesQuery } from "../services/GameService";

export default function GameHubMain() {
  const [gameQuery, setGameQuery] = useState<GamesQuery>({});

  const selectGenre = (genres: string) => {
    setGameQuery({ ...gameQuery, genres });
  };

  const selectPlatform = (platform?: string) => {
    setGameQuery({ ...gameQuery, parent_platforms: platform });
  };

  const selectOrder = (ordering: string) => {
    setGameQuery({ ...gameQuery, ordering });
  };

  const onSearchChange = (search: string) => {
    setGameQuery({ ...gameQuery, search });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area={"nav"} marginBottom={10}>
        <Navbar onSearchChange={onSearchChange}></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <ListGenres
            selectGenre={selectGenre}
            selectedGenre={gameQuery.genres}
          ></ListGenres>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <ListGames
          query={gameQuery}
          selectPlatform={selectPlatform}
          selectOrder={selectOrder}
        />
      </GridItem>
    </Grid>
  );
}
