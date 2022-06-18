import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import { Check } from "@mui/icons-material";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is error</Alert>
      <Alert severity="warning">This is warning</Alert>
      <Alert severity="info">This is info</Alert>
      <Alert severity="success">This is success</Alert>

      <Alert variant="outlined" severity="error">
        This is error
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is warning
      </Alert>
      <Alert variant="outlined" severity="info">
        This is info
      </Alert>
      <Alert variant="outlined" severity="success">
        This is success
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle> This is error
      </Alert>
      <Alert variant="filled" severity="warning">
      <AlertTitle>warning</AlertTitle> This is warning
      </Alert>
      <Alert variant="filled" severity="info">
      <AlertTitle>info</AlertTitle> This is info
      </Alert>
      <Alert variant="filled" severity="success" icon={<Check/>} action={
        <Button color="inherit">
            undo
        </Button>
      }>
      <AlertTitle>success</AlertTitle>This is success
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
