import { Box, Grid, Stack, Typography } from "@mui/material";

export const Game = () => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100%" gap="16px">
      <Typography color="white" variant="h4">
        tic tak toe
      </Typography>
      <Stack bgcolor="#363752" direction="row">
        <Box>Icon</Box>
        <Stack>
          <Typography>status</Typography>
          <Typography>Play player || Win player</Typography>
        </Stack>
      </Stack>
      <Box bgcolor="#363752">
        <Grid container spacing={4} bgcolor="#363752" p="16px">
          <Grid item xs={4}>
            1
          </Grid>
          <Grid item xs={4}>
            2
          </Grid>
          <Grid item xs={4}>
            3
          </Grid>
          <Grid item xs={4}>
            4
          </Grid>
          <Grid item xs={4}>
            5
          </Grid>
          <Grid item xs={4}>
            6
          </Grid>
          <Grid item xs={4}>
            7
          </Grid>
          <Grid item xs={4}>
            8
          </Grid>
          <Grid item xs={4}>
            9
          </Grid>
        </Grid>
      </Box>
      <Stack bgcolor="#363752">Info Panel</Stack>
    </Stack>
  );
};
