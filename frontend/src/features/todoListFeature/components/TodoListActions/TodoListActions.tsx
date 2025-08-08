import './TodoListActions.css';

import { FilePlus } from 'lucide-react';

import { Button } from '@/components/shadcn-ui/button';
import { Input } from '@/components/shadcn-ui/input';

type TProps = {
  completed: boolean;
  toggleCompleted: () => void;
  onClickAddButton: () => void;
};

function TodoListActions({
  completed,
  toggleCompleted,
  onClickAddButton,
}: TProps) {
  return (
    <div className="TodoListActions">
      <div className="leftSide">
        <Input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={toggleCompleted}
        />
      </div>

      <div className="rightSide">
        <Button
          className="addButton normalize"
          variant="default"
          onClick={onClickAddButton}
        >
          <FilePlus className="icon" />
          Add
        </Button>
      </div>
    </div>
  );
}

export default TodoListActions;
