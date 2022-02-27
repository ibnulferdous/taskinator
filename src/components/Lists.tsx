import { Container, List } from "@mui/material";
import SingleTodo from "./SingleTodo";

interface ITodos {
  todos: {
    id: number;
    text: string;
  }[];
}

const Lists: React.FC<ITodos> = ({ todos }) => {
  return (
    <main>
      <Container maxWidth="md">
        <List disablePadding>
          {todos.map((todo, index) => {
            return <SingleTodo key={index} todo={todo}></SingleTodo>;
          })}
        </List>
      </Container>
    </main>
  );
};

export default Lists;
