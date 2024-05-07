import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

function MuiAvatar() {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={1} direction="row">
          <Avatar>BW</Avatar>
          <Avatar>BW</Avatar>
        </Stack>
        <Stack spacing={1} direction="row">
          <AvatarGroup max={4}>
            <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
            <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane Doe"
            ></Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane Doe"
            ></Avatar>
            <Avatar
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Jane Doe"
            ></Avatar>
          </AvatarGroup>
        </Stack>
        <Stack spacing={1} direction="row">
          <Avatar
            variant="square"
            sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          >
            BW
          </Avatar>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          >
            BW
          </Avatar>
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiAvatar;
