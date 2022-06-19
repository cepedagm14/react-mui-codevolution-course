import React from "react";
import { LinearProgress, Stack, CircularProgress } from "@mui/material";
const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60}/>
    </Stack>
  );
};

export default MuiProgress;
