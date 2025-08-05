import { Router } from 'express';
import { mockUser } from '../middlewares/mockUser.middleware';
import { 
  getTodos,
  postTodo,
  deleteTodo,
  updateTodoContent,
} from '../controllers/todo.controller';

const todoRouter: Router = Router();

todoRouter.use(mockUser);

todoRouter.get('/', getTodos);
todoRouter.post('/', postTodo);
todoRouter.delete('/:id', deleteTodo);
todoRouter.patch('/:id', updateTodoContent);

export default todoRouter;
