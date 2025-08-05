import { 
  Request,
  Response,
  NextFunction,
} from 'express';

export async function mockUser(req: Request, _res: Response, next: NextFunction) {
  req.user = {
    id: 1,
    email: 'miles@gmail.com',
  };

  next();
}
