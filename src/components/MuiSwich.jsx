import React, { useState } from "react";
import { Box, Switch, FormControlLabel } from "@mui/material";
import { SettingsCellTwoTone } from "@mui/icons-material";
const MuiSwich = () => {
  const [mode, setMode] = useState(false);
  console.log("mode", mode);

  const handleChangeMode = (e) => {
    setMode(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={mode} onChange={handleChangeMode} />}
      />
    </Box>
  );
};

export default MuiSwich;
