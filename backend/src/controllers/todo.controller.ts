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

export async function postTodo(req: Request, res: Response) {
  const userId = req.user?.id;
  const { content } = req.body;

  if (!userId) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  const todo = await todoModel.createTodo(content, userId);
  res.status(201).json(todo);
}

export async function deleteTodo(req: Request, res: Response) {
  const userId = req.user?.id;
  const id = Number(req.params.id);

  if (!userId) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  if (!id) {
    return res.status(400).json({
      message: 'Invalid todo id',
    });
  }

  const isDeleted = todoModel.deleteTodo(id, userId);

  if (!isDeleted) {
    return res.status(404).json({
      message: 'Todo not found or not owned by user',
    });
  }

  res.status(204).send();
}
