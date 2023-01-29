import { Box, Grid, Paper } from "@mui/material";
import { FC } from "react";
import { ReactComponent as CrossGame } from "../assets/crossGame.svg";
import { ReactComponent as CircleGame } from "../assets/circleGame.svg";
import { useGame } from "../hooks/useGame";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useUpdateGameMutation } from "../api/games";
import {
  CROSS_LINE_POSITIONS,
  SHAPE_COLORS,
  WIN_COMBINATIONS,
} from "../constants";
import { getWinnerPredicate } from "../hooks/useWinnerEffect";

export const GameBoardSection: FC = () => {
  const {
    player1Shape,
    player2Shape,
    board,
    id,
    turn,
    player1,
    player2,
    status,
    winner,
  } = useGame();
  const { currentUserName } = useSelector((state: RootState) => state.app);
  const [updateGame] = useUpdateGameMutation();
  const crossLInePosition = WIN_COMBINATIONS.findIndex((winCombination) =>
    getWinnerPredicate(
      { board, turn, player1, player1Shape, player2Shape },
      winCombination
    )
  );

  return (
    <Box bgcolor="#363752" width="100%" p="12px" borderRadius="8px">
      <Grid container position="relative">
        {status === "end" && crossLInePosition !== -1 && (
          <Box
            bgcolor={
              SHAPE_COLORS[player1 === winner ? player1Shape : player2Shape]
            }
            width={CROSS_LINE_POSITIONS[crossLInePosition].width}
            height="10px"
            sx={{
              transform: CROSS_LINE_POSITIONS[crossLInePosition].transform,
            }}
            top={CROSS_LINE_POSITIONS[crossLInePosition].top}
            left={CROSS_LINE_POSITIONS[crossLInePosition].left}
            position="absolute"
          />
        )}
        {board?.map((shape, index) => (
          <Grid key={index} item xs={4} p="10px">
            <Paper
              sx={{
                "&:active": {
                  opacity: turn === currentUserName ? "0.8" : undefined,
                },
                cursor: turn === currentUserName ? "pointer" : undefined,
                height: "98px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
              onClick={() => {
                if (
                  turn === currentUserName &&
                  !board[index] &&
                  status === "starting"
                ) {
                  updateGame({
                    id,
                    turn: turn === player1 ? player2 : player1,
                    board:
                      board?.map((shape, boardIndex) =>
                        boardIndex === index
                          ? turn === player1
                            ? player1Shape
                            : player2Shape
                          : shape
                      ) || [],
                  });
                }
              }}
            >
              {shape === "x" && <CrossGame />}
              {shape === "o" && <CircleGame />}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
