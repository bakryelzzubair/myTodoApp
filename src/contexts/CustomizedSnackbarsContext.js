import { useState, useContext, createContext } from "react";
import CustomizedSnackbars from "../components/CustomizedSnackbars";

const CustomizedSnackbarsContext = createContext({});

export const CustomizedSnackbarsProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState("");


  return (
    <CustomizedSnackbarsContext.Provider
      value={{ open, setOpen, snackBarMsg, setSnackBarMsg }}
    >
      <CustomizedSnackbars />
      {children}
    </CustomizedSnackbarsContext.Provider>
  );
};

export const useCustomizedSnackbars = () => {
  return useContext(CustomizedSnackbarsContext);
};
