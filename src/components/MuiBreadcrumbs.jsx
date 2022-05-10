import React from "react";
import { Breadcrumbs, Box, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="Breadcrumbs" separator=">">
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accesories
        </Link>
        <Typography color="Text.primary">Shoes</Typography>
      </Breadcrumbs>

      <Breadcrumbs
        aria-label="Breadcrumbs"
        separator={<NavigateNext fontSize="small" />}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accesories
        </Link>
        <Typography color="Text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
