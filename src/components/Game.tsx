import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { ReactComponent as Cup } from "../assets/cup.svg";
import { ReactComponent as CrossGame } from "../assets/crossGame.svg";
import { ReactComponent as CircleGame } from "../assets/circleGame.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { ReactComponent as Circle } from "../assets/circle.svg";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { FC } from "react";

export const Game: FC = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      gap="16px"
      maxWidth="380px"
      m="auto"
    >
      <Typography color="white" variant="h3" fontFamily="cursive">
        Tic Tak Toe
      </Typography>
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
          <Typography color="white" fontWeight="bolder" fontSize="12px">
            status
          </Typography>
          <Typography color="white" fontWeight="bolder">
            Play player || Win player
          </Typography>
        </Stack>
      </Stack>
      <Box bgcolor="#363752" width="100%" p="12px" borderRadius="8px">
        <Grid container>
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <Grid key={index} item xs={4} p="10px">
                <Paper
                  sx={{
                    height: "98px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <CrossGame />
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
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
            <Typography fontSize="10px">Player 1</Typography>
            <Typography fontWeight="bold" fontSize="18px" color="#7321DB">
              Name
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
            <Typography fontSize="10px">Player 2</Typography>
            <Typography fontWeight="bold" fontSize="18px" color="#FFAD11">
              Name
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
