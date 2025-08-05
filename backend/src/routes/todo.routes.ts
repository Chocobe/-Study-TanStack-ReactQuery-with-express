import { Router } from 'express';
import { mockUser } from '../middlewares/mockUser.middleware';
import { getTodos } from '../controllers/todo.controller';

const todoRouter: Router = Router();

todoRouter.use(mockUser);

todoRouter.get('/', getTodos);

export default todoRouter;
