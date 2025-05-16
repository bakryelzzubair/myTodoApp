import * as React from "react";
import Dialog from "@mui/material/Dialog";

import { useAlertDialog } from "../contexts/AlertDialogContext";
import { EditDialog } from "./EditDialog";

export default function AlertDialog() {
  const { openDialog, setOpenDialog, dialog } = useAlertDialog();

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {dialog === "edit" && (<EditDialog/>)}
        {/* {dialog === "delet" && (<DeleteDialog/>)} */}
      </Dialog>
    </React.Fragment>
  );
}
