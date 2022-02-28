import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

interface ITodos {
  addToLS: (input: string) => void;
}

const AddTodoForm: React.FC<ITodos> = ({ addToLS }) => {
  const [todoInput, setTodoInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (todoInput.trim().length) {
      addToLS(todoInput);
      setTodoInput("");
    }
  };

  return (
    <section>
      <Container maxWidth="md" sx={{ paddingBlock: "50px 75px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            value={todoInput}
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
