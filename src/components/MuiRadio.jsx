import React, { useState } from "react";
import {
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Box,
} from "@mui/material";
const MuiRadio = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let valuesExp = e.target.value;
    setValue(valuesExp);
  };

  console.log("que trae de valor el radio button", value);
  return (
    <Box>
      <FormControl id="job-experience-group-label">
        <FormLabel>Years of experience</FormLabel>
      </FormControl>
      <RadioGroup
        name="job-experience-group"
        aria-label="job-experience-group-label"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel control={<Radio size="medium" color="secondary" />} label="0-2" value="0-2" />
        <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
        <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
      </RadioGroup>
    </Box>
  );
};

export default MuiRadio;
