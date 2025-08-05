import { Request, Response } from 'express';
import * as userModel from '../models/user.model';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await userModel.findByCredential(email, password);

  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials',
    });
  }

  res.json({
    id: user.id,
    email: user.email,
    message: 'Login successful',
  });
}
