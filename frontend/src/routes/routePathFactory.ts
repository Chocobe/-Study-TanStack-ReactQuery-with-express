const routePathFactory = {
  homePage() {
    return '/' as const;
  },
  todoListPage() {
    return '/todo-list' as const;
  },
};

export default routePathFactory;
