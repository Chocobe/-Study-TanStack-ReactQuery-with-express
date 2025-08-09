import './TodoList.css';

import { 
  TPatchTodoContentApiRequestParams,
  TTodoModel,
  TToggleTodoCompletedApiRequestParams,
} from '@/apis/todoApis/todoApis.type';

import TodoItem from '../TodoItem/TodoItem';

type TProps = {
  items: TTodoModel[];
  onSubmitContent: (params: TPatchTodoContentApiRequestParams) => void;
  onToggleCompleted?: (params: TToggleTodoCompletedApiRequestParams) => void;
};

function TodoList({ items, onSubmitContent, onToggleCompleted }: TProps) {
  return (
    <div className="TodoList">
      {items.map(item => {
        const {
          id,
          content,
          completed,
          created_at,
          updated_at,
        } = item;

        return (
          <TodoItem
            key={id}
            id={id}
            content={content}
            completed={completed}
            created_at={created_at}
            updated_at={updated_at}
            onSubmitContent={onSubmitContent}
            onToggleCompleted={onToggleCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
