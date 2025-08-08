import './TodoListPage.css';

import TodoItem from '@/features/todoListFeature/components/TodoItem/TodoItem';
import TodoList from '@/features/todoListFeature/components/TodoList/TodoList';
import TodoListActions from '@/features/todoListFeature/components/TodoListActions/TodoListActions';
import useAddTodo from '@/features/todoListFeature/hooks/useAddTodo';
import useTodoListActions from '@/features/todoListFeature/hooks/useTodoListActions';
import usePatchTodoContentMutation from '@/features/todoListFeature/mutations/usePatchTodoContentMutation';
import useTodosQuery from '@/features/todoListFeature/queries/useTodosQuery';
import parseCompletedValue from '@/features/todoListFeature/utils/parseCompletedValue';

function TodoListPage() {
  const patchTodoContentMutation = usePatchTodoContentMutation();

  const {
    isAddMode,
    newContent,
    onSubmitNewTodo,
    onCancelNewTodo,
  } = useAddTodo();

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
        isAddMode={isAddMode}
        completed={filterState.completed}
        setCompleted={filterActions.setCompleted}
        onClickAddButton={onClickAddButton}
      />

      {isAddMode && (
        <div className="newTodoWrapper">
          <label className="label">
            Add new todo
          </label>

          <TodoItem
            isAddMode
            id={0}
            completed={false}
            content={newContent}
            created_at=""
            updated_at=""
            onSubmitNewTodo={onSubmitNewTodo}
            onESC={onCancelNewTodo}
          />
        </div>
      )}

      <TodoList
        items={data}
        onSubmitContent={patchTodoContentMutation.mutate}
      />
    </div>
  );
}

export default TodoListPage;
