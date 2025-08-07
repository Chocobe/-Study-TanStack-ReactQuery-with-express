import { useEffect } from 'react';

// FIXME: for test
import { getTodosApi } from '@/apis/todoApis/todoApis';

function TodoListPage() {
  // FIXME: for test
  useEffect(() => {
    const rr = async () => {
      const response = await getTodosApi();

      const responseData = response.data;

      console.log('responseData: ', responseData);
    };

    rr();
  }, []);

  return (
    <div className="TodoListPage">
      Todo List Page component

      <div className="w-full">
        {Array.from({ length: 10 }).map((_, i) => {
          const g = Math.floor(255 / 10 * (10 - i)).toString(16);
          const backgroundColor = `#00${g}00`;

          return (
            <div 
              key={i}
              className="w-[500px] h-[500px]"
              style={{
                backgroundColor,
              }}
            >
              Box {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoListPage;
