import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function MuiNavbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEMON
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu></Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MuiNavbar;
