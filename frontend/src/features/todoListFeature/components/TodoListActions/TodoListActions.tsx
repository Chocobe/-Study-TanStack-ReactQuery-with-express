import './TodoListActions.css';

import { FilePlus } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/shadcn-ui/button';
import { Input } from '@/components/shadcn-ui/input';

function TodoListActions() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="TodoListActions">
      <div className="leftSide">
        <Input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
      </div>

      <div className="rightSide">
        <Button
          className="addButton normalize"
          variant="default"
          onClick={() => console.log('addTodoButton()')}
        >
          <FilePlus className="icon" />
          Add
        </Button>
      </div>
    </div>
  );
}

export default TodoListActions;
