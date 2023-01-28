import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ReactComponent as Circle } from "../assets/circle.svg";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const GameInfoSection: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);

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
        <Box bgcolor="#7321DB" p="12px" display="flex">
          <Cross />
        </Box>
        <Stack p="5px 8px">
          <Typography fontSize="10px" color="black">
            Player 1
          </Typography>
          <Typography fontWeight="bold" fontSize="18px" color="#7321DB">
            {currentUserName}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row-reverse"
        borderLeft="1px solid #dbdbdb"
        width="100%"
      >
        <Box bgcolor="#FFAD11" p="12px" display="flex">
          <Circle />
        </Box>
        <Stack p="5px 8px">
          <Typography fontSize="10px" color="black">
            Player 2
          </Typography>
          <Typography fontWeight="bold" fontSize="18px" color="#FFAD11">
            Name
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
