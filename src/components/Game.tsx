import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { GameStatusSection } from "./GameStatusSection";
import { GameBoardSection } from "./GameBoardSection";
import { GameInfoSection } from "./GameInfoSection";
import { useWinnerEffect } from "../hooks/useWinnerEffect";
import { UseInitGameEffect } from "../hooks/useInitGameEffect";
import { useGame } from "../hooks/useGame";

export const Game: FC = () => {
  const { status } = useGame();

  useWinnerEffect();
  UseInitGameEffect();

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
      {status !== "waiting" && <GameInfoSection />}
    </Stack>
  );
};
