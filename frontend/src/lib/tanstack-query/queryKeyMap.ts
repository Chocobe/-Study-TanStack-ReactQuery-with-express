const queryKeyMap = {
  todoApis: {
    getTodos() {
      return ['todos'] as const;
    },
  },
};

export default queryKeyMap;
