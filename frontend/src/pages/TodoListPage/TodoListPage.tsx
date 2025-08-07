import './TodoListPage.css';

import TodoList from '@/features/todoListFeature/components/TodoList/TodoList';
import usePatchTodoContentMutation from '@/features/todoListFeature/mutations/usePatchTodoContentMutation';
import useTodosQuery from '@/features/todoListFeature/queries/useTodosQuery';

function TodoListPage() {
  const {
    data = [],
  } = useTodosQuery();

  const patchTodoContentMutation = usePatchTodoContentMutation();

  return (
    <div className="TodoListPage">
      <TodoList
        items={data}
        onSubmitContent={patchTodoContentMutation.mutate}
      />
    </div>
  );
}

export default TodoListPage;
