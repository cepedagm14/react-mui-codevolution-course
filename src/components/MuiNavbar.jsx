import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokemonAPP
        </Typography>
        <Stack spacing={2} direction="row">
          <Button color="inherit">FEATURES</Button>
          <Button color="inherit">PRICING</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">MORE</Button>
          <Button color="inherit">LOGIN</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
