import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="contained" color="primary">
        Submit
      </LoadingButton>
      <LoadingButton variant="contained" color="primary" loading>
        Submit
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        color="primary"
        loadingIndicator="Loading..."
      >
        Fetch Data
      </LoadingButton>
      <LoadingButton
        loading
        variant="outlined"
        color="primary"
        loadingIndicator="Loading..."
      >
        Fetch Data
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        color="primary"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>

      <LoadingButton
        loading
        variant="outlined"
        color="primary"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoadingButton;
