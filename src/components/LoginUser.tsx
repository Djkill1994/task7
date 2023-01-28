import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserName } from "../slices/app.slice";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../App";

export const LoginUser: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Typography variant="h3" fontFamily="cursive" m="8px auto">
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
        <Typography variant="h5" fontFamily="cursive">
          Enter your name please.
        </Typography>
        <TextField
          label="Name"
          onChange={({ target: { value } }) => setValue(value)}
        />
        <Button
          disabled={!value}
          variant="contained"
          onClick={() => {
            dispatch(setCurrentUserName(value));
            navigate(ROUTE_PATHS.Games, { replace: true });
          }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
