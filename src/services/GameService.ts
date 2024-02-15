import useData from "../hooks/useData";
import { Platform } from "./PlatformService";

export interface Game {
  id: number;
  name: string;
  slug: string;
  metacritic: number;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
}

export const defaultGames = (index: number) => {
  return {
    id: index,
    name: "Some dummy game name",
    slug: "game_" + index,
    background_image: "default-image-url",
    metacritic: 10,
    parent_platforms: [
      {
        platform: {
          id: index,
          slug: "platform_" + index,
          name: "Some dummy platform name",
        },
      },
    ],
  };
};

export interface GamesQuery {
  genres?: string;
  platform?: string;
  search?: string;
  ordering?: string;
}

const useGames = (query?: GamesQuery) => useData<Game>("/games", query);

export default useGames;
