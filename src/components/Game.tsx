import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { GameStatusSection } from "./GameStatusSection";
import { GameBoardSection } from "./GameBoardSection";
import { GameInfoSection } from "./GameInfoSection";
import { useGetGameQuery } from "../api/games";
import { useParams } from "react-router-dom";

export const Game: FC = () => {
  const { gameId } = useParams();
  const { data } = useGetGameQuery(gameId || "", { skip: !gameId });

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      gap="16px"
      maxWidth="380px"
      m="auto"
    >
      <Typography variant="h3" fontFamily="cursive">
        Tic Tak Toe
      </Typography>
      <GameStatusSection />
      <GameBoardSection />
      <GameInfoSection />
    </Stack>
  );
};
