import React from "react";
import {
  Box,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { Expand } from "@mui/icons-material";

const heights = [15, 13, 18, 17, 52, 58, 98, 78, 74];
const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   height,
              border: "1px solid",
            }}
          >
            <Accordion
              sx={{
                minHeight: height,
              }}
            >
              <AccordionSummary expandIcon={<Expand/>}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>

            {/* {index + 1} */}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
