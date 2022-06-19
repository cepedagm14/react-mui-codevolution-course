import React from "react";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

const Stylebox = styled(Box)(({theme}) =>({
    height:'250px',
    width:'250px',
    backgroundColor: theme.status.danger
}))

const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          bgcolor: "secondary.main",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
        }}
      >
        Bg Color
      </Box>

      <Stylebox>
        
      </Stylebox>
    </>
  );
};

export default MuiResponsiveness;
