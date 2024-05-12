import { Masonry } from "@mui/lab";
import { Box, Paper } from "@mui/material";
import React from "react";

const height = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

function MuiMasonry() {
  return (
    <Box
      sx={{
        width: 500,
        minHeight: 400,
      }}
    >
      <Masonry columns={4} spacing={1}>
        {height.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid",
            }}
          >
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}

export default MuiMasonry;
