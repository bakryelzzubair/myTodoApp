import { v4 as uuidv4 } from "uuid";

const TodosReducer = (currentStat, action) => {
  switch (action.type) {
    case "get":
      return action.payload.setTodosList;
    case "create":
      const newTodosLis = [
        ...currentStat,
        { id: uuidv4(), title: action.payload.title, isCompleted: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodosLis));
      return newTodosLis;
    case "check":
      const currentStatC = [...currentStat];
      const newTodosList = currentStatC.map((todo) => {
        if (todo.id === action.payload.id) {
          const newTodo = { ...todo, isCompleted: !todo.isCompleted };
          return newTodo;
        }
        return todo;
      });
      return newTodosList;
    case "edit":
      const currentStatE = [...currentStat];
      const newEditedTodosList = currentStatE.map((todo) => {
        if (todo.id === action.payload.id) {
          const newEditedTodo = { ...todo, title: action.payload.title };
          return newEditedTodo;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newEditedTodosList));
      return newEditedTodosList;
    default:
      throw Error("Unknown action", action.type);
  }
};

export default TodosReducer;
