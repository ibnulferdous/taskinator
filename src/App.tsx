import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import Lists from "./components/Lists";

export interface IApp {
  todos: {
    id: number;
    text: string;
  }[];
  todo: {
    id: number;
    text: string;
  };
}

function App() {
  const todosFromLsJSON = localStorage.getItem("todos");
  let initialValue = todosFromLsJSON ? JSON.parse(todosFromLsJSON) : [];
  const [todos, setTodos] = useState<IApp["todos"]>(initialValue);

  // Adding to localstorage
  const addToLS = (input: IApp["todo"]): void => {
    const todosFromLsJSON = localStorage.getItem("todos");

    if (!todosFromLsJSON) {
      const newTodos = [];
      newTodos.push(input);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      const todosFromLs = JSON.parse(todosFromLsJSON);
      const newTodos = [...todosFromLs];
      newTodos.push(input);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    const newTodosFromLsJSON = localStorage.getItem("todos");
    setTodos(newTodosFromLsJSON ? JSON.parse(newTodosFromLsJSON) : []);
  };

  return (
    <Box className="App" sx={{ paddingBlock: { xs: "50px", md: "75px" } }}>
      <Header></Header>
      <AddTodoForm todos={todos} addToLS={addToLS}></AddTodoForm>
      <Lists todos={todos}></Lists>
    </Box>
  );
}

export default App;
