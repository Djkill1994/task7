import { Box, Typography, Stack, IconButton } from "@mui/material";
import { FC } from "react";
import { ROUTE_PATHS } from "../App";
import { generatePath, useNavigate } from "react-router-dom";
import { useGetGamesQuery } from "../api/games";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AddBoxOutlined } from "@mui/icons-material";
import { CreateGameModal } from "./CreateGameModal";
import { useModal } from "../hooks/useModal";

export const Games: FC = () => {
  const { data } = useGetGamesQuery();
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
            {data?.map(({ id, title, created, player1, player2 }) => (
              <Stack
                sx={{
                  "&:hover": { cursor: "pointer" },
                  "&:active": { opacity: "0.8" },
                }}
                boxShadow="-5px -5px 21px #202135,
             5px 5px 21px #202135"
                p="6px"
                borderRadius="8px"
                key={id}
                onClick={() =>
                  navigate(generatePath(ROUTE_PATHS.Game, { gameId: id }), {
                    replace: true,
                  })
                }
              >
                <Typography>{title}</Typography>
                <Stack direction="row" gap="12px" alignItems="center">
                  <Typography color="#7321DB" fontSize="22px">
                    {player1}
                  </Typography>
                  vs
                  <Typography color="#FFAD11" fontSize="22px">
                    {player2}
                  </Typography>
                </Stack>
                <Typography fontSize="12px">{created}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
