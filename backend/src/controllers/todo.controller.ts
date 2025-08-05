import { Request, Response } from 'express';
import * as todoModel from '../models/todo.model';

export async function getTodos(req: Request, res: Response) {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const todos = await todoModel.findTodosByUserId(userId);

  res.json(todos);
}
