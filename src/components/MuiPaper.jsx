import React from "react";
import { Grid, Box, Paper } from "@mui/material";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MuiPaper = () => {
  return (
    <Grid container marginY={4} spacing={2}>
      {array.map((item) => (
        <Grid item xs={12} sm={2}>
          <Paper elevation={12} sx={{padding: 0.5}}>
            <Box bgcolor="primary.light" p={2} sx={{ height: "200px" }}>
              item 1
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MuiPaper;
