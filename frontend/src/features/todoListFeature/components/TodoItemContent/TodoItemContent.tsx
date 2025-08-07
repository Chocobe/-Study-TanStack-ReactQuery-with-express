import './TodoItemContent.css';

import { 
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TPatchTodoContentApiRequestParams } from '@/apis/todoApis/todoApis.type';
import { Input } from '@/components/shadcn-ui/input';
import { cn } from '@/lib/shadcn-ui/utils';

type TProps = {
  id: number;
  content: string;
  completed: boolean;
  isEditMode: boolean;
  onSubmit: (params: TPatchTodoContentApiRequestParams) => void;
};

function TodoItemContent({ 
  id,
  content,
  completed,
  isEditMode,
  onSubmit,
}: TProps) {
  const $inputRef = useRef<HTMLInputElement | null>(null);

  const [tempContent, setTempContent] = useState(content);

  const _onSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key.toLowerCase() === 'enter') {
      onSubmit({
        pathParams: {
          id,
        },
        payload: {
          content: tempContent,
        },
      });
    }
  };

  useEffect(() => {
    if (isEditMode) {
      // NOTE: 네트워크 속도가 빠르면,
      // => 1. 이전값이 순간 잔상처럼 렌더링 되었다가,
      // => 2. 변경된 값으로 다시 렌더링되는 현상 해소
      window.requestAnimationFrame(() => {
        setTempContent(content);
        $inputRef.current?.focus();
      });
    }

    // eslint-disable-next-line
  }, [isEditMode]);

  return isEditMode
    ? (
      <Input
        ref={$inputRef}
        id={String(id)}
        className="TodoItemContent input"
        value={tempContent}
        onChange={e => setTempContent(e.target.value)}
        onKeyUp={_onSubmit}
      />
    ): (
      <label
        htmlFor={String(id)}
        className={cn(
          'TodoItemContent label',
          { completed }
        )}
      >
        {content}
      </label>
    );
}

export default TodoItemContent;
