import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface ITodo {
  key: number;
  todo: {
    id: string;
    text: string;
  };
  handleDelete: (id: string) => void;
}

const SingleTodo: React.FC<ITodo> = ({ todo, handleDelete }) => {
  return (
    <Paper variant="outlined" sx={{ background: "#F3F6F9", padding: "10px" }}>
      <ListItem
        dense
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(todo.id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <CircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={todo.text} />
      </ListItem>
    </Paper>
  );
};

export default SingleTodo;
