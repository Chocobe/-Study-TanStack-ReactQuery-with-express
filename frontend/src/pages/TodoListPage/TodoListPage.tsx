import './TodoListPage.css';

import TodoList from '@/features/todoListFeature/components/TodoList/TodoList';
import TodoListActions from '@/features/todoListFeature/components/TodoListActions/TodoListActions';
import useTodoListActions from '@/features/todoListFeature/hooks/useTodoListActions';
import usePatchTodoContentMutation from '@/features/todoListFeature/mutations/usePatchTodoContentMutation';
import useTodosQuery from '@/features/todoListFeature/queries/useTodosQuery';

function TodoListPage() {
  const {
    data = [],
  } = useTodosQuery();

  const patchTodoContentMutation = usePatchTodoContentMutation();

  const {
    filterState,
    filterActions,
    onClickAddButton,
  } = useTodoListActions();

  return (
    <div className="TodoListPage">
      <TodoListActions
        completed={filterState.completed}
        toggleCompleted={filterActions.toggleCompleted}
        onClickAddButton={onClickAddButton}
      />

      <TodoList
        items={data}
        onSubmitContent={patchTodoContentMutation.mutate}
      />
    </div>
  );
}

export default TodoListPage;
