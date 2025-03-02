import { AddTodo, Header, TodoList } from '@/components';

export default function Home() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}
