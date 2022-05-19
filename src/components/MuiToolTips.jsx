import React, { useState } from "react";
import { Tooltip, IconButton, Stack, Box } from "@mui/material";
import { Delete } from "@mui/icons-material";

const MuiToolTips = () => {
  return (
    <Stack spacing={2} direction="row">
      <Tooltip title="delete" placement="top-end" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

      <Tooltip
        title="delete"
        placement="top-end"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default MuiToolTips;
