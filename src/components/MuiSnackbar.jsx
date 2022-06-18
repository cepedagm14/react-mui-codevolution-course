import React, { useState } from "react";
import { Stack, Snackbar, Button, Alert,  } from "@mui/material";

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Stack spacing={2}>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form submiting successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        // modifica la ubicacion de la alerta
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default MuiSnackbar;
