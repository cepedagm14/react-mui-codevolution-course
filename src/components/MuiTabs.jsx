import React, { useState } from "react";
import { Box } from "@mui/system";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const MuiTabs = () => {
  const [active, setActive] = useState("1");
  const handleChange = (event, newValue) => {
    setActive(newValue);
  };

  return (
    <Box>
      <TabContext value={active}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            centered
            onChange={handleChange}
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
