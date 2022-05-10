import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";

const MuiMenu = () => {
  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);

  const handleClick = (e) => {
    setMenu(e.currentTarget);
  };

  const handleClose = (e) => {
    setMenu(null);
  };

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
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            RESOURCE
          </Button>
          <Button color="inherit">LOGIN</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={menu}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "button",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MenuItem>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiMenu;
