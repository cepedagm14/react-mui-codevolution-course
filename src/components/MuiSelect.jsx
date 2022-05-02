import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  console.log("country useState", countries);

  //   const handleChange = (e) => {
  //     setCountry(e.target.value);
  //   };

  const handleChange = (e) => {
   const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box width="250px">
        <TextField
          fullWidth
          label="select Country"
          select
          //   value={country}
          value={countries}
          onChange={handleChange}
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="IT">Italia</MenuItem>
          <MenuItem value="FR">Francia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MuiSelect;
