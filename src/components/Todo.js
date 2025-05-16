import { Box, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import { useTodos } from "../contexts/TodosContext";
import { useAlertDialog } from "../contexts/AlertDialogContext";

const Todo = ({ todo }) => {
  const { TodosList, dispatch } = useTodos();
  const { setOpenDialog, setDialog, setDialogTodo } =
    useAlertDialog();
  // handlers
  const handleChickButton = (id) => {
    dispatch({ type: "check", payload: { id } });
  };
  const handleEditButton = (id) => {
    const dialogTodo = TodosList.filter((todo)=>todo.id === id)    
    setDialogTodo(dialogTodo[0]);

    setDialog("edit");
    setOpenDialog(true);
  };
  const handleDeleteButton = () => {
    setDialog("delete");
    setOpenDialog(true);
  };

  return (
    <Box
      sx={{
        bgcolor: teal[900],
        color: "white",
        pt: 5,
        pb: 5,
        pl: 2,
        pr: 2,
        marginBottom: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" children={todo.title} sx={{ flexGrow: 2 }} />
      <Box
        sx={{ flexGrow: 0.1, display: "flex", justifyContent: "space-between" }}
      >
        <IconButton
          aria-label="check"
          onClick={() => {
            handleChickButton(todo.id);
          }}
          sx={{
            bgcolor: todo.isCompleted === false ? "white" : "green",
            color: todo.isCompleted === false ? "green" : "white",
            border:
              todo.isCompleted === false
                ? "2px solid green"
                : "2px solid white",
          }}
        >
          <CheckCircleIcon />
        </IconButton>
        <IconButton
          onClick={() => handleEditButton(todo.id)}
          aria-label="edit"
          sx={{ bgcolor: "white", color: "blue", border: "2px solid blue" }}
        >
          <EditDocumentIcon />
        </IconButton>
        <IconButton
          onClick={() => handleDeleteButton(todo.id)}
          aria-label="delete"
          sx={{ bgcolor: "white", color: "red", border: "2px solid red" }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Todo;
