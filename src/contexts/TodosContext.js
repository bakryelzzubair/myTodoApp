import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useState,
  useEffect,
} from "react";
import TodosReducer from "../reducers/TodosReducer";

const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [TodosList, dispatch] = useReducer(TodosReducer, []);
  const [currentTab, setcurrentTab] = useState("all");

  const completed = useMemo(() => {
    return TodosList.filter((todo) => todo.isCompleted === true);
  }, [TodosList]);

  const nonCompleted = useMemo(() => {
    return TodosList.filter((todo) => todo.isCompleted === false);
  }, [TodosList]);

  let filterdTodos = [];

  switch (currentTab) {
    case "completed":
      filterdTodos = completed;
      break;
    case "non-completed":
      filterdTodos = nonCompleted;
      break;
    default:
      filterdTodos = TodosList;
      break;
  }
  useEffect(() => {
    const setTodosList = JSON.parse(localStorage.getItem("todos")) ?? [];
    dispatch({type: "get", payload: {setTodosList}})
  }, []);

  return (
    <TodosContext.Provider
      value={{ TodosList, filterdTodos, currentTab, setcurrentTab, dispatch }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};
