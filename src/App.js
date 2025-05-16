import { Container } from "@mui/material";
import TodoList from "./components/TodoList";
import { TodosProvider } from "./contexts/TodosContext";
import { AlertDialogProvider } from "./contexts/AlertDialogContext";
import { CustomizedSnackbarsProvider } from "./contexts/CustomizedSnackbarsContext";

function App() {
  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <CustomizedSnackbarsProvider>
        <TodosProvider>
          <AlertDialogProvider>
            <TodoList />
          </AlertDialogProvider>
        </TodosProvider>
      </CustomizedSnackbarsProvider>
    </Container>
  );
}

export default App;
