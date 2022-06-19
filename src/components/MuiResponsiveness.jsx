import React from "react";
import { Box } from "@mui/system";
const MuiResponsiveness = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
        bgcolor: "blue",
      }}
    ></Box>
  );
};

export default MuiResponsiveness;
