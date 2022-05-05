import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const MuiAccordion = () => {
  const [accordion, setAccordion] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setAccordion(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={accordion === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatum doloribus at maxime quidem, doloremque tempora pariatur
            voluptatibus ipsam rem fuga adipisci asperiores aspernatur dolores
            illo dicta necessitatibus assumenda quod.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordion === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatum doloribus at maxime quidem, doloremque tempora pariatur
            voluptatibus ipsam rem fuga adipisci asperiores aspernatur dolores
            illo dicta necessitatibus assumenda quod.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={accordion === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatum doloribus at maxime quidem, doloremque tempora pariatur
            voluptatibus ipsam rem fuga adipisci asperiores aspernatur dolores
            illo dicta necessitatibus assumenda quod.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
