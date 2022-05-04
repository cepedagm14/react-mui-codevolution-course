import React, { useState } from "react";
import { Box, Stack, Autocomplete, TextField } from "@mui/material";

let skill = {
  id: Number,
  label: String,
};

let skills = ["html", "css", "javascript", "2typescript", "react"];

const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log("Console log de value", value);
  console.log("Console log de skill", skill);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleChangeSkill = (e, newValue = skill) => {
    setSkill(newValue);
  };

  return (
    <>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={handleChange}
          freeSolo //acepta texto que no este en el arreglo de texto
        />
      </Stack>

      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skillsOption}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={skill}
          onChange={handleChangeSkill}
          freeSolo //acepta texto que no este en el arreglo de texto
        />
      </Stack>
    </>
  );
};

export default MuiAutocomplete;
