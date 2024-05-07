import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function MuiChip() {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleDelete1 = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip" color="primary" size="large" variant="outlined" />
        <Chip
          label="Clickable Deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Clickable Deletable"
          variant="outlined"
          color="error"
          deleteIcon={<DeleteIcon />}
          onClick={handleClick}
          onDelete={handleDelete}
        />
        <Chip
          label="Chip"
          color="primary"
          size="large"
          avatar={<Avatar>V</Avatar>}
          variant="outlined"
        />
        <Chip label="Chip" color="primary" size="small" icon={<DeleteIcon />} />
        <Chip
          label="Delete"
          color="error"
          onClick={() => alert("Click")}
          onDelete={() => alert("Delete handler called")}
        />

        {chips.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete1(chip)} />
        ))}
      </Stack>
    </div>
  );
}

export default MuiChip;
