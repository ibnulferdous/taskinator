import { ListItem, ListItemIcon, ListItemText, Paper } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface ITodo {
  key: number;
  todo: {
    id: number;
    text: string;
  };
}

const SingleTodo: React.FC<ITodo> = ({ todo }) => {
  return (
    <Paper variant="outlined" sx={{ background: "#F3F6F9", padding: "10px" }}>
      <ListItem dense>
        <ListItemIcon>
          <CircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={todo.text} />
      </ListItem>
    </Paper>
  );
};

export default SingleTodo;
