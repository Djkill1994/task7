import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUserName } from "../slice/app.slice";

export const LoginUser: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <Box height="100%" display="flex">
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
          sx={{
            backgroundColor: "#7321DB",
            color: "white",
            "&:hover": { opacity: 0.7, backgroundColor: "#7321DB" },
            "&:disabled": {
              opacity: 0.4,
              backgroundColor: "#7321DB",
              color: "white",
            },
          }}
          disabled={!value}
          variant="text"
          onClick={() => dispatch(setCurrentUserName(value))}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
