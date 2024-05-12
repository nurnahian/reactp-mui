import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MuiTab() {
  const [value, setValue] = useState("1");
  console.log(value);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab
                label="Tab One"
                value="1"
                icon={
                  <FavoriteIcon
                    sx={{ display: value === "1" ? "inherit" : "none" }}
                  />
                }
                iconPosition="start"
              />
              <Tab
                label="Tab Two"
                value="2"
                icon={
                  <FavoriteIcon
                    sx={{ display: value === "2" ? "inherit" : "none" }}
                  />
                }
                iconPosition="start"
              />
              <Tab
                label="Tab Three"
                value="3"
                icon={
                  <FavoriteIcon
                    sx={{ display: value === "3" ? "inherit" : "none" }}
                  />
                }
                iconPosition="start"
              />
              <Tab
                label="Tab four"
                value="4"
                icon={
                  <FavoriteIcon
                    sx={{ display: value === "4" ? "inherit" : "none" }}
                  />
                }
                iconPosition="start"
              />
            </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two</TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
          <TabPanel value="4">Panel Four</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default MuiTab;
