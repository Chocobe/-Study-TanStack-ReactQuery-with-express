import './TodoListPage.css';

import TodoItem from '@/features/todoListFeature/components/TodoItem/TodoItem';
import TodoList from '@/features/todoListFeature/components/TodoList/TodoList';
import TodoListActions from '@/features/todoListFeature/components/TodoListActions/TodoListActions';
import useAddTodo from '@/features/todoListFeature/hooks/useAddTodo';
import useTodoListActions from '@/features/todoListFeature/hooks/useTodoListActions';
import useDeleteTodoMutation from '@/features/todoListFeature/mutations/useDeleteTodoMutation';
import usePatchTodoContentMutation from '@/features/todoListFeature/mutations/usePatchTodoContentMutation';
import usePostTodoMutation from '@/features/todoListFeature/mutations/usePostTodoMutation';
import useToggleTodoCompletedMutation from '@/features/todoListFeature/mutations/useToggleTodoCompletedMutation';
import useTodosQuery from '@/features/todoListFeature/queries/useTodosQuery';
import parseCompletedValue from '@/features/todoListFeature/utils/parseCompletedValue';

function TodoListPage() {
  const postTodoMutation = usePostTodoMutation();
  const patchTodoContentMutation = usePatchTodoContentMutation();
  const toggleTodoCompletedMutation = useToggleTodoCompletedMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  const {
    isAddMode,
    newContent,
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
            onSubmitNewTodo={postTodoMutation.mutate}
            onESC={onCancelNewTodo}
          />
        </div>
      )}

      <TodoList
        items={data}
        onSubmitContent={patchTodoContentMutation.mutate}
        onToggleCompleted={toggleTodoCompletedMutation.mutate}
        onDelete={deleteTodoMutation.mutate}
      />
    </div>
  );
}

export default TodoListPage;
