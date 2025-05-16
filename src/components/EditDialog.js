import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAlertDialog } from "../contexts/AlertDialogContext";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useTodos } from "../contexts/TodosContext";
import { useCustomizedSnackbars } from "../contexts/CustomizedSnackbarsContext";

export const EditDialog = () => {
  const { setOpenDialog, dialogTodo } = useAlertDialog();
  const { dispatch } = useTodos();
  const { setOpen, setSnackBarMsg } = useCustomizedSnackbars();
  let initialValue;

  if (dialogTodo) {
    initialValue = dialogTodo.title;
  }
  const [inputValue, setInputValue] = useState(initialValue);

  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleEditButton = () => {
    dispatch({
      type: "edit",
      payload: { id: dialogTodo.id, title: inputValue },
    });
    handleClose();
    setSnackBarMsg("تم التعديل بنجاج");
    setOpen(true);
  };
  return (
    <>
      <DialogTitle id="alert-dialog-title">
        <Typography children="تعديل المهمة" />
      </DialogTitle>
      <DialogContent>
        <TextField
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="outlined-basic"
          variant="standard"
          sx={{ flexGrow: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>الغاء</Button>
        <Button onClick={handleEditButton} autoFocus>
          تعديل
        </Button>
      </DialogActions>
    </>
  );
};
