import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { Game } from "../services/GameService";
import cropImages from "../services/crop-images";
import {
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneAndroid, MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import CriticsScore from "./CriticsScore";

interface GameCardProps {
  game: Game;
  isLoading: boolean;
}

const platformMapping: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  nintendo: SiNintendo,
  android: MdPhoneAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};
export default function GameCard({ game, isLoading }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton isLoaded={!isLoading}>
        <Box
          height={250}
          bgImg={cropImages(game.background_image)}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center top"}
        ></Box>
      </Skeleton>
      <CardBody>
        <SkeletonText isLoaded={!isLoading}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </SkeletonText>
        <HStack justifyContent={"space-between"}>
          {isLoading && (
            <SkeletonCircle
              float="left"
              isLoaded={!isLoading}
              marginTop={3}
            ></SkeletonCircle>
          )}
          <Box>
            {!isLoading &&
              game.parent_platforms.map(({ platform }) => (
                <Icon
                  key={platform.id}
                  as={platformMapping[platform.slug]}
                  marginRight={3}
                  marginTop={3}
                />
              ))}
          </Box>
          {!isLoading && <CriticsScore score={game.metacritic} />}
        </HStack>
      </CardBody>
    </Card>
  );
}
