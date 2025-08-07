import './TodoItemContent.css';

import { 
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Input } from '@/components/shadcn-ui/input';
import { cn } from '@/lib/shadcn-ui/utils';

type TProps = {
  id: number;
  content: string;
  completed: boolean;
  isEditMode: boolean;
  onChangeContent: (content: string) => void;
};

function TodoItemContent({ 
  id,
  content,
  completed,
  isEditMode,
  onChangeContent,
}: TProps) {
  const $inputRef = useRef<HTMLInputElement | null>(null);

  const [tempContent, setTempContent] = useState(content);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeContent(e.target.value);
  };

  useEffect(() => {
    if (isEditMode) {
      setTempContent(content);

      window.requestAnimationFrame(() => {
        $inputRef.current?.focus();
      });
    }
  }, [isEditMode, content]);

  return isEditMode
    ? (
      <Input
        ref={$inputRef}
        id={String(id)}
        className="TodoItemContent input"
        value={tempContent}
        onChange={onChange}
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
