import './TodoItem.css';

import { Pencil,Trash2 } from 'lucide-react';
import { useState } from 'react';

import { TPatchTodoContentApiRequestParams, TTodoModel } from '@/apis/todoApis/todoApis.type';
import { Button } from '@/components/shadcn-ui/button';
import { Input } from '@/components/shadcn-ui/input';

import TodoItemContent from '../TodoItemContent/TodoItemContent';

type TProps = TTodoModel & {
  onSubmitContent: (params: TPatchTodoContentApiRequestParams) => void;
};

function TodoItem({ 
  id,
  content,
  completed,
  onSubmitContent,
}: TProps) {
  const [isEditMode, setIsEditMode] = useState(false);

  const _onSubmitContent: typeof onSubmitContent = params => {
    setIsEditMode(false);
    onSubmitContent(params);
  };

  return (
    <div className="TodoItem">
      <div className="detailsWrapper">
        <Input
          id={String(id)}
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={e => console.log('onChange() - checked: ', e.target.checked)}
        />

        <TodoItemContent
          id={id}
          content={content}
          completed={completed}
          isEditMode={isEditMode}
          onSubmit={_onSubmitContent}
        />
      </div>

      <div className="actionsWrapper">
        <Button
          className="actionButton normalize"
          variant="destructive"
          onClick={() => console.log('onDelete()')}
        >
          <Trash2 className="icon" />
        </Button>

        <Button
          className="actionButton normalize"
          variant="outline"
          onClick={() => setIsEditMode(isEditMode => !isEditMode)}
        >
          <Pencil className="icon" />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
