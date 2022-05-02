import React from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatItalic,
  FormatUnderlined,
  FormatBold,
} from "@mui/icons-material";

import { useState } from "react";

export const Muibutton = () => {
  const [format, seFormat] = useState([] | null);
  console.log("que trae formats", format);
  const handleFormatchange = (event, updateFormats) => {
    seFormat(updateFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        {/* los botones tienen tres variantes que podemos usar */}
        {/* https://mui.com/material-ui/customization/palette/ */}
        <Button variant="text" href="https://google.com" target="_blank">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">Outline</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">
          contained color primario
        </Button>
        <Button variant="contained" color="secondary">
          contained color secundario
        </Button>
        <Button variant="contained" color="info">
          contained color info
        </Button>
        <Button variant="contained" color="error">
          contained color error
        </Button>
        <Button variant="contained" color="warning">
          contained color warning
        </Button>
        <Button variant="contained" color="info">
          contained color info
        </Button>
        <Button variant="contained" color="success">
          contained color success
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="secondary">
          Outline
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        {/* disable elevation quita el borde o sombra del boton */}
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        {/* disable ripple elimina el efeco al presionar el  boton */}
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
          Send
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatchange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
          //   exclusive solo permite tomar un solo valor a formatear
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction="row"></Stack>
    </Stack>
  );
};
