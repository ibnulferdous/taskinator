import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

interface ITodos {
  todos: {
    id: number;
    text: string;
  }[];
  addToLS: (input: { id: number; text: string }) => void;
}

const AddTodoForm: React.FC<ITodos> = ({ todos, addToLS }) => {
  const [todoInput, setTodoInput] = useState<{
    id: number;
    text: string;
  }>({ id: todos.length, text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let newTodoInput = { ...todoInput };
    newTodoInput.text = e.target.value;
    setTodoInput(newTodoInput);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (todoInput.text.trim().length) {
      addToLS(todoInput);

      // Checking local storage for new data
      const newTodosFromLsJSON = localStorage.getItem("todos");
      const newTodosFromLs = newTodosFromLsJSON
        ? JSON.parse(newTodosFromLsJSON)
        : [];
      setTodoInput({ id: newTodosFromLs.length, text: "" });
    }
  };

  return (
    <section>
      <Container maxWidth="md" sx={{ paddingBlock: "50px 75px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            value={todoInput.text}
            onChange={handleChange}
            label="Add todo"
            variant="outlined"
            required
            sx={{ width: "100%", paddingBottom: "20px" }}
          />
          <Button type="submit" variant="contained" size="large">
            Contained
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default AddTodoForm;
