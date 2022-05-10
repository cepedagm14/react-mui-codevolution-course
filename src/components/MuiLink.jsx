import React from "react";
import { Box, Link, Stack } from "@mui/material";
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="hover">Link</Link>
      <Link href="#">Link</Link>
    </Stack>
  );
};

export default MuiLink;
