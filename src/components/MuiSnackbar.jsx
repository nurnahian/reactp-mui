import { Alert, Button, Snackbar ,} from "@mui/material";
import React, { forwardRef, useState } from "react";


const SnackbarAlert = forwardRef(
    function SnackbarAlert(prop, ref) {
        return <Alert elevation={6} ref={ref} {...prop} />
    }
)

function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const handleClose = (e, resone) => {
    if (resone === "clickaway") {
      return;
    }
    setOpen(false);
    };
  return (
    <>
      <Button onClick={() => setOpen(true)}>submit</Button>
      {/* <Snackbar
        message="Form Submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
              }}
              
      /> */}
          <Snackbar open={open} autoHideDuration={300} onClose={handleClose}>
              <SnackbarAlert onClose={handleClose} severity='success'>
                  Form Submitted
              </SnackbarAlert>
          </Snackbar>
    </>
  );
}

export default MuiSnackbar;
