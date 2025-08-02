const routePathFactory = {
  loginPage() {
    return '/login' as const;
  },
  todoListPage() {
    return '/todo-list' as const;
  },
};

export default routePathFactory;
