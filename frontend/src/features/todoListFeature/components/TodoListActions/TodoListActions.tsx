import './TodoListActions.css';

import { FilePlus } from 'lucide-react';

import { Button } from '@/components/shadcn-ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui/select';
import { TTodoListPageStore } from '@/stores/todoListPageStore/todoListPageStore.type';

type TProps = {
  completed: TTodoListPageStore['state']['filterState']['completed'];
  setCompleted: (completed: TTodoListPageStore['state']['filterState']['completed']) => void;
  onClickAddButton: () => void;
};

function TodoListActions({
  completed,
  setCompleted,
  onClickAddButton,
}: TProps) {
  return (
    <div className="TodoListActions">
      <div className="leftSide">
        <Select
          value={completed}
          onValueChange={value => {
            setCompleted(value as Parameters<typeof setCompleted>[0]);
          }}
        >
          <SelectTrigger className="select">
            <SelectValue>
              {completed}
            </SelectValue>
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="전체">전체</SelectItem>
            <SelectItem value="완료">완료</SelectItem>
            <SelectItem value="미완료">미완료</SelectItem>
          </SelectContent>
        </Select>
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
