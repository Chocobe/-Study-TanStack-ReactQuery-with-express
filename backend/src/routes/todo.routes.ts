import { Router } from 'express';
import { mockUser } from '../middlewares/mockUser.middleware';
import { 
  getTodos,
  postTodo,
} from '../controllers/todo.controller';

const todoRouter: Router = Router();

todoRouter.use(mockUser);

todoRouter.get('/', getTodos);
todoRouter.post('/', postTodo);

export default todoRouter;
