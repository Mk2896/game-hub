import { Heading, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames, { GamesQuery, defaultGames } from "../services/GameService";
import SortGameMenu from "./SortGameMenu";
import FilterByPlatform from "./FilterByPlatform";
import usePlatforms from "../services/PlatformService";

interface ListGamesProps {
  query: GamesQuery;
  selectPlatform: (platforms?: string) => void;
  selectOrder: (ordering: string) => void;
}

export default function ListGames({
  query,
  selectPlatform,
  selectOrder,
}: ListGamesProps) {

  const { data: platforms, isLoading: isLoadingPlatform } = usePlatforms();
  const { data: games, isLoading } = useGames(query);

  return (
    <>
      <Heading>
      {platforms.find((platform) => platform.id.toString() === query.parent_platforms)?.name} {query?.genres} Games
      </Heading>
      <SortGameMenu selectOrder={selectOrder} selectedOrder={query.ordering} />
      {
        !isLoadingPlatform ?
          <FilterByPlatform selectFilter={selectPlatform} selectedFilter={query.parent_platforms} platforms={platforms} /> : null
      }
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={4}>
        {(!isLoading
          ? games
          : Array.from({ length: 25 }).map((_, i) => defaultGames(i))
        ).map((game) => (
          <GameCard key={game.id} game={game} isLoading={isLoading} />
        ))}
      </SimpleGrid>
    </>
  );
}
