import React, { useState } from "react";
import { Chip, Stack, Box, Avatar } from "@mui/material";
import { Face } from "@mui/icons-material";

const MuiChip = () => {
  const [chip, setChip] = useState(["chip1", "chip2", "chip3", "chip4"]);
  const handleDelete = (chipDelete) => {
    setChip((chip) => chip.filter((chip) => chip !== chipDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" />

      <Chip
        label="chip outline"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>VC</Avatar>}
      />

      <Chip
        label="chip outline"
        color="secondary"
        size="small"
        variant="outlined"
        icon={<Face />}
      />

      <Chip
        label="clic"
        color="success"
        size="small"
        onClick={() => alert("clic en chip")}
      />
      <Chip
        label="Delete"
        color="error"
        size="small"
        onClick={() => alert("clic en chip")}
        onDelete={() => alert("delete")}
      />

      {chip.map((chip, index) => (
        <Chip
          key={index}
          label={chip}
          color="error"
          size="small"
          onClick={() => alert("clic en chip")}
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};

export default MuiChip;
