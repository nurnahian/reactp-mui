import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

function MuiSpeedDial() {
  return (
    <div>
      <SpeedDial
        ariaLabel="Navigate speed dial"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction
          icon={<CopyAllIcon />}
          tooltipTitle="Copy"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
          tooltipOpen
        />
      </SpeedDial>
    </div>
  );
}

export default MuiSpeedDial;
