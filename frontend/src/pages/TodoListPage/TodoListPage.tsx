import './TodoListPage.css';

import TodoList from '@/features/todoListFeature/components/TodoList/TodoList';
import useTodosQuery from '@/features/todoListFeature/queries/useTodosQuery';

function TodoListPage() {
  const {
    data = [],
  } = useTodosQuery();

  return (
    <div className="TodoListPage">
      <TodoList items={data} />
    </div>
  );
}

export default TodoListPage;
