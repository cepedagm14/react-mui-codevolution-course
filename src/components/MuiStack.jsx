import React from "react";
import { Stack, Box, Divider } from "@mui/material";
const MuiStack = () => {
  return (
    <Stack
      spacing={2}
      sx={{ border: "1px solid black" }}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        codevolution
      </Box>

      <Box
        display="flex"
        width="100px"
        height="100px"
        bgcolor="success.light"
        p={2}
      >
        codevolution
      </Box>
    </Stack>
  );
};

export default MuiStack;
