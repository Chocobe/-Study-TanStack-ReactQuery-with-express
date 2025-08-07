import './TodoItem.css';

import { Pencil,Trash2 } from 'lucide-react';

import { TTodoModel } from '@/apis/todoApis/todoApis.type';
import { Button } from '@/components/shadcn-ui/button';
import { Input } from '@/components/shadcn-ui/input';
import { cn } from '@/lib/shadcn-ui/utils';

type TProps = TTodoModel;

function TodoItem({ id, content, completed }: TProps) {
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

        <label
          htmlFor={String(id)}
          className={cn(
            'content',
            { completed }
          )}
        >
          {content}
        </label>
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
          onClick={() => console.log('onEdit()')}
        >
          <Pencil className="icon" />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
