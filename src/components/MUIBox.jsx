import React from "react";
import { Box } from "@mui/material";

const MUIBox = () => {
  return (
    <>
      {/* <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          padding: "16px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        codevolution
      </Box> */}
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

      <Box display="flex" width="100px" height="100px" bgcolor="success.light" p={2}>
        codevolution
      </Box>
    </>
  );
};

export default MUIBox;
