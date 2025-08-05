import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const authRouter: Router = Router();

authRouter.post('/login', authController.login);

export default authRouter;
