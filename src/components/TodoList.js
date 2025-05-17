import { Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "./Todo";
import { ColorToggleButton } from "./ColorToggleButton";
import { useTodos } from "../contexts/TodosContext";
import { useEffect, useState } from "react";
import { useCustomizedSnackbars } from "../contexts/CustomizedSnackbarsContext";
// import { useAlertDialog } from "../contexts/AlertDialogContext";

const TodoList = () => {

  
  // const {setOpenCreateDialog} = useAlertDialog()
  const [inputValue, setInputValue] = useState("");
  const {filterdTodos,dispatch } = useTodos();
  const { setOpen, setSnackBarMsg } =
  useCustomizedSnackbars();

  //handlers
  const handleCreateButton = () => {    
    dispatch({type: "create", payload: {title:inputValue}})
    setSnackBarMsg("تم انشاء المهمة بنجاح");    
    setOpen(true)
    setInputValue("")
  }

  const jsxTodosList = filterdTodos.map((todo)=> {
    return <Todo key={todo.id} todo={todo} />;
  })

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: "100vh",
          overflow: "auto",
          padding: "10px",
        }}
      >
        <header>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{ color: "text.primary" }}
            children="مهامي"
          />
          <Divider sx={{ marginTop: -5 }} />
        </header>
        <ColorToggleButton />
        <CardContent sx={{ marginTop: 2 }}>
          <main>{jsxTodosList}</main>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          <TextField
          value={inputValue}
          onChange={(event)=> setInputValue(event.target.value)}
            id="outlined-basic"
            variant="standard"
            sx={{ flexGrow: 1 }}
          />
          <Button onClick={handleCreateButton} variant="text">
            حفظ المهمة
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TodoList;
