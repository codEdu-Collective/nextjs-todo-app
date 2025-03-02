import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Grid2, IconButton, ListItem, Typography } from '@mui/material';

import formatDate from '../helper/formatDate';
import { getActions, deleteActions, updateActions } from '@/actions/';

const TodoList = async () => {
  const todos = await getActions();

  const inProgress = todos.filter((todo) => !todo.isDone);
  const completed = todos.filter((todo) => todo.isDone);

  return (
    <Grid2
      container
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        mt: 3,
      }}
    >
      <Grid2
        data-test="cy-progress"
        size={{ xs: 12, sm: 10, md: 5 }}
        sx={{
          margin: '1rem',
          minHeight: '350px',
          maxHeight: '60vh',
          overflow: 'auto',
          p: 2,
          border: '2px solid #6A0DAD',
          boxShadow: '0px 4px 15px rgba(106, 13, 173, 0.2)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',

          '&:hover': {
            boxShadow: '0px 6px 18px rgba(106, 13, 173, 0.3)',
            transform: 'scale(1.05)',
          },
        }}
      >
        <Typography
          color="secondary"
          align="center"
          variant="h5"
          sx={{ mb: 1 }}
        >
          In Progress Todos
        </Typography>
        {inProgress && inProgress.length > 0 ? (
          inProgress.map((todo) => (
            <Typography
              data-test={todo.todo}
              key={todo.id}
              variant="h6"
              color="main"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <ListItem sx={{ flex: 3 }}>{todo.todo}</ListItem>
              <ListItem sx={{ flex: 2 }}>{formatDate(todo.date)}</ListItem>
              <form action={updateActions}>
                <input type="hidden" name="id" value={todo.id} />
                <input type="hidden" name="isDone" value={todo.isDone} />
                <IconButton type="submit" data-test={`${todo.todo}-edit`}>
                  <CheckBoxOutlineBlankOutlinedIcon />
                </IconButton>
              </form>
              <form action={deleteActions}>
                <input type="hidden" name="id" value={todo.id} />
                <IconButton
                  type="submit"
                  color="error"
                  data-test={`${todo.todo}-delete`}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              </form>
            </Typography>
          ))
        ) : (
          <Typography>No Todo</Typography>
        )}
      </Grid2>
      <Grid2
        data-test="cy-completed"
        size={{ xs: 12, sm: 10, md: 5 }}
        sx={{
          margin: '1rem',
          minHeight: '350px',
          maxHeight: '60vh',
          overflow: 'auto',
          p: 2,
          border: '2px solid #6A0DAD',
          boxShadow: '0px 4px 15px rgba(106, 13, 173, 0.2)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',

          '&:hover': {
            boxShadow: '0px 6px 18px rgba(106, 13, 173, 0.3)',
            transform: 'scale(1.05)',
          },
        }}
      >
        <Typography
          color="secondary"
          align="center"
          variant="h5"
          sx={{ mb: 1 }}
        >
          Completed Todos
        </Typography>
        {completed && completed.length > 0 ? (
          completed.map((todo) => (
            <Typography
              data-test={todo.todo}
              key={todo.id}
              variant="h6"
              color="main"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'line-through',
                textDecorationStyle: 'wavy',
                textDecorationColor: 'red',
              }}
            >
              <ListItem sx={{ flex: 3 }}>{todo.todo}</ListItem>
              <ListItem sx={{ flex: 2 }}>{formatDate(todo.date)}</ListItem>
              <form action={updateActions}>
                <input type="hidden" name="id" value={todo.id} />
                <input type="hidden" name="isDone" value={todo.isDone} />
                <IconButton
                  type="submit"
                  color="primary"
                  data-test={`${todo.todo}-edit`}
                >
                  <CheckBoxOutlinedIcon />
                </IconButton>
              </form>
              <form action={deleteActions}>
                <input type="hidden" name="id" value={todo.id} />
                <IconButton
                  type="submit"
                  color="error"
                  data-test={`${todo.todo}-delete`}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              </form>
            </Typography>
          ))
        ) : (
          <Typography>No Todo</Typography>
        )}
      </Grid2>
    </Grid2>
  );
};

export default TodoList;
