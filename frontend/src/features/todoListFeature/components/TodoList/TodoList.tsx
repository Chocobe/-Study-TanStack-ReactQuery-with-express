import './TodoList.css';

import { TTodoModel } from '@/apis/todoApis/todoApis.type';

import TodoItem from '../TodoItem/TodoItem';

type TProps = {
  items: TTodoModel[];
};

function TodoList({ items }: TProps) {
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
          />
        );
      })}
    </div>
  );
}

export default TodoList;
