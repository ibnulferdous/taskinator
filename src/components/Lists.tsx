import { Container, List } from "@mui/material";
import SingleTodo from "./SingleTodo";

interface ITodos {
  todos: {
    id: string;
    text: string;
  }[];
  handleDelete: (id: string) => void;
}

const Lists: React.FC<ITodos> = ({ todos, handleDelete }) => {
  return (
    <main>
      <Container maxWidth="md">
        <List disablePadding>
          {todos.map((todo, index) => {
            return (
              <SingleTodo
                key={index}
                todo={todo}
                handleDelete={handleDelete}
              ></SingleTodo>
            );
          })}
        </List>
      </Container>
    </main>
  );
};

export default Lists;
