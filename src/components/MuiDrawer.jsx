import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";

const MuiDrawer = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setDrawer(true)}
      >
        <MenuOpen />
      </IconButton>
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
