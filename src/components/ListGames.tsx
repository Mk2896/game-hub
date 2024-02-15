import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import getGames, { GamesQuery, defaultGames } from "../services/GameService";
import SortGameMenu from "./SortGameMenu";

interface ListGamesProps {
  query: GamesQuery;
  selectPlatform: (platform: string) => void;
  selectOrder: (ordering: string) => void;
}

export default function ListGames({
  query,
  selectPlatform,
  selectOrder,
}: ListGamesProps) {
  const { data: games, isLoading } = getGames(query);

  return (
    <>
      <Heading>
        {query?.platform} {query?.genres} Games
      </Heading>
      <SortGameMenu selectOrder={selectOrder} selectedOrder={query.ordering} />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={4}>
        {(Array.isArray(games) && games.length > 0
          ? games
          : Array.from({ length: 25 }).map((_, i) => defaultGames(i))
        ).map((game) => (
          <GameCard key={game.id} game={game} isLoading={isLoading} />
        ))}
      </SimpleGrid>
    </>
  );
}
