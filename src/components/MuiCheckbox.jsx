import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { Bookmark, BookmarkBorder, Bookmarks } from "@mui/icons-material";

const MuiCheckbox = () => {
  const [accept, setAccept] = useState(false);
  const [skill, setSkill] = useState([]);

  console.log("skill", skill);

  const handleSkillChange = (e) => {
    const index = skill.indexOf(e.target.value);
    if (index === -1) {
      setSkill([...skill, e.target.value]);
    } else {
      setSkill(skill.filter((skill) => skill !== e.target.value));
    }
  };

  const handleChange = (e) => {
    setAccept(e.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="i accept terms and conditions"
          control={<Checkbox checked={accept} onChange={handleChange} />}
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={accept}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skill.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="css3"
              value="css3"
              control={
                <Checkbox
                  checked={skill.includes("css3")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Checkbox
                  checked={skill.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
