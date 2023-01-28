import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Cup } from "../assets/cup.svg";

export const GameStatusSection: FC = () => {
  return (
    <Stack
      bgcolor="#363752"
      direction="row"
      width="100%"
      borderRadius="8px"
      p="6px"
    >
      <Box p="4px" display="flex">
        {<Cup /> || <Clock />}
      </Box>
      <Stack p="0 16px">
        <Typography fontWeight="bolder" fontSize="12px">
          status
        </Typography>
        <Typography fontWeight="bolder">Play player || Win player</Typography>
      </Stack>
    </Stack>
  );
};
