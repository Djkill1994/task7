import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserName } from "../slices/app.slice";

export const LoginUser: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

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
          Enter your name please.
        </Typography>
        <TextField
          label="Name"
          onChange={({ target: { value } }) => setValue(value)}
        />
        <Button
          disabled={!value}
          variant="contained"
          onClick={() => dispatch(setCurrentUserName(value))}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
