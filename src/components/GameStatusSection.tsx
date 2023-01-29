import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ExitToApp, Refresh } from "@mui/icons-material";
import { FC } from "react";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Cup } from "../assets/cup.svg";
import { ReactComponent as Battle } from "../assets/battleGame.svg";
import { useGame } from "../hooks/useGame";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useUpdateGameMutation, useDeleteGameMutation } from "../api/games";
import { INIT_BOARD } from "../constants";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../App";

export const GameStatusSection: FC = () => {
  const { status, turn, winner, player1, id } = useGame();
  const navigate = useNavigate();
  const { currentUserName } = useSelector((state: RootState) => state.app);
  const [updateGame] = useUpdateGameMutation();
  const [deleteGame] = useDeleteGameMutation();

  return (
    <Stack
      bgcolor="#363752"
      direction="row"
      width="100%"
      borderRadius="8px"
      p="6px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" alignItems="center">
        {status === "waiting" && (
          <>
            <Box p="4px" display="flex">
              <Clock />
            </Box>
            <Stack p="0 16px">
              <Typography fontWeight="bolder" fontSize="12px">
                status
              </Typography>
              <Typography fontWeight="bolder">
                {player1} Waiting for players
              </Typography>
            </Stack>
          </>
        )}
        {status === "starting" && (
          <>
            <Box p="4px" display="flex">
              {currentUserName === turn ? <Battle /> : <Clock />}
            </Box>
            <Stack p="0 16px">
              <Typography fontWeight="bolder" fontSize="12px">
                status
              </Typography>
              <Typography fontWeight="bolder">Play {turn}</Typography>
            </Stack>
          </>
        )}
        {status === "end" && (
          <>
            <Box p="4px" display="flex">
              {winner ? <Cup /> : <Battle />}
            </Box>
            <Stack p="0 16px">
              <Typography fontWeight="bolder" fontSize="12px">
                status
              </Typography>
              {winner ? (
                <Typography fontWeight="bolder">Win {winner}</Typography>
              ) : (
                <Typography fontWeight="bolder">Draw</Typography>
              )}
            </Stack>
          </>
        )}
      </Stack>
      <Stack direction="row">
        {status === "end" && (
          <IconButton
            onClick={() =>
              updateGame({
                id,
                status: "starting",
                board: INIT_BOARD,
                winner: "",
              })
            }
          >
            <Refresh color="primary" />
          </IconButton>
        )}
        <IconButton
          onClick={() => {
            if (currentUserName === player1) {
              deleteGame(id || "");
            }
            navigate(ROUTE_PATHS.Games, { replace: true });
          }}
        >
          <ExitToApp color="primary" />
        </IconButton>
      </Stack>
    </Stack>
  );
};
