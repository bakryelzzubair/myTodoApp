import { useState,useContext,createContext } from "react";
import AlertDialog from "../components/AlertDialog";

const AlertDialogContext = createContext({})

export const AlertDialogProvider = ({children}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialog, setDialog] = useState("");
    const [dialogTodo,setDialogTodo] = useState({});

    return (
      <AlertDialogContext.Provider
        value={{
          openDialog,
          setOpenDialog,
          dialog,
          setDialog,
          dialogTodo,
          setDialogTodo,
        }}
      >
        <AlertDialog />
        {children}
      </AlertDialogContext.Provider>
    );
}

export const useAlertDialog = () => {return useContext(AlertDialogContext)}