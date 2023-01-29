import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ReactComponent as Circle } from "../assets/circle.svg";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { useGame } from "../hooks/useGame";
import { SHAPE_COLORS } from "../constants";

export const GameInfoSection: FC = () => {
  const { player1Shape, player2Shape, player1, player2 } = useGame();

  return (
    <Box
      borderRadius="8px"
      overflow="hidden"
      bgcolor="white"
      width="100%"
      display="flex"
      justifyContent="space-between"
    >
      <Stack direction="row" borderRight="1px solid #dbdbdb" width="100%">
        <Box bgcolor={SHAPE_COLORS[player1Shape]} p="12px" display="flex">
          {player1Shape === "o" ? <Circle /> : <Cross />}
        </Box>
        <Stack p="5px 8px">
          <Typography fontSize="10px" color="black">
            Player 1
          </Typography>
          <Typography
            fontWeight="bold"
            fontSize="18px"
            color={SHAPE_COLORS[player1Shape]}
          >
            {player1}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row-reverse"
        borderLeft="1px solid #dbdbdb"
        width="100%"
      >
        <Box bgcolor={SHAPE_COLORS[player2Shape]} p="12px" display="flex">
          {player2Shape === "o" ? <Circle /> : <Cross />}
        </Box>
        <Stack p="5px 8px">
          <Typography fontSize="10px" color="black">
            Player 2
          </Typography>
          <Typography
            fontWeight="bold"
            fontSize="18px"
            color={SHAPE_COLORS[player2Shape]}
          >
            {player2}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
