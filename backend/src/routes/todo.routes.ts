import { Router } from 'express';
import { mockUser } from '../middlewares/mockUser.middleware';
import { 
  getTodos,
  postTodo,
  deleteTodo,
} from '../controllers/todo.controller';

const todoRouter: Router = Router();

todoRouter.use(mockUser);

todoRouter.get('/', getTodos);
todoRouter.post('/', postTodo);
todoRouter.delete('/:id', deleteTodo);

export default todoRouter;
