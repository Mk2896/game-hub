import getGenres, { defaultGenre } from "../services/GenreService";
import {
  Badge,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import cropImages from "../services/crop-images";

interface ListGenresProps {
  selectGenre: (genres: string) => void;
  selectedGenre?: string;
}
export default function ListGenres({
  selectGenre,
  selectedGenre,
}: ListGenresProps) {
  const { data: genres, errors, isLoading } = getGenres();

  return (
    <>
      <Heading size={"lg"} marginBottom={5}>
        Genres
      </Heading>

      {!errors && (
        <List>
          {(Array.isArray(genres) && genres.length > 0
            ? genres
            : Array.from({ length: 15 }).map((_, i) => defaultGenre(i))
          ).map((genre) => (
            <ListItem key={genre.id} paddingBottom={3}>
              <HStack>
                <Skeleton isLoaded={!isLoading}>
                  <Image
                    src={cropImages(genre.image_background)}
                    boxSize={8}
                    borderRadius={5}
                    objectFit={"cover"}
                  />
                </Skeleton>
                <SkeletonText noOfLines={2} isLoaded={!isLoading}>
                  <Text
                    fontSize="lg"
                    as={
                      selectedGenre && selectedGenre === genre.slug
                        ? "b"
                        : "u"
                    }
                    cursor="pointer"
                    onClick={() => selectGenre(genre.slug)}
                  >
                    {genre.name}
                  </Text>
                </SkeletonText>
                <Skeleton isLoaded={!isLoading}>
                  <Badge colorScheme="yellow" borderRadius={3}>
                    {genre.games_count}
                  </Badge>
                </Skeleton>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}
