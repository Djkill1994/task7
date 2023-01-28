import { Box, Grid, Paper } from "@mui/material";
import { FC, useState } from "react";
import { ReactComponent as CrossGame } from "../assets/crossGame.svg";
import { ReactComponent as CircleGame } from "../assets/circleGame.svg";

export const GameBoardSection: FC = () => {
  // const { currentUserName } = useSelector((state: RootState) => state.app);

  return (
    <Box bgcolor="#363752" width="100%" p="12px" borderRadius="8px">
      <Grid container>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <Grid key={index} item xs={4} p="10px">
              <Paper
                sx={{
                  "&:hover": { cursor: "pointer" },
                  "&:active": { opacity: "0.8" },
                  height: "98px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
                // onClick={}
              >
                {/*{shape === index ? <CrossGame /> : null}*/}
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
