import { Box, Typography, Stack, Button } from "@mui/material";
import { FC } from "react";

const arr = [
  {
    userName: "Alex",
  },
  {
    userName: "Geralt",
  },
  {
    userName: "Vlad",
  },
  {
    userName: "Kirill",
  },
  {
    userName: "Angela",
  },
  {
    userName: "Matt",
  },
  {
    userName: "Anya",
  },
  {
    userName: "Katya",
  },
];

export const Lobby: FC = () => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Typography color="white" variant="h3" fontFamily="cursive" m="8px auto">
        Tic Tak Toe
      </Typography>
      <Stack
        direction="column"
        gap="20px"
        m="auto"
        justifyContent="center"
        bgcolor="#363752"
        p="52px"
        borderRadius="8px"
      >
        <Typography variant="h5" color="white">
          Choose an opponent.
        </Typography>
        <Box>
          {/*{arr?.map((userName: string) => (*/}
          {/*  <Button>{userName}</Button>*/}
          {/*    ))}*/}
        </Box>
      </Stack>
    </Box>
  );
};
