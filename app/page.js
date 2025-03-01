import AddTodo from '@/components/AddTodo';
import Header from '@/components/Header';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <>
      <Header />
      <AddTodo />
      {/* <TodoList /> */}
    </>
  );
}
