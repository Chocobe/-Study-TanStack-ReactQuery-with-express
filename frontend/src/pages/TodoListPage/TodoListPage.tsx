import './TodoListPage.css';

import TodoList from '@/features/todoListFeature/components/TodoList/TodoList';
import TodoListActions from '@/features/todoListFeature/components/TodoListActions/TodoListActions';
import useTodoListActions from '@/features/todoListFeature/hooks/useTodoListActions';
import usePatchTodoContentMutation from '@/features/todoListFeature/mutations/usePatchTodoContentMutation';
import useTodosQuery from '@/features/todoListFeature/queries/useTodosQuery';
import parseCompletedValue from '@/features/todoListFeature/utils/parseCompletedValue';

function TodoListPage() {
  const patchTodoContentMutation = usePatchTodoContentMutation();

  const {
    filterState,
    filterActions,
    onClickAddButton,
  } = useTodoListActions();

  const {
    data = [],
  } = useTodosQuery({
    queryParams: {
      completed: parseCompletedValue(filterState.completed),
    },
  });

  return (
    <div className="TodoListPage">
      <TodoListActions
        completed={filterState.completed}
        setCompleted={filterActions.setCompleted}
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
