import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request {
      token?: string;
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token
  console.log('Middleware - Received token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  // req.token = token
  next()
}