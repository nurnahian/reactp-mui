import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

function MuiLink() {
  return (
    <Box>
      <Stack spacing={2} direction="row" m={4}>
        <Link href="" underline="none">
          Hello
        </Link>
        <Typography variant="h5">
          <Link href="https://www.google.com" color="secondary" underline="none">
            Secondary
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

export default MuiLink;
