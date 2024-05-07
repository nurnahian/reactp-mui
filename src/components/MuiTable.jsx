import { Box, Paper, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import React from "react";

function MuiTable() {
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                      
                      <TableHead></TableHead>
                      <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default MuiTable;
