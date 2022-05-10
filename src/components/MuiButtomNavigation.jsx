import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, Person, Home } from "@mui/icons-material";
const MuiButtomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};

export default MuiButtomNavigation;
