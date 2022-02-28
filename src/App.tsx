import { Box } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import Lists from "./components/Lists";
import { v4 as uuidv4 } from "uuid";

interface IApp {
  todos: {
    id: string;
    text: string;
  }[];
}

function App() {
  const todosFromLsJSON = localStorage.getItem("todos");
  let initialValue = todosFromLsJSON ? JSON.parse(todosFromLsJSON) : [];
  const [todos, setTodos] = useState<IApp["todos"]>(initialValue);

  // ------------------------------------------------------------------
  // Adding to localstorage
  // ------------------------------------------------------------------
  const addToLS = (input: string): void => {
    const todosFromLsJSON = localStorage.getItem("todos");
    const newTodo = {
      id: uuidv4(),
      text: input,
    };

    if (!todosFromLsJSON) {
      const newTodos = [];
      newTodos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      const todosFromLs = JSON.parse(todosFromLsJSON);
      const newTodos = [...todosFromLs];
      newTodos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    const newTodosFromLsJSON = localStorage.getItem("todos");
    setTodos(newTodosFromLsJSON ? JSON.parse(newTodosFromLsJSON) : []);
  };

  // ------------------------------------------------------------------
  // Event handler for delete button
  // ------------------------------------------------------------------
  const handleDelete = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <Box className="App" sx={{ paddingBlock: { xs: "50px", md: "75px" } }}>
      <Header></Header>
      <AddTodoForm addToLS={addToLS}></AddTodoForm>
      <Lists handleDelete={handleDelete} todos={todos}></Lists>
    </Box>
  );
}

export default App;
