import { Router } from 'express';
import { mockUser } from '../middlewares/mockUser.middleware';
import { 
  getTodos,
  postTodo,
  deleteTodo,
  updateTodoContent,
  toggleTodoCompleted,
} from '../controllers/todo.controller';

const todoRouter: Router = Router();

todoRouter.use(mockUser);

todoRouter.get('/', getTodos);
todoRouter.post('/', postTodo);
todoRouter.delete('/:id', deleteTodo);
todoRouter.patch('/:id', updateTodoContent);
todoRouter.patch('/:id/toggle', toggleTodoCompleted);

export default todoRouter;
