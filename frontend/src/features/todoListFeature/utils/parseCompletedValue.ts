import { TTodoListPageStore } from '@/stores/todoListPageStore/todoListPageStore.type';

const parseCompletedValue = (
  completed: TTodoListPageStore['state']['filterState']['completed']
) => {
  switch (completed) {
    case '전체': return undefined;
    case '완료': return true;
    case '미완료': return false;
  }
};

export default parseCompletedValue;
