import React from "react";
import { Grid, Box } from "@mui/material";
const MuiGrid = () => {
  return (
    <Grid container marginY={4} spacing={1}>
      <Grid item xs={12} sm={2} >
        <Box bgcolor="primary.light" p={2} sx={{height: "200px"}}>
          item 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box bgcolor="primary.light" p={2} sx={{height: "200px"}}>
          item 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box bgcolor="primary.light" p={2} sx={{height: "200px"}}>
          item 3
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box bgcolor="primary.light" p={2} sx={{height: "200px"}}>
          item 4
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box bgcolor="primary.light" p={2} sx={{height: "200px"}}>
          item 5
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box bgcolor="primary.light" p={2} sx={{height: "200px"}}>
          item 6
        </Box>
      </Grid>
    </Grid>
  );
};

export default MuiGrid;
