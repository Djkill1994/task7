import { Box, Typography, Stack, IconButton } from "@mui/material";
import { FC } from "react";
import { ROUTE_PATHS } from "../App";
import { generatePath, useNavigate } from "react-router-dom";
import { useGetGamesQuery, useUpdateGameMutation } from "../api/games";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AddBoxOutlined } from "@mui/icons-material";
import { CreateGameModal } from "./CreateGameModal";
import { useModal } from "../hooks/useModal";
import { ReactComponent as Battle } from "../assets/battle.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Cup } from "../assets/cup.svg";
import { SHAPE_COLORS } from "../constants";

export const Games: FC = () => {
  const { data } = useGetGamesQuery();
  const [updateGame] = useUpdateGameMutation();
  const navigate = useNavigate();
  const { isOpened, open, close } = useModal();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Typography variant="h3" fontFamily="cursive" m="8px auto">
        Tic Tak Toe
      </Typography>
      <Stack m="auto" gap="12px" minWidth="340px">
        <Stack
          direction="row"
          bgcolor="#363752"
          p="12px 8px"
          gap="22px"
          borderRadius="8px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontFamily="cursive" fontSize="18px">
            Hello {currentUserName}
          </Typography>
          {isOpened && <CreateGameModal onClose={close} />}
          <IconButton onClick={() => open()} size="large" color="primary">
            <AddBoxOutlined />
          </IconButton>
        </Stack>
        <Stack
          bgcolor="#363752"
          p="22px"
          borderRadius="8px"
          gap="16px"
          maxHeight="400px"
          overflow="auto"
        >
          <Typography fontFamily="cursive" fontSize="22px">
            Join game or create one.
          </Typography>
          <Stack gap="12px">
            {data?.map(
              ({
                id,
                title,
                created,
                player1,
                player2,
                status,
                player1Shape,
                player2Shape,
                winner,
              }) => (
                <Stack
                  sx={{
                    "&:active": { opacity: "0.3" },
                    cursor: "pointer",
                  }}
                  boxShadow="-1px -1px 2px white,
             1px 2px 1px white"
                  p="6px"
                  gap="8px"
                  borderRadius="8px"
                  key={id}
                  onClick={() => {
                    if (!player2 && currentUserName !== player1) {
                      updateGame({
                        id,
                        player2: currentUserName,
                      });
                    }
                    navigate(generatePath(ROUTE_PATHS.Game, { gameId: id }), {
                      replace: true,
                    });
                  }}
                >
                  <Typography>{title}</Typography>
                  <Stack
                    direction="row"
                    gap="16px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {status === "waiting" && (
                      <>
                        <Typography fontSize="22px">{player1}</Typography>
                        <Box>
                          <Battle />
                        </Box>
                        <Typography color="#FFAD11" fontSize="22px">
                          <Box p="4px" display="flex">
                            <Clock />
                          </Box>
                        </Typography>
                      </>
                    )}
                    {status === "starting" && (
                      <>
                        <Typography
                          color={SHAPE_COLORS[player1Shape]}
                          fontSize="22px"
                        >
                          {player1}
                        </Typography>
                        <Box>
                          <Battle />
                        </Box>
                        <Typography
                          color={SHAPE_COLORS[player2Shape]}
                          fontSize="22px"
                        >
                          {player2}
                        </Typography>
                      </>
                    )}
                    {status === "end" && (
                      <>
                        {winner ? (
                          <>
                            <Cup />
                            <Typography
                              color={
                                SHAPE_COLORS[
                                  player1 === winner
                                    ? player1Shape
                                    : player2Shape
                                ]
                              }
                              fontSize="22px"
                            >
                              {winner}
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Typography
                              color={SHAPE_COLORS[player1Shape]}
                              fontSize="22px"
                            >
                              {player1}
                            </Typography>
                            <Box>Draw</Box>
                            <Typography
                              color={SHAPE_COLORS[player2Shape]}
                              fontSize="22px"
                            >
                              {player2}
                            </Typography>
                          </>
                        )}
                      </>
                    )}
                  </Stack>
                  <Stack direction="row-reverse">
                    <Typography fontSize="10px" color="gray">
                      {created}
                    </Typography>
                  </Stack>
                </Stack>
              )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
