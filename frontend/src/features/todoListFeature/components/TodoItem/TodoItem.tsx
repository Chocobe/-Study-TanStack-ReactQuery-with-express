import './TodoItem.css';

import { Pencil,Trash2 } from 'lucide-react';
import { useState } from 'react';

import { 
  TPatchTodoContentApiRequestParams,
  TPostTodoApiRequestParams,
  TTodoModel,
  TToggleTodoCompletedApiRequestParams,
} from '@/apis/todoApis/todoApis.type';
import { Button } from '@/components/shadcn-ui/button';
import { Input } from '@/components/shadcn-ui/input';

import TodoItemContent from '../TodoItemContent/TodoItemContent';

type TProps = 
  & Omit<TTodoModel, 'id'> 
  & Partial<Pick<TTodoModel, 'id'>>
  & {
    isAddMode?: boolean;
    onSubmitContent?: (params: TPatchTodoContentApiRequestParams) => void;
    onSubmitNewTodo?: (params: TPostTodoApiRequestParams) => void;
    onToggleCompleted?: (params: TToggleTodoCompletedApiRequestParams) => void;
    onESC?: () => void;
  };

function TodoItem({ 
  id,
  content,
  completed,
  isAddMode = false,
  onSubmitContent,
  onSubmitNewTodo,
  onToggleCompleted,
  onESC,
}: TProps) {
  const [isEditMode, setIsEditMode] = useState(false);

  const patchTodoContent: typeof onSubmitContent = params => {
    setIsEditMode(false);
    onSubmitContent?.(params);
  };

  const postNewTodo: typeof onSubmitNewTodo = params => {
    onSubmitNewTodo?.(params);
  };

  const onEnter = (content: string) => {
    if (isAddMode) {
      postNewTodo({
        payload: {
          content,
        },
      });
    } else if (isEditMode && id) {
      patchTodoContent({
        pathParams: {
          id,
        },
        payload: {
          content,
        },
      });
    }
  };

  const onClickCheckbox = () => {
    if (!id || !onToggleCompleted) {
      return;
    }

    onToggleCompleted({
      pathParams: {
        id,
      },
    });
  };

  return (
    <div className="TodoItem">
      <div className="detailsWrapper">
        <Input
          id={String(id)}
          className="checkbox"
          type="checkbox"
          disabled={isAddMode}
          checked={completed}
          onChange={onClickCheckbox}
        />

        <TodoItemContent
          id={id}
          content={content}
          completed={completed}
          isEditMode={isEditMode || isAddMode}
          onEnter={onEnter}
          onESC={onESC}
        />
      </div>

      {!isAddMode && (
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
      )}
    </div>
  );
}

export default TodoItem;
