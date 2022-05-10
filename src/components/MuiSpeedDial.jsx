import React from "react";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { CopyAll, FileCopy, Print, Share, Edit } from "@mui/icons-material";
const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
        
      <SpeedDialAction icon={<FileCopy />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Print />} tooltipTitle="print" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
