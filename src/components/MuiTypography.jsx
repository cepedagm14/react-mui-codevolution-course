import React from "react";
import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">Titulo H1</Typography>
      <Typography variant="h2">Titulo H1</Typography>
      <Typography variant="h3">Titulo H1</Typography>
      {/* gutterbuttom agrega un pqueño margen inferio en el elemento de typography */}
      <Typography variant="h4" component="h1" gutterBottom>
        Titulo H1
      </Typography>
      <Typography variant="h5">Titulo H1</Typography>
      <Typography variant="h6">Titulo H1</Typography>

      {/* variantes sbtitle */}
      <Typography variant="subtitle1">Subtitulo 1</Typography>
      <Typography variant="subtitle2">Subtitulo 2</Typography>

      {/* variantes body */}
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
    </div>
  );
};

export default MuiTypography;
