import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>

        <DialogContent id="dialog-description">
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            eaque facilis quam nostrum, sint nihil placeat fuga animi maiores
            iste.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" autoFocus>Acept</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
