import useData from "../hooks/useData";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export const defaultGenre = (index: number) => {
  return {
    id: index,
    name: "Some dummy genre name",
    slug: "slug_" + index,
    image_background: "default-image-url",
    games_count: 10,
  };
};

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
