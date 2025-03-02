import { addActions } from '@/actions';
import { Box, Button, Paper, TextField } from '@mui/material';

const AddTodo = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        maxWidth: 600,
        mx: 'auto',
        mt: 3,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box
        component="form"
        action={addActions}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <TextField
          data-test="cy-input"
          type="text"
          name="todo"
          placeholder="Enter a todo..."
          required
          variant="outlined"
          fullWidth
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              backgroundColor: '#fff',
            },
          }}
        />
        <Button
          data-test="cy-submit"
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default AddTodo;
