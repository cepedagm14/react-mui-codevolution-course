import React, { useState } from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";
export const MuiTextfield = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" />
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="name" />
        <TextField
          label="name"
          variant="outlined"
          color="error"
          type="password"
        />
        <TextField label="name" variant="filled" required />
        <TextField
          label="read only"
          variant="filled"
          inputProps={{ readOnly: true }}
        />
        <TextField label="name" variant="filled" disabled />
        <TextField
          label="Prueba con states"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "requerido" : "no comparta la sontraseña con nadie"
          }
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField label="Weight" />
      </Stack>
      <Stack direction="row" spacing={2}></Stack>
    </Stack>
  );
};
